import prisma from "../prisma/prismaClient.js";

class PacoteRepository {

  async findAll() {

    return await prisma.pacotes_creditos.findMany({
      where: {
        ativo: true
      }
    });

  }

  async findById(id) {

    return await prisma.pacotes_creditos.findUnique({
      where: {
        id
      }
    });

  }

}

export default new PacoteRepository();