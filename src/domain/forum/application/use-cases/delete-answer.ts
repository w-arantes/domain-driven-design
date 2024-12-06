import { Either, left, right } from '@/core/either'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'

interface DeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

type DeleteAnswerUseCaseResponse = Either<string, {}>

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    authorId,
    answerId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      return left('Not allowed to delete this answer.')
    }

    await this.answersRepository.delete(answer)

    return right({})
  }
}
