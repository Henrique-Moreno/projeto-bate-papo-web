import prismaClient from "../../prisma/index.js";

class CreateMessageService {
  async execute({ message, user_id, register_id }) {
    if (message === '') {
      throw new Error('Message invalid');
    }

    try {
      const createdMessage = await prismaClient.message.create({
        data: {
          message: message,
          user_id: user_id,
          register_id: register_id
        }
      });

      return createdMessage;
    } catch (error) {
      console.error('Error creating message:', error);
      throw new Error('Failed to create message');
    }
  }
}

export { CreateMessageService };
