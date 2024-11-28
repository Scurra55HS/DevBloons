import express from "express";
import cors from "cors";
import conn from "./models/conn.js";

// Routers
import usuarioRouter from "./routes/usuarioRouter.js";
import topicoRouter from "./routes/topicoRouter.js";
import perguntaRouter from "./routes/perguntaRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/usuarios", usuarioRouter);
app.use("/api/topicos", topicoRouter);
app.use("/api/perguntas", perguntaRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

export default app;
