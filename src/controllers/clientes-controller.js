import { invalid_Id, same_CPF } from "../errors/errors.js";
import { GetCustomersByCPFService, GetCustomersByIdService, GetCustomersService, PostCustomersService } from "../services/clientes-service.js";

export async function GetCustomersController (req, res) {
        const ListCustomers = await GetCustomersService();
        res.send(ListCustomers)
}

export async function PostCustomersController (req, res) {
        const checkCPF = await GetCustomersByCPFService(req.body);
        
        if (checkCPF.length > 0) throw same_CPF();
        
        const resultado = await PostCustomersService(req.body);
        res.status(201).send(resultado)
}

export async function GetCustomersByIdController (req, res) {
        const id = req.params.id
        
        const ListCustomerById = await GetCustomersByIdService(id);
        if (ListCustomerById.length == 0) throw invalid_Id();

        res.status(200).send(ListCustomerById);
}