import BaseController from '@core/base-controller';
import { RegisterUserDTO } from './RegisterUser.dto';
import { Request, Response } from 'express';
import RegisterUserUseCase from './RegisterUser.use-case';
import { TRPCError } from '@trpc/server';

class RegisterUserController extends BaseController {
  private useCase: RegisterUserUseCase;

  constructor(useCase: RegisterUserUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: Request, res: Response) {
    const dto: RegisterUserDTO = req.body;

    try {
      const result = await this.useCase.execute(dto);
      return this.created(result);
    } catch (err) {
      return this.fail(err);
    }
  }
}

export default RegisterUserController;
