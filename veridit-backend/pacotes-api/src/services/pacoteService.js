import pacoteRepository
from "../repositories/pacoteRepository.js";

class PacoteService {

  async listarPacotes() {

    return await pacoteRepository.findAll();

  }

  async buscarPorId(id) {

    const pacote =
      await pacoteRepository.findById(id);

    if (!pacote) {

      throw new Error(
        "Pacote não encontrado"
      );

    }

    return pacote;

  }

}

export default new PacoteService();