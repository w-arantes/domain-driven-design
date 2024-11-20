import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async () => {
    return Promise.resolve()
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New Question',
    content: 'Question Content',
  })

  expect(question.id).toBeTruthy()
})
