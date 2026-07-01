import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { getUsuario } from "../api/authApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {

    const storedUser =
      localStorage.getItem("veridit-user");

    const storedToken =
      localStorage.getItem("veridit-token");

    if (storedUser) {

      setUser(
        JSON.parse(storedUser)
      );

    }

    if (storedToken) {

      setToken(storedToken);

    }

  }, []);

  function login(usuario, jwtToken) {

    setUser(usuario);
    setToken(jwtToken);

    localStorage.setItem(
      "veridit-user",
      JSON.stringify(usuario)
    );

    localStorage.setItem(
      "veridit-token",
      jwtToken
    );

  }

  async function atualizarUsuario() {

    if (!user || !token) {

      return;

    }

    try {

      const usuarioAtualizado =
        await getUsuario(
          user.id,
          token
        );

      setUser(usuarioAtualizado);

      localStorage.setItem(
        "veridit-user",
        JSON.stringify(usuarioAtualizado)
      );

    } catch (error) {

      console.error(
        "Erro ao atualizar usuário:",
        error
      );

    }

  }

  function logout() {

    setUser(null);
    setToken(null);

    localStorage.removeItem(
      "veridit-user"
    );

    localStorage.removeItem(
      "veridit-token"
    );

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        atualizarUsuario,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(
    AuthContext
  );

}