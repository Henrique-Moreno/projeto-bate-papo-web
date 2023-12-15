import express from "express";
import "express-async-errors";
// import session from "express-session";
import cors from "cors";
import { router } from "./routes.js";

const app = express();
const PORT = 3333;

app.use(express.json());

// Configuração do CORS para permitir acesso de qualquer lugar
app.use(cors());

app.use(router);

app.use((err, res) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: "erro",
    message: "erro no servidor"
  });
});

app.listen(PORT, () => {
  console.log("Servidor online!!");
});