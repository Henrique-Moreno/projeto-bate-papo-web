import { ListRegisterUserService } from "../../services/registerUser/ListRegisterUserService.js";

class ListRegisterUserController {
  async handle(req, res) {

    const listRegisterUserService  = new ListRegisterUserService();

    const listMesage = await listRegisterUserService .execute();

    return res.json(listMesage);

  }
}

export{ ListRegisterUserController }