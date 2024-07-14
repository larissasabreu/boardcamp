import { GetCustomersByCPFRepository, GetCustomersByIdRepository, GetCustomersRepository, PostCustomersRepository} from "../repositories/clientes-repository.js";

export async function GetCustomersService (req, res) {
    const ListCustomers = await GetCustomersRepository();
    return ListCustomers.rows
}

export async function GetCustomersByCPFService (req, res) {
    const ListCustomers = await GetCustomersByCPFRepository (req);
    return ListCustomers
}

export async function GetCustomersByIdService (req, res) {
    const ListCustomers = await GetCustomersByIdRepository (req);
    return ListCustomers
}


export async function PostCustomersService (req) {
    const InsertCustomers = await PostCustomersRepository (req);
    return InsertCustomers
}