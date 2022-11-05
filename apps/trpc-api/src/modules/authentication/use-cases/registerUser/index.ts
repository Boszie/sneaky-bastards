import RegisterUserController from './RegisterUser.controller';
import RegisterUserUseCase from './RegisterUser.use-case';

const registerUserUseCase = new RegisterUserUseCase();
const registerUserController = new RegisterUserController(registerUserUseCase);

export { registerUserController, registerUserUseCase };
