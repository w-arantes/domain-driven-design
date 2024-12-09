import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedError } from '@/domain/forum/application/use-cases/error/not-allowed-error'
import { EditQuestionUseCase } from './edit-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: EditQuestionUseCase

describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to edit a question', async () => {
    const fakeQuestionAuthor = new UniqueEntityId('author-1')
    const newQuestionId = 'question-1'
    const newQuestion = makeQuestion(
      {
        authorId: fakeQuestionAuthor,
      },
      new UniqueEntityId(newQuestionId),
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    await sut.execute({
      questionId: newQuestionId,
      authorId: fakeQuestionAuthor.toString(),
      title: 'New Title',
      content: 'New Content',
    })

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: 'New Title',
      content: 'New Content',
    })
  })

  it('should not be able to edit a question from another user', async () => {
    const fakeQuestionAuthor = new UniqueEntityId('author-1')
    const newQuestionId = 'question-1'
    const newQuestion = makeQuestion(
      {
        authorId: fakeQuestionAuthor,
      },
      new UniqueEntityId(newQuestionId),
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    const result = await sut.execute({
      questionId: newQuestionId,
      authorId: 'author-2',
      title: 'New Title',
      content: 'New Content',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedError)
  })
})
