'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AbortError =
  exports.InvalidProcessConfigurationError =
  exports.InvalidContractConfigurationError =
  exports.InvalidSignerError =
  exports.WriteInteractionError =
  exports.UnknownError =
  exports.FailedRequestError =
  exports.BadRequest =
  exports.NotFound =
  exports.BaseError =
    void 0;
class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
exports.BaseError = BaseError;
class NotFound extends BaseError {}
exports.NotFound = NotFound;
class BadRequest extends BaseError {}
exports.BadRequest = BadRequest;
class FailedRequestError extends BaseError {
  constructor(status, message) {
    super(`Failed request: ${status}: ${message}`);
  }
}
exports.FailedRequestError = FailedRequestError;
class UnknownError extends BaseError {}
exports.UnknownError = UnknownError;
class WriteInteractionError extends BaseError {}
exports.WriteInteractionError = WriteInteractionError;
class InvalidSignerError extends BaseError {
  constructor() {
    super(
      'Invalid signer. Please provide a valid signer to interact with the contract.',
    );
  }
}
exports.InvalidSignerError = InvalidSignerError;
class InvalidContractConfigurationError extends BaseError {
  constructor() {
    super('Invalid contract configuration');
  }
}
exports.InvalidContractConfigurationError = InvalidContractConfigurationError;
class InvalidProcessConfigurationError extends BaseError {
  constructor() {
    super('Invalid process configuration');
  }
}
exports.InvalidProcessConfigurationError = InvalidProcessConfigurationError;
class AbortError extends BaseError {}
exports.AbortError = AbortError;
