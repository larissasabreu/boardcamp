import { GetCustomersService, PostCustomersService } from "../services/clientes-service.js";

export async function GetCustomersController (req, res) {
        const ListGames = await GetCustomersService();
        res.send(ListGames)

}

export async function PostCustomersController (req, res) {
        const resultado = await PostCustomersService(req.body) 
        res.status(201).send(resultado)
}

