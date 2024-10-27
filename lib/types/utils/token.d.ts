export interface Equatable<T> {
  equals(other: T): boolean;
}
export declare class PositiveFiniteInteger
  implements Equatable<PositiveFiniteInteger>
{
  private readonly positiveFiniteInteger;
  constructor(positiveFiniteInteger: number);
  [Symbol.toPrimitive](hint?: string): number | string;
  plus(positiveFiniteInteger: PositiveFiniteInteger): PositiveFiniteInteger;
  minus(positiveFiniteInteger: PositiveFiniteInteger): PositiveFiniteInteger;
  isGreaterThan(positiveFiniteInteger: PositiveFiniteInteger): boolean;
  isGreaterThanOrEqualTo(positiveFiniteInteger: PositiveFiniteInteger): boolean;
  isLessThan(positiveFiniteInteger: PositiveFiniteInteger): boolean;
  isLessThanOrEqualTo(positiveFiniteInteger: PositiveFiniteInteger): boolean;
  toString(): string;
  valueOf(): number;
  toJSON(): number;
  equals(other: PositiveFiniteInteger): boolean;
}
export declare class Token {
  protected value: number;
  protected denomination: number;
  constructor(value: number, denomination: number | string);
  valueOf(): number;
  toMToken(): mToken;
  toString(): string;
}
export declare class mToken extends PositiveFiniteInteger {
  protected denomination: number;
  constructor(value: number, denomination: number | string);
  multiply(multiplier: mToken | number): mToken;
  divide(divisor: mToken | number): mToken;
  plus(addend: mToken): mToken;
  minus(subtractHend: mToken): mToken;
  toToken(): Token;
}
