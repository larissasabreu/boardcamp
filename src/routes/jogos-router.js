import { Router } from "express";

import { GetGames, PostGames } from "../controllers/jogos-controller.js";
import { validateSchema } from "../middlewares/schema-middleware.js";
import { InsertGameSchema } from "../schemas/jogos-schema.js";

const JogosRouter = Router();

JogosRouter.get("/games", GetGames);
JogosRouter.post("/games", validateSchema(InsertGameSchema), PostGames);

export default JogosRouter;