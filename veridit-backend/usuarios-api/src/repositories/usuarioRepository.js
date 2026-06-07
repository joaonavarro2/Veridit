import prisma from "../prisma/prismaClient.js";
class UsuarioRepository {

  async create(data) {

    return await prisma.usuarios.create({
      data,
    });

  }

  async findByEmail(email) {

    return await prisma.usuarios.findUnique({
      where: {
        email,
      },
    });

  }

  async findById(id) {

    return await prisma.usuarios.findUnique({
      where: {
        id,
      },
    });

  }

  async atualizarSaldo(
    id,
    saldo_creditos
  ) {

    return await prisma.usuarios.update({
      where: {
        id,
      },
      data: {
        saldo_creditos,
      },
    });

  }

}

export default new UsuarioRepository();