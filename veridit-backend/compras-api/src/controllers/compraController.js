import compraService
from "../services/compraService.js";

class CompraController {

  async criar(req, res) {

    try {

      const {
        usuario_id,
        pacote_id,
      } = req.body;

      const resultado =
        await compraService.processarCompra(
          usuario_id,
          pacote_id
        );

      return res.status(201).json({
        mensagem:
          "Compra realizada com sucesso",
        comprovante:
          resultado.comprovante,
      });

    } catch (error) {

      return res.status(400).json({
        erro: error.message,
      });

    }

  }

}

export default new CompraController();