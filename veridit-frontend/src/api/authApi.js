const API_URL =
  import.meta.env.VITE_USUARIOS_API;

export async function loginRequest(
  email,
  senha
) {

  const response =
    await fetch(
      `${API_URL}/login`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          email,
          senha,
        }),
      }
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

export async function registerRequest(
  nome,
  email,
  senha
) {

  const response =
    await fetch(
      `${API_URL}/usuarios`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      }
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