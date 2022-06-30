import setor from 'express';
import SetoresController from '../controllers/setoresController';
const setoresRouter = setor.Router();
const setoresController = new SetoresController();

setoresRouter.get("/setores", setoresController.index);

setoresRouter.get("/setores/:id", setoresController.get);

setoresRouter.post("/setores", setoresController.create);

setoresRouter.delete("/setores/:id", setoresController.delete);

export const SetoresRouter = setoresRouter;