const API_URL =
  "http://localhost:3000";

export async function getPacotes() {

  const response =
    await fetch(
      `${API_URL}/pacotes`
    );

  const data =
    await response.json();

  if (!response.ok) {

    throw new Error(
      data.erro
    );

  }

  return data;

}