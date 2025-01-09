import { makeAnswer } from 'test/factories/make-answer'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'
import { OnAnswerCreated } from './on-answer-created'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAnserAttachmentsRepository: InMemoryAnswerAttachmentsRepository

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryAnserAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnserAttachmentsRepository,
    )
  })

  it('should send a notification when an answer is created', async () => {
    const onAnswerCreated = new OnAnswerCreated()
    const answer = makeAnswer()

    inMemoryAnswersRepository.create(answer)
  })
})
