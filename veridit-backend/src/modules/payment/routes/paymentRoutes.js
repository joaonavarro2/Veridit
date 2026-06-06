import { Router }
from "express";

import pacoteController
from "../controllers/pacoteController.js";

import compraController
from "../controllers/compraController.js";

const router = Router();

router.get(
  "/pacotes",
  (req, res) =>
    pacoteController.listar(req, res)
);

router.post(
  "/compras",
  (req, res) =>
    compraController.criar(req, res)
);

export default router;