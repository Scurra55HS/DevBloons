import { Router } from "express";
import { getPerguntas } from "../controllers/perguntaController.js";

const router = Router();

router.get("/", getPerguntas);

export default router;
