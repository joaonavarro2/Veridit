import pacoteRepository
from "../repositories/pacoteRepository.js";

class PacoteService {

  async listarPacotes() {

    return await pacoteRepository.findAll();

  }

}

export default new PacoteService();