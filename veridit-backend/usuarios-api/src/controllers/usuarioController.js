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

  async buscarPorId(req, res) {

    try {

      const { id } = req.params;

      const usuario =
        await usuarioService.buscarPorId(id);

      return res.status(200).json(
        usuario
      );

    } catch (error) {

      return res.status(404).json({
        erro: error.message,
      });

    }

  }

  async atualizarSaldo(req, res) {

    try {

      const { id } = req.params;

      const {
        saldo_creditos
      } = req.body;

      const usuario =
        await usuarioService.atualizarSaldo(
          id,
          saldo_creditos
        );

      return res.status(200).json({
        mensagem:
          "Saldo atualizado",
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