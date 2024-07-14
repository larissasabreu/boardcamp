import { invalid_number, same_GameName } from '../errors/errors.js';
import { GetGameByName, GetGamesService, PostGamesService } from '../services/jogos-service.js';

export async function GetGamesController (req, res) {
        const ListGames = await GetGamesService();
        res.send(ListGames)
}

export async function PostGamesController (req, res) {
        const checkName = await GetGameByName(req.body);
        if (checkName.length > 0) throw same_GameName();

        if (req.body.stockTotal < 0 || req.body.pricePerDay < 0) throw invalid_number();

        const resultado = await PostGamesService(req.body);
        res.status(201).send(resultado)
}

