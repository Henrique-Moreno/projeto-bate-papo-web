import { ListMessageService } from "../../services/message/ListMessageService.js";

class ListMessageController {
  async handle(req, res) {

    const listMessageService = new ListMessageService();

    const listMesage = await listMessageService.execute();

    return res.json(listMesage);

  }
}

export{ ListMessageController }