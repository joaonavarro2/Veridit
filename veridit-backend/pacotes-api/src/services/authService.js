import authRepository from "../repositories/authRepository.js";

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

    return usuario;

  }

}

export default new AuthService();