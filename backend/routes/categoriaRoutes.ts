import { Router } from "express";
import { listarCategorias, criarCategoria, deletarCategoria, atualizarCategoria } from "../controllers/categoriaController";

const routerCategoria= Router();

routerCategoria.get('/categorias', listarCategorias);
routerCategoria.post('/categorias', criarCategoria);
routerCategoria.delete("/categorias/:id",deletarCategoria)
routerCategoria.put("/categorias/:id",atualizarCategoria)

export default routerCategoria;