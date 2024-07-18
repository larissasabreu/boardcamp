import { Router } from "express";

import { DeleteRentController, EndRentController, GetRentController, PostRentController } from "../controllers/aluguel-controller.js";

import { validateSchema } from "../middlewares/schema-middleware.js";
import { InsertRentSchema } from "../schemas/alugueis-schema.js";

const AlugueisRouter = Router();

AlugueisRouter.get("/rentals", GetRentController);
AlugueisRouter.post("/rentals", validateSchema(InsertRentSchema), PostRentController);
AlugueisRouter.delete("/rentals/:id", DeleteRentController);
AlugueisRouter.post("/rentals/:id/return", EndRentController);

export default AlugueisRouter;