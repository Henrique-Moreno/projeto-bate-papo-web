import { RegisterUserService } from "../../services/registerUser/RegisterUserService.js";

class RegisterUserController{
  async handle(req, res) {
    // Obtém os dados da requisição
    const { name, dateofbirth, nickname } = req.body;

    // Instancia o serviço responsável por criar usuários
    const registerUserService = new RegisterUserService();

    const registerUser = await registerUserService.execute({ name, dateofbirth, nickname });

    return res.json(registerUser);
  }
}

export { RegisterUserController }