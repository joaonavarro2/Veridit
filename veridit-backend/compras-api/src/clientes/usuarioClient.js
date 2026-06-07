class UsuarioClient {

  async buscarPorId(id) {

    const response =
      await fetch(
        `http://localhost:3001/usuarios/${id}`
      );

    if (!response.ok) {

      throw new Error(
        "Erro ao buscar usuário"
      );

    }

    return await response.json();

  }

  async atualizarSaldo(
    id,
    saldo_creditos
  ) {

    const response =
      await fetch(
        `http://localhost:3001/usuarios/${id}/saldo`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            saldo_creditos,
          }),
        }
      );

    if (!response.ok) {

      throw new Error(
        "Erro ao atualizar saldo"
      );

    }

    return await response.json();

  }

}

export default new UsuarioClient();