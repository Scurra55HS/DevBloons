import { Router } from "express";
import { getAllTopicos, getTopico } from "../controllers/topicoController.js";

const router = Router();

router.get("/", getAllTopicos);
router.get("/:id", getTopico);

export default router;
