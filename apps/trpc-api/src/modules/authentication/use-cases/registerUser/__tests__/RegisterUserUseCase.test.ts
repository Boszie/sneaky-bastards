import { describe, it } from 'vitest';
import { registerUserController } from '../';
import { Request, Response } from 'express';

describe('RegisterUserUseCase.ts', () => {
  describe('with invalid data', () => {
    describe('with an invalid email address', () => {
      it.todo('should return an error message');
    });

    describe('with an invalid username', () => {
      it.todo('should return an error message');
    });
  });
});
