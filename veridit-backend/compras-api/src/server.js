import express from "express";
import cors from "cors";

import compraRoutes
from "./routes/compraRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(compraRoutes);

const PORT = 3003;

app.listen(PORT, () => {

  console.log(
    `Compras API rodando na porta ${PORT}`
  );

});