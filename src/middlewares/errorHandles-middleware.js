export default function errorHandler(error, req, res, next) {
    if (error.type === "same_GameName") {
        return res.status(409).send(error.message);
    }

    if (error.type === "invalid_number") {
        return res.status(400).send(error.message);
    }

}  