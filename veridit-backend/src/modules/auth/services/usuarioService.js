import usuarioRepository from "../repositories/usuarioRepository.js";

class UsuarioService {

  async create(nome, email, senha) {

    const usuarioExistente =
      await usuarioRepository.findByEmail(email);

    if (usuarioExistente) {

      throw new Error(
        "E-mail já cadastrado"
      );

    }

    return await usuarioRepository.create({
      nome,
      email,
      senha_hash: senha,
    });

  }

}

export default new UsuarioService();