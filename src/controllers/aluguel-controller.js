import { invalid_RentId, invalid_CustomerId, invalid_GameId, invalid_rental, invalid_rentalEnd } from "../errors/errors.js";
import { DeleteRentService, EndRentalService, GetRentById, GetRentService, PostRentService } from "../services/alugueis-service.js";
import { GetCustomersByIdService } from "../services/clientes-service.js";
import { GetGamesByIdService } from "../services/jogos-service.js";

export async function GetRentController (req, res) {

        const resultado = await GetRentService();
        res.status(200).send(resultado)
}

export async function PostRentController (req, res) {
        const CheckCustomerId = await GetCustomersByIdService(req.body);
        const CheckGameId = await GetGamesByIdService(req.body);

        if (CheckCustomerId.length == 0) throw invalid_CustomerId();
        if (CheckGameId.length == 0) throw invalid_GameId();

        const resultado = await PostRentService(req.body)

        res.status(201).send(resultado)
}

export async function EndRentController (req, res) {
        const id = req.params.id;

        const GetRent = await GetRentById(id)
        
        if (GetRent.length == 0) throw invalid_RentId();
        // if (GetRent.returnDate !== null) throw invalid_rentalEnd();

        const EndRent = await EndRentalService(id);
        res.status(200).send(EndRent);
}

export async function DeleteRentController (req, res) {
        const id = req.params.id;

        const GetRent = await GetRentById(id);
        if (GetRent.length == 0) throw invalid_RentId();
        // if (GetRent.returnDate == null) throw invalid_rental();

        const DeleteRental = await DeleteRentService(id);

        res.status(200).send(DeleteRental);
}
