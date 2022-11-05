import Result from '../result/Result';
import UseCaseError from './UseCaseError';

export namespace AppError {
  export class UnexpectedError extends Result<UseCaseError> {
    constructor(err: string) {
      super(false, {
        message: `An unexpected error occurred.`,
        error: err,
      } as UseCaseError);
      console.log(`[AppError]: An unexpected error occurred`);
      console.error(err);
    }

    public static create(err: any): UnexpectedError {
      return new UnexpectedError(err);
    }
  }
}
