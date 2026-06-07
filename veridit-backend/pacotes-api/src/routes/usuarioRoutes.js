import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.post(
  "/usuarios",
  (req, res) =>
    usuarioController.create(req, res)
);

export default router;