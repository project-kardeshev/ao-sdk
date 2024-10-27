export declare class BaseError extends Error {
  constructor(message: string);
}
export declare class NotFound extends BaseError {}
export declare class BadRequest extends BaseError {}
export declare class FailedRequestError extends BaseError {
  constructor(status: number, message: string);
}
export declare class UnknownError extends BaseError {}
export declare class WriteInteractionError extends BaseError {}
export declare class InvalidSignerError extends BaseError {
  constructor();
}
export declare class InvalidContractConfigurationError extends BaseError {
  constructor();
}
export declare class InvalidProcessConfigurationError extends BaseError {
  constructor();
}
export declare class AbortError extends BaseError {}
