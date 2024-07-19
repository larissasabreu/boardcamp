export default function errorHandler(error, req, res, next) {
    if (error.type === "same_GameName") {
        return res.status(409).send(error.message);
    }

    if (error.type === "invalid_number") {
        return res.status(400).send(error.message);
    }

    if (error.type === "same_CPF") {
        return res.status(409).send(error.message);
    }

    if (error.type === "invalid_cpf" || error.type === "invalid_phone") {
        return res.status(400).send(error.message);
    }

    if (error.type === "invalid_CustomerId") {
        return res.status(404).send(error.message);
    }

    if (error.type === "invalid_RentId") {
        return res.status(404).send(error.message);
    }

    if (error.type === "invalid_Rental") {
        return res.status(400).send(error.message);
    }

    if (error.type === "invalid_rentalEnd") {
        return res.status(422).send(error.message);
    }

}  