import { AnswersRepository } from "@/repositories/answers-repository";
import { Answer } from "@/domain/entities/answer";

import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "New answer",
  });

  expect(answer.content).toEqual("New answer");
});
