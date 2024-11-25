import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { makeAnswer } from 'test/factories/make-answer'
import { DeleteAnswerUseCase } from './delete-answer'

describe('Delete Answer', () => {
  let inMemoryAnswersRepository: InMemoryAnswersRepository
  let sut: DeleteAnswerUseCase

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

    expect(() => {
      return sut.execute({
        answerId: newAnswerId,
        authorId: 'author-2',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
