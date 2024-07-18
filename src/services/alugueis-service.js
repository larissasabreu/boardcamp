import { DeleteRentRepository, EndRentRepository, GetRentByIdRepository, GetRentRepository, PostRentRepository } from "../repositories/aluguel-repository.js";

export async function GetRentService (req, res) {
    const ListRent = await GetRentRepository();
    return ListRent.rows
}

export async function PostRentService (req) {
    const InsertRent = await PostRentRepository(req);
    return InsertRent
}

export async function DeleteRentService (req) {
    const DeleteRent = await DeleteRentRepository(req);
    return DeleteRent
}

export async function GetRentById(req) {
    const GetRent = await GetRentByIdRepository(req);
    return GetRent
}

export async function EndRentalService(req) {
    const UpdateRent = await EndRentRepository(req);
    return UpdateRent
}