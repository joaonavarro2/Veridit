import { Router } from "express";

import pacoteController
from "../controllers/pacoteController.js";

const router = Router();

router.get(
  "/pacotes",
  (req, res) =>
    pacoteController.listar(req, res)
);

router.get(
  "/pacotes/:id",
  (req, res) =>
    pacoteController.buscarPorId(req, res)
);

export default router;