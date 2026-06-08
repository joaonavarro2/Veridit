import authRepository from "../repositories/authRepository.js";
import jwt from "jsonwebtoken";

class AuthService {

  async login(email, senha) {

    const usuario =
      await authRepository.findByEmail(email);

    if (!usuario) {

      throw new Error(
        "Email ou senha inválidos"
      );

    }

    if (usuario.senha_hash !== senha) {

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

    return {
      usuario,
      token
    };

  }

}

export default new AuthService();