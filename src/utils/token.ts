export interface Equatable<T> {
  equals(other: T): boolean;
}

export class PositiveFiniteInteger implements Equatable<PositiveFiniteInteger> {
  constructor(private readonly positiveFiniteInteger: number) {
    if (
      !Number.isFinite(this.positiveFiniteInteger) ||
      !Number.isInteger(this.positiveFiniteInteger) ||
      this.positiveFiniteInteger < 0
    ) {
      throw new Error(
        `Number must be a non-negative integer value! ${positiveFiniteInteger}`,
      );
    }
  }

  [Symbol.toPrimitive](hint?: string): number | string {
    if (hint === 'string') {
      this.toString();
    }

    return this.positiveFiniteInteger;
  }

  plus(positiveFiniteInteger: PositiveFiniteInteger): PositiveFiniteInteger {
    return new PositiveFiniteInteger(
      this.positiveFiniteInteger + positiveFiniteInteger.positiveFiniteInteger,
    );
  }

  minus(positiveFiniteInteger: PositiveFiniteInteger): PositiveFiniteInteger {
    return new PositiveFiniteInteger(
      this.positiveFiniteInteger - positiveFiniteInteger.positiveFiniteInteger,
    );
  }

  isGreaterThan(positiveFiniteInteger: PositiveFiniteInteger): boolean {
    return (
      this.positiveFiniteInteger > positiveFiniteInteger.positiveFiniteInteger
    );
  }

  isGreaterThanOrEqualTo(
    positiveFiniteInteger: PositiveFiniteInteger,
  ): boolean {
    return (
      this.positiveFiniteInteger >= positiveFiniteInteger.positiveFiniteInteger
    );
  }

  isLessThan(positiveFiniteInteger: PositiveFiniteInteger): boolean {
    return (
      this.positiveFiniteInteger < positiveFiniteInteger.positiveFiniteInteger
    );
  }

  isLessThanOrEqualTo(positiveFiniteInteger: PositiveFiniteInteger): boolean {
    return (
      this.positiveFiniteInteger <= positiveFiniteInteger.positiveFiniteInteger
    );
  }

  toString(): string {
    return `${this.positiveFiniteInteger}`;
  }

  valueOf(): number {
    return this.positiveFiniteInteger;
  }

  toJSON(): number {
    return this.positiveFiniteInteger;
  }

  equals(other: PositiveFiniteInteger): boolean {
    return this.positiveFiniteInteger === other.positiveFiniteInteger;
  }
}

export class Token {
  protected value: number;
  protected denomination: number;
  constructor(value: number, denomination: number | string) {
    if (!Number.isFinite(value) || value < 0) {
      throw new Error('Token must be a non-negative finite number');
    }
    this.value = +value.toFixed(6);
    this.denomination = +denomination;
  }

  valueOf(): number {
    return this.value;
  }

  toMToken(): mToken {
    return new mToken(
      Math.floor(this.value * 10 ** this.denomination),
      this.denomination,
    );
  }

  toString(): string {
    return `${this.value}`;
  }
}

export class mToken extends PositiveFiniteInteger {
  protected denomination: number;
  constructor(value: number, denomination: number | string) {
    super(value);
    this.denomination = +denomination;
  }

  multiply(multiplier: mToken | number): mToken {
    // always round down on multiplication and division
    const result = Math.floor(this.valueOf() * multiplier.valueOf());
    return new mToken(result, this.denomination);
  }

  divide(divisor: mToken | number): mToken {
    if (divisor.valueOf() === 0) {
      // TODO: how should we handle this
      throw new Error('Cannot divide by zero');
    }
    // always round down on multiplication and division
    const result = Math.floor(this.valueOf() / divisor.valueOf());
    return new mToken(result, this.denomination);
  }

  plus(addend: mToken): mToken {
    const result = super.plus(addend);
    return new mToken(result.valueOf(), this.denomination);
  }

  minus(subtractHend: mToken): mToken {
    const result = super.minus(subtractHend);
    return new mToken(result.valueOf(), this.denomination);
  }

  toToken(): Token {
    return new Token(
      this.valueOf() / 10 ** this.denomination,
      this.denomination,
    );
  }
}
