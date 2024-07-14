import { Router } from "express";

import { GetRentController, PostRentController } from "../controllers/aluguel-controller.js";

import { validateSchema } from "../middlewares/schema-middleware.js";
import { InsertRentSchema } from "../schemas/alugueis-schema.js";

const AlugueisRouter = Router();

AlugueisRouter.get("/rentals", GetRentController);
AlugueisRouter.post("/rentals", validateSchema(InsertRentSchema), PostRentController);

export default AlugueisRouter;