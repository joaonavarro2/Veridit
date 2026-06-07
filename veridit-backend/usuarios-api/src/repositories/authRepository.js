import prisma from "../prisma/prismaClient.js";
class AuthRepository {

  async findByEmail(email) {

    return await prisma.usuarios.findUnique({
      where: {
        email,
      },
    });

  }

}

export default new AuthRepository();