export class PositiveFiniteInteger {
  positiveFiniteInteger;
  constructor(positiveFiniteInteger) {
    this.positiveFiniteInteger = positiveFiniteInteger;
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
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      this.toString();
    }
    return this.positiveFiniteInteger;
  }
  plus(positiveFiniteInteger) {
    return new PositiveFiniteInteger(
      this.positiveFiniteInteger + positiveFiniteInteger.positiveFiniteInteger,
    );
  }
  minus(positiveFiniteInteger) {
    return new PositiveFiniteInteger(
      this.positiveFiniteInteger - positiveFiniteInteger.positiveFiniteInteger,
    );
  }
  isGreaterThan(positiveFiniteInteger) {
    return (
      this.positiveFiniteInteger > positiveFiniteInteger.positiveFiniteInteger
    );
  }
  isGreaterThanOrEqualTo(positiveFiniteInteger) {
    return (
      this.positiveFiniteInteger >= positiveFiniteInteger.positiveFiniteInteger
    );
  }
  isLessThan(positiveFiniteInteger) {
    return (
      this.positiveFiniteInteger < positiveFiniteInteger.positiveFiniteInteger
    );
  }
  isLessThanOrEqualTo(positiveFiniteInteger) {
    return (
      this.positiveFiniteInteger <= positiveFiniteInteger.positiveFiniteInteger
    );
  }
  toString() {
    return `${this.positiveFiniteInteger}`;
  }
  valueOf() {
    return this.positiveFiniteInteger;
  }
  toJSON() {
    return this.positiveFiniteInteger;
  }
  equals(other) {
    return this.positiveFiniteInteger === other.positiveFiniteInteger;
  }
}
export class Token {
  value;
  denomination;
  constructor(value, denomination) {
    if (!Number.isFinite(value) || value < 0) {
      throw new Error('Token must be a non-negative finite number');
    }
    this.value = +value.toFixed(6);
    this.denomination = +denomination;
  }
  valueOf() {
    return this.value;
  }
  toMToken() {
    return new mToken(
      Math.floor(this.value * 10 ** this.denomination),
      this.denomination,
    );
  }
  toString() {
    return `${this.value}`;
  }
}
export class mToken extends PositiveFiniteInteger {
  denomination;
  constructor(value, denomination) {
    super(value);
    this.denomination = +denomination;
  }
  multiply(multiplier) {
    // always round down on multiplication and division
    const result = Math.floor(this.valueOf() * multiplier.valueOf());
    return new mToken(result, this.denomination);
  }
  divide(divisor) {
    if (divisor.valueOf() === 0) {
      // TODO: how should we handle this
      throw new Error('Cannot divide by zero');
    }
    // always round down on multiplication and division
    const result = Math.floor(this.valueOf() / divisor.valueOf());
    return new mToken(result, this.denomination);
  }
  plus(addend) {
    const result = super.plus(addend);
    return new mToken(result.valueOf(), this.denomination);
  }
  minus(subtractHend) {
    const result = super.minus(subtractHend);
    return new mToken(result.valueOf(), this.denomination);
  }
  toToken() {
    return new Token(
      this.valueOf() / 10 ** this.denomination,
      this.denomination,
    );
  }
}
