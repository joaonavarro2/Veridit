import { Router } from "express";

import usuarioController
from "../controllers/usuarioController.js";

const router = Router();

router.post(
  "/usuarios",
  (req, res) =>
    usuarioController.create(req, res)
);

router.get(
  "/usuarios/:id",
  (req, res) =>
    usuarioController.buscarPorId(req, res)
);

router.put(
  "/usuarios/:id/saldo",
  (req, res) =>
    usuarioController.atualizarSaldo(req, res)
);

export default router;