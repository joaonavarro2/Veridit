import authService from "../services/authService.js";

class AuthController {

  async login(req, res) {

    try {

      const {
        email,
        senha
      } = req.body;

      const resultado =
        await authService.login(
          email,
          senha
        );

      return res.status(200).json({
        mensagem: "Login realizado",
        usuario: resultado.usuario,
        token: resultado.token
      });

    } catch (error) {

      return res.status(401).json({
        erro: error.message
      });

    }

  }

}

export default new AuthController();