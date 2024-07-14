import { GetRentService, PostRentService } from "../services/alugueis-service.js";

export async function GetRentController (req, res) {
        const ListRent = await GetRentService();
        res.send(ListRent)
}

export async function PostRentController (req, res) {
        const resultado = await PostRentService(req.body) 
        res.status(201).send(resultado)
}
