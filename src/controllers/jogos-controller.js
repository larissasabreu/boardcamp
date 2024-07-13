import { db } from '../config/db.connection.js' 
import { GetGamesService, PostGamesService } from '../services/jogos-service.js';

export async function GetGames (req, res) {
    try {
        const ListGames = await GetGamesService();
        res.send(ListGames)
      } catch (err) {
        res.status(404).send(err)
    }
}

export async function PostGames (req, res) {

    try {
        const resultado = await PostGamesService(req.body) 

        res.status(201).send(resultado)
    } catch (err) {
        res.status(402).send(err.message);
    }
}

