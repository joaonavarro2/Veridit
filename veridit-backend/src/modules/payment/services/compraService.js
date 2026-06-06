import compraRepository
from "../repositories/compraRepository.js";

import usuarioRepository
from "../../auth/repositories/usuarioRepository.js";

import pacoteRepository
from "../repositories/pacoteRepository.js";

class CompraService {

  async processarCompra(
    usuario_id,
    pacote_id
  ) {

    const usuario =
      await usuarioRepository.findById(
        usuario_id
      );

    if (!usuario) {

      throw new Error(
        "Usuário não encontrado"
      );

    }

    const pacote =
      await pacoteRepository.findById(
        pacote_id
      );

    if (!pacote) {

      throw new Error(
        "Pacote não encontrado"
      );

    }

    const compra =
      await compraRepository.create({
        usuario_id,
        pacote_id,
        valor_pago: pacote.preco,
      });

    const novoSaldo =
      usuario.saldo_creditos +
      pacote.quantidade_creditos;

    await usuarioRepository.atualizarSaldo(
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