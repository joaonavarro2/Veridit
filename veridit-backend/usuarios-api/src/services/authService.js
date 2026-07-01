import authRepository from "../repositories/authRepository.js";
import jwt from "jsonwebtoken";

class AuthService {

  async login(email, senha) {

    const usuario =
      await authRepository.findByEmail(email);

    if (!usuario) {

      console.error(
        `[LOGIN] Tentativa com email inexistente: ${email}`
      );

      throw new Error(
        "Email ou senha inválidos"
      );

    }

    if (usuario.senha_hash !== senha) {

      console.error(
        `[LOGIN] Senha incorreta para: ${email}`
      );

      throw new Error(
        "Email ou senha inválidos"
      );

    }

    const token =
      jwt.sign(
        {
          id: usuario.id,
          email: usuario.email
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d"
        }
      );

    console.log(
      `[LOGIN] Usuário autenticado: ${usuario.email}`
    );

    return {
      usuario,
      token
    };

  }

}

export default new AuthService();