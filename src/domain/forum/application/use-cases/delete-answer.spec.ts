import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedError } from '@/domain/forum/application/use-cases/error/not-allowed-error'
import { DeleteAnswerUseCase } from './delete-answer'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: DeleteAnswerUseCase

describe('Delete Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new DeleteAnswerUseCase(inMemoryAnswersRepository)
  })

  it('should be able to delete a answer', async () => {
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
    })

    expect(inMemoryAnswersRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a answer from another user', async () => {
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
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedError)
  })
})
