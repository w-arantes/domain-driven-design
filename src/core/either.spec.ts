import { Either, left, right } from "./either"

function doSomething(shouldSucceed: boolean): Either<string, number> {
  if(shouldSucceed) {
     return right(10)
  } else {
    return left('error')
  }
}

test('success result', () => {
  const successResult = doSomething(true)

  expect(successResult.isRight()).toBe(true)
  expect(successResult.isLeft()).toBe(false)
})


test('error result', () => {
  const errorResult = doSomething(false)

  expect(errorResult.isLeft()).toBe(true)
  expect(errorResult.isRight()).toBe(false)
})