import express from "express";
import cors from "cors";

import pacoteRoutes
from "./routes/pacoteRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(pacoteRoutes);

const PORT = 3002;

app.listen(PORT, () => {

  console.log(
    `Pacotes API rodando na porta ${PORT}`
  );

});