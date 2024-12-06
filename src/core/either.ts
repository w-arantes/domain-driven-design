/**
 * Represents the "Left" side of a disjoint union (Either).
 * Typically used to represent an error or failure case.
 *
 * @template L - The type of the value held by the Left instance.
 * @template R - The type of the value held by the Right instance (not used here).
 */
export class Left<L> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }
}

/**
 * Represents the "Right" side of a disjoint union (Either).
 * Typically used to represent a success or valid case.
 *
 * @template L - The type of the value held by the Left instance (not used here).
 * @template R - The type of the value held by the Right instance.
 */
export class Right<R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}