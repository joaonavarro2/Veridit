import usuarioService from "../services/usuarioService.js";

class UsuarioController {

  async create(req, res) {

    try {

      const {
        nome,
        email,
        senha,
      } = req.body;

      const usuario =
        await usuarioService.create(
          nome,
          email,
          senha
        );

      return res.status(201).json({
        mensagem:
          "Usuário criado com sucesso!",
        usuario,
      });

    } catch (error) {

      return res.status(400).json({
        erro: error.message,
      });

    }

  }

}

export default new UsuarioController();