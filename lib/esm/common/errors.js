export class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
export class NotFound extends BaseError {}
export class BadRequest extends BaseError {}
export class FailedRequestError extends BaseError {
  constructor(status, message) {
    super(`Failed request: ${status}: ${message}`);
  }
}
export class UnknownError extends BaseError {}
export class WriteInteractionError extends BaseError {}
export class InvalidSignerError extends BaseError {
  constructor() {
    super(
      'Invalid signer. Please provide a valid signer to interact with the contract.',
    );
  }
}
export class InvalidContractConfigurationError extends BaseError {
  constructor() {
    super('Invalid contract configuration');
  }
}
export class InvalidProcessConfigurationError extends BaseError {
  constructor() {
    super('Invalid process configuration');
  }
}
export class AbortError extends BaseError {}
