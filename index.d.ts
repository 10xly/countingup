export function add(a: number, b: number): number
export function subtract(a: number, b: number): number
export function multiply(a: number, b: number): number
export function divide(a: number, b: number): number
export function modulo(a: number, b: number): number
export function pow(a: number, b: number): number

export const E: number
export const PI: number
export const SQRT2: number
export const SQRT1_2: number
export const LN2: number
export const LN10: number
export const LOG2E: number
export const LOG10E: number
export const ZERO: number
export const NaN: number
export const POSITIVE_INFINITY: number
export const NEGATIVE_INFINITY: number

export enum DIRECTION {
  FORWARDS = "forwards",
  REVERSE = "reverse",
}

export class Counter {
  constructor(base?: any)

  /**
   * Resets the internal counter to the provided base or zero
   */
  reset(base?: any): this

  /**
   * Returns the current state of the counter
   */
  getCurrentNumber(): number

  /**
   * Increments or decrements the counter based on direction
   * @param increment The amount to count (defaults to 1)
   * @param direction The direction to count (defaults to "forwards")
   */
  count(increment?: any, direction?: DIRECTION | string): void

  static DIRECTION: typeof DIRECTION
}
