import { TRPCError } from '@trpc/server';
import { Request, Response } from 'express';

abstract class BaseController {
  protected abstract executeImpl(
    req: Request,
    res: Response
  ): Promise<void | unknown>;

  public async execute(req: Request, res: Response): Promise<void | unknown> {
    try {
      return await this.executeImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(err);
      return this.fail('An unexpected error occurred');
    }
  }

  public ok<T>(dto?: T) {
    if (!!dto) {
      return {
        status: 'ok',
        data: dto,
      };
    }

    return {
      status: 'ok',
    };
  }

  public created<T>(dto?: T) {
    return {
      status: 'created',
      object: dto ? dto : undefined,
    };
  }

  public fail(error: unknown | string) {
    return {
      code: 'BAD_REQUEST',
      message: error,
    } as TRPCError;
  }
}

export default BaseController;
