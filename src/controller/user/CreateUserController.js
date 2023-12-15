import { CreateUserServices } from "../../services/user/CreateUserServices.js";

class CreateUserController {
  async handle(req, res) {
    // Obtém os dados da requisição
    const { name, email, password } = req.body;

    // Instancia o serviço responsável por criar usuários
    const createUserService = new CreateUserServices();

    const user = await createUserService.execute({ name, email, password });

    return res.json(user);
  }
}

export { CreateUserController }