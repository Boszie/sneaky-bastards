export interface IUserCaseError {
  message: string;
}

export abstract class UseCaseError implements IUserCaseError {
  public readonly message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export default UseCaseError;
