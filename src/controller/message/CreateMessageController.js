import { CreateMessageService } from "../../services/message/CreateMessageService.js";

class CreateMessageController {
  async handle(req, res) {

    const {  message, user_id, register_id } = req.body;

    const createMessageService = new CreateMessageService();

    const messages = await createMessageService.execute({  message, user_id, register_id });

    return res.json(messages);

  }
}

export { CreateMessageController }