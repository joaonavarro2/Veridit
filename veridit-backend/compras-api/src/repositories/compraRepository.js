import prisma from "../prisma/prismaClient.js";

class CompraRepository {

  async create(data) {

    return await prisma.compras.create({
      data,
    });

  }

}

export default new CompraRepository();