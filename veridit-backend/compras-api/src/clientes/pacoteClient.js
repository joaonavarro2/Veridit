class PacoteClient {

  async buscarPorId(id) {

    const response =
      await fetch(
        `http://localhost:3002/pacotes/${id}`
      );

    if (!response.ok) {

      throw new Error(
        "Erro ao buscar pacote"
      );

    }

    return await response.json();

  }

}

export default new PacoteClient();