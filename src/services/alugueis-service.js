import { GetRentRepository, PostRentRepository } from "../repositories/aluguel-repository.js";

export async function GetRentService (req, res) {
    const ListRent = await GetRentRepository();
    return ListRent.rows
}

export async function PostRentService (req) {
    const InsertRent = await PostRentRepository (req);
    return InsertRent
}