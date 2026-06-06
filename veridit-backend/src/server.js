import express from "express";
import cors from "cors";

import usuarioRoutes from "./modules/auth/routes/usuarioRoutes.js";
import authRoutes from "./modules/auth/routes/authRoutes.js";
import paymentRoutes from "./modules/payment/routes/paymentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);
app.use(authRoutes);
app.use(paymentRoutes);

const PORT = 3000;

app.listen(PORT, () => {

  console.log(
    `Servidor rodando na porta ${PORT}`
  );

});