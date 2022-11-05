import { UseCase } from '@core/use-case';
import { Either, Result, left, right } from '@core/result/Result';
import { RegisterUserDTO } from './RegisterUser.dto';
import { registerUserSchema } from './RegisterUser.schema';
import { ZodError, ZodIssue } from 'zod';
import { AppError } from '@core/app-error/AppError';

type Response = Either<ZodError | AppError.UnexpectedError, Result<void>>;

class RegisterUserUseCase implements UseCase<RegisterUserDTO, Response> {
  async execute(request: RegisterUserDTO): Promise<Response> {
    const validatedOrError = registerUserSchema.safeParse(request);

    if (!validatedOrError.success) {
      const error = validatedOrError.error.issues[0].message;
      return left(Result.fail<void>(error)) as Response;
    }

    try {
      // Database implementation
    } catch (err) {
      return left(new AppError.UnexpectedError(err as string)) as Response;
    }
  }
}

export default RegisterUserUseCase;
