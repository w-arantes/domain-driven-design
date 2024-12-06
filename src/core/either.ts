import { an } from "vitest/dist/types-e3c9754d";

/**
 * Represents the "Left" side of a disjoint union (Either).
 * Typically used to represent an error or failure case.
 *
 * @template L - The type of the value held by the Left instance.
 * @template R - The type of the value held by the Right instance (not used here).
 */
export class Left<L, R> {
  readonly value: any
  constructor(value: any) {
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
export class Right<L, R> {
  readonly value: any
  constructor(value: any) {
    this.value = value
  }
}
