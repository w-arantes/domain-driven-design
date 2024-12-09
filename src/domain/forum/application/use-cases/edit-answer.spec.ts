import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedError } from '@/domain/forum/application/use-cases/error/not-allowed-error'
import { EditAnswerUseCase } from './edit-answer'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: EditAnswerUseCase

describe('Edit Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new EditAnswerUseCase(inMemoryAnswersRepository)
  })

  it('should be able to edit a answer', async () => {
    const fakeAnswerAuthor = new UniqueEntityId('author-1')
    const newAnswerId = 'answer-1'
    const newAnswer = makeAnswer(
      {
        authorId: fakeAnswerAuthor,
      },
      new UniqueEntityId(newAnswerId),
    )

    await inMemoryAnswersRepository.create(newAnswer)

    await sut.execute({
      answerId: newAnswerId,
      authorId: fakeAnswerAuthor.toString(),
      content: 'New Content',
    })

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      content: 'New Content',
    })
  })

  it('should not be able to edit a answer from another user', async () => {
    const fakeAnswerAuthor = new UniqueEntityId('author-1')
    const newAnswerId = 'answer-1'
    const newAnswer = makeAnswer(
      {
        authorId: fakeAnswerAuthor,
      },
      new UniqueEntityId(newAnswerId),
    )

    await inMemoryAnswersRepository.create(newAnswer)

    const result = await sut.execute({
      answerId: newAnswerId,
      authorId: 'author-2',
      content: 'New Content',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedError)
  })
})
