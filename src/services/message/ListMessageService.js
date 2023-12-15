import prismaClient from "../../prisma/index.js";

class ListMessageService {
  async execute() {

    const listMessage = await prismaClient.message.findMany({
      select: {
        id: true,
        message: true,
        created_at: true,
        user_id: true,
        register_id: true
      }
    })

    return listMessage;

  }
}

export { ListMessageService }