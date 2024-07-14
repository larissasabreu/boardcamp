import { GetCustomersRepository, PostCustomersRepository} from "../repositories/clientes-repository.js";

export async function GetCustomersService (req, res) {
    const ListCustomers = await GetCustomersRepository();
    return ListCustomers.rows
}

export async function PostCustomersService (req) {
    const InsertCustomers = await PostCustomersRepository (req);
    return InsertCustomers
}