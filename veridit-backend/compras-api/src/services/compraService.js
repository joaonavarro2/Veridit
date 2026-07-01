import compraRepository
from "../repositories/compraRepository.js";

import usuarioClient
from "../clients/usuarioClient.js";

import pacoteClient
from "../clients/pacoteClient.js";

class CompraService {

  async processarCompra(
    usuario_id,
    pacote_id
  ) {

    console.log(
      `[COMPRA] Iniciando compra para usuário ${usuario_id}`
    );

    const usuario =
      await usuarioClient.buscarPorId(
        usuario_id
      );

    if (!usuario) {

      console.error(
        `[COMPRA] Usuário ${usuario_id} não encontrado`
      );

      throw new Error(
        "Usuário não encontrado"
      );

    }

    console.log(
      `[COMPRA] Usuário encontrado: ${usuario.nome}`
    );

    const pacote =
      await pacoteClient.buscarPorId(
        pacote_id
      );

    if (!pacote) {

      console.error(
        `[COMPRA] Pacote ${pacote_id} não encontrado`
      );

      throw new Error(
        "Pacote não encontrado"
      );

    }

    console.log(
      `[COMPRA] Pacote encontrado: ${pacote.nome}`
    );

    const compra =
      await compraRepository.create({
        usuario_id,
        pacote_id,
        valor_pago: pacote.preco,
      });

    console.log(
      `[COMPRA] Compra registrada: ${compra.id}`
    );

    const novoSaldo =
      usuario.saldo_creditos +
      pacote.quantidade_creditos;

    await usuarioClient.atualizarSaldo(
      usuario_id,
      novoSaldo
    );

    console.log(
      `[COMPRA] Saldo atualizado para ${novoSaldo}`
    );

    return {

      compra,

      comprovante: {

        transacao_id:
          compra.id,

        cliente:
          usuario.nome,

        pacote:
          pacote.nome,

        creditos_adicionados:
          pacote.quantidade_creditos,

        saldo_anterior:
          usuario.saldo_creditos,

        saldo_atual:
          novoSaldo,

      },

    };

  }

}

export default new CompraService();