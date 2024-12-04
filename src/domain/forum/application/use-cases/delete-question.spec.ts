import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { DeleteQuestionUseCase } from './delete-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: DeleteQuestionUseCase

describe('Delete Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new DeleteQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to delete a question', async () => {
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
    })

    expect(inMemoryQuestionsRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a question from another user', async () => {
    const fakeQuestionAuthor = new UniqueEntityId('author-1')
    const newQuestionId = 'question-1'
    const newQuestion = makeQuestion(
      {
        authorId: fakeQuestionAuthor,
      },
      new UniqueEntityId(newQuestionId),
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    expect(() => {
      return sut.execute({
        questionId: newQuestionId,
        authorId: 'author-2',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
