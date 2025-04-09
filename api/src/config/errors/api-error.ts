import { ERROR_401, ERROR_404, ERROR_500 } from '../constants';

export class ApiError extends Error {
  field?: string;
  status: number;

  constructor(status: number, message: string, field?: string) {
    super(message);
    this.status = status;
    this.field = field;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends ApiError {
  constructor() {
    super(404, ERROR_404);
  }
}

export class UnauthorizedError extends ApiError {
  constructor() {
    super(401, ERROR_401);
  }
}

export class InternalServerError extends ApiError {
  constructor() {
    super(500, ERROR_500);
  }
}
