import Pessoas from 'express';
import PessoasController from '../controllers/pessoasController';
const pessoasRouter = Pessoas.Router();
const pessoasController = new PessoasController();

pessoasRouter.get("/pessoas", pessoasController.index);

pessoasRouter.get("/pessoas/:id", pessoasController.get);

pessoasRouter.post("/pessoas", pessoasController.create);

pessoasRouter.delete("/pessoas/:id", pessoasController.delete);

export const PessoasRouter = pessoasRouter;