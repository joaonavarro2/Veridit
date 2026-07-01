import { Router } from "express";

import usuarioController
from "../controllers/usuarioController.js";

import authMiddleware
from "../middlewares/authMiddleware.js";

const router = Router();

/* ===========================
   Cadastro (Público)
=========================== */

router.post(
  "/usuarios",
  (req, res) =>
    usuarioController.create(req, res)
);

/* ===========================
   Rotas protegidas (Frontend)
=========================== */

router.get(
  "/usuarios/:id",
  authMiddleware,
  (req, res) =>
    usuarioController.buscarPorId(req, res)
);

router.put(
  "/usuarios/:id/saldo",
  authMiddleware,
  (req, res) =>
    usuarioController.atualizarSaldo(req, res)
);

/* ===========================
   Rotas internas (Microsserviços)
=========================== */

router.get(
  "/internal/usuarios/:id",
  (req, res) =>
    usuarioController.buscarPorId(req, res)
);

router.put(
  "/internal/usuarios/:id/saldo",
  (req, res) =>
    usuarioController.atualizarSaldo(req, res)
);

export default router;