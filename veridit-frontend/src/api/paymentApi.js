const API_URL =
  "http://localhost:3002";

export async function getPacotes() {

  const response =
    await fetch(
      `${API_URL}/pacotes`
    );

  const data =
    await response.json();

  if (!response.ok) {

    throw new Error(
      data.erro || "Erro ao buscar pacotes"
    );

  }

  return data;

}

export async function comprarPacote(
  usuario_id,
  pacote_id
) {

  const response =
    await fetch(
      "http://localhost:3003/compras",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          usuario_id,
          pacote_id,
        }),
      }
    );

  const data =
    await response.json();

  if (!response.ok) {

    throw new Error(
      data.erro || "Erro ao realizar compra"
    );

  }

  return data;

}