import usuarioRepository from "../repositories/usuarioRepository.js";

class UsuarioService {

  async create(nome, email, senha) {

    const usuarioExistente =
      await usuarioRepository.findByEmail(email);

    if (usuarioExistente) {
      throw new Error("E-mail já cadastrado");
    }

    return await usuarioRepository.create({
      nome,
      email,
      senha_hash: senha,
    });

  }

  async buscarPorId(id) {

    const usuario =
      await usuarioRepository.findById(id);

    if (!usuario) {
      throw new Error(
        "Usuário não encontrado"
      );
    }

    return usuario;

  }

  async atualizarSaldo(
    id,
    saldo_creditos
  ) {

    return await usuarioRepository.atualizarSaldo(
      id,
      saldo_creditos
    );

  }

}

export default new UsuarioService();