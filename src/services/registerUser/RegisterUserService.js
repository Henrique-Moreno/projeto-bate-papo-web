import prismaClient  from "../../prisma/index.js";

class RegisterUserService {
  async execute({ name, dateofbirth, nickname  }) {

    if (!name && !nickname) {
      throw new Error("Você deve fornecer pelo menos name ou apelido.");
    }

    const registerUserAlreadyExists = await prismaClient.register.findFirst({
      where: {
        name: name,
        nickname: nickname,
        dateofbirth: dateofbirth
      }
    })

    if (registerUserAlreadyExists) {
      throw new Error('User already exists')
    }

    const registerUser = await prismaClient.register.create({
      data: {
        name: name,
        dateofbirth: dateofbirth,
        nickname: nickname,
      }
    })

    return registerUser;

  }
}

export { RegisterUserService }