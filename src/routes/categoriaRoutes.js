import { Router } from "express";
import { addCategoria,findAllCategoria,getCategoriaById,update,delCategoria } from "../controllers/categoriaController.js";

const router = Router();

router.post('/categoria', addCategoria);
router.get('/categoria',findAllCategoria );

router.get('/categoria/:id', getCategoriaById);
router.put('/categoria/:id', update);
router.delete('/categoria/:id', delCategoria);

export default router;