import { Router }
from "express";

import compraController
from "../controllers/compraController.js";

const router = Router();

router.post(
  "/compras",
  (req, res) =>
    compraController.criar(
      req,
      res
    )
);

export default router;