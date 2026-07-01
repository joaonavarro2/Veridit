import pacoteRepository
from "../repositories/pacoteRepository.js";

class PacoteService {

  async listarPacotes() {
    console.log(
      "[PACOTES] Listagem de pacotes realizada"
    );
    return await pacoteRepository.findAll();

  }

  async buscarPorId(id) {

    const pacote =
      await pacoteRepository.findById(id);
      console.log(
        `[PACOTES] Consulta do pacote ${id}`
      );

    if (!pacote) {

      throw new Error(
        "Pacote não encontrado"
      );

    }

    return pacote;

  }

}

export default new PacoteService();