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

    const usuario =
      await usuarioClient.buscarPorId(
        usuario_id
      );

    const pacote =
      await pacoteClient.buscarPorId(
        pacote_id
      );

    const compra =
      await compraRepository.create({
        usuario_id,
        pacote_id,
        valor_pago: pacote.preco,
      });

    const novoSaldo =
      usuario.saldo_creditos +
      pacote.quantidade_creditos;

    await usuarioClient.atualizarSaldo(
      usuario_id,
      novoSaldo
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