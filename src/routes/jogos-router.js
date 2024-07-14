import { Router } from "express";

import { GetGamesController, PostGamesController } from "../controllers/jogos-controller.js";
import { validateSchema } from "../middlewares/schema-middleware.js";
import { InsertGameSchema } from "../schemas/jogos-schema.js";

const JogosRouter = Router();

JogosRouter.get("/games", GetGamesController);
JogosRouter.post("/games", validateSchema(InsertGameSchema), PostGamesController);

export default JogosRouter;