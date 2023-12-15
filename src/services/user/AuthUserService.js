import prismaClient from "../../prisma/index.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

class AuthUserService {
  async execute({ email, password }) {

    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new Error("user/password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("user/password incorrect")
    }

    const token = jwt.sign({
      name: user.name,
      email: user.email
    },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }

  }
}

export { AuthUserService }