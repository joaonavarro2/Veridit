import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuarioRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);
app.use(authRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `Usuarios API rodando na porta ${PORT}`
  );
});