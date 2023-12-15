import prismaClient  from "../../prisma/index.js";

class  DetailUserService {
  async execute( user_id ) {

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      }
    })

    return user;

  }
}

export { DetailUserService }