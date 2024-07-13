import { db } from '../config/db.connection.js' 
import { GetGamesRepository, PostGamesRepository } from '../repositories/jogos-repository.js';

export async function GetGamesService (req, res) {
    const ListGames = await GetGamesRepository();
    return ListGames.rows
}

export async function PostGamesService (req) {
    const InsertGames = await PostGamesRepository(req);
    return InsertGames
}