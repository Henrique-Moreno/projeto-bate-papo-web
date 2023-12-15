import prismaClient from "../../prisma/index.js";

class ListRegisterUserService {
  async execute() {

    const listRegisterUser = await prismaClient.register.findMany({
      select: {
        id: true,
        name: true,
        nickname: true,
        dateofbirth: true
      }
    })

    return listRegisterUser;

  }
}

export { ListRegisterUserService }