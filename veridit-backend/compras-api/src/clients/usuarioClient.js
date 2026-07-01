const USUARIOS_API =
  "http://localhost:3001";

class UsuarioClient {

  async buscarPorId(id) {

    console.log(
      `[UsuarioClient] Buscando usuário ${id}`
    );

    const response =
      await fetch(
        `${USUARIOS_API}/internal/usuarios/${id}`
      );

    console.log(
      "Status:",
      response.status
    );

    if (!response.ok) {

      const erro =
        await response.text();

      console.log(erro);

      throw new Error(
        "Erro ao consultar usuário"
      );

    }

    return await response.json();

  }

  async atualizarSaldo(
    id,
    saldo_creditos
  ) {

    console.log(
      `[UsuarioClient] Atualizando saldo do usuário ${id}`
    );

    console.log({
      saldo_creditos,
    });

    const response =
      await fetch(
        `${USUARIOS_API}/internal/usuarios/${id}/saldo`,
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

    console.log(
      "Status atualização:",
      response.status
    );

    if (!response.ok) {

      const erro =
        await response.text();

      console.log(erro);

      throw new Error(
        "Erro ao atualizar saldo"
      );

    }

    const data =
      await response.json();

    console.log(data);

    return data;

  }

}

export default new UsuarioClient();