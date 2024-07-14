import { Router } from "express";

import { GetCustomersByIdController, GetCustomersController, PostCustomersController} from "../controllers/clientes-controller.js";
import { validateSchema } from "../middlewares/schema-middleware.js";
import { InsertCustomerSchema } from "../schemas/clientes-schema.js";

const ClientesRouter = Router();

ClientesRouter.get("/customers", GetCustomersController);
ClientesRouter.get("/customers/:id", GetCustomersByIdController);
ClientesRouter.post("/customers", validateSchema(InsertCustomerSchema), PostCustomersController);

export default ClientesRouter;