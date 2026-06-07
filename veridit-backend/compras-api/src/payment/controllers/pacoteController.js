import pacoteService
from "../services/pacoteService.js";

class PacoteController {

  async listar(req, res) {

    try {

      const pacotes =
        await pacoteService.listarPacotes();

      return res.status(200).json(
        pacotes
      );

    } catch (error) {

      return res.status(500).json({
        erro: error.message
      });

    }

  }

}

export default new PacoteController();