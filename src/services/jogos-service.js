import { GetGameByIdRepository, GetGameByNameRepository, GetGamesRepository, PostGamesRepository } from '../repositories/jogos-repository.js';

export async function GetGamesService (req, res) {
    const ListGames = await GetGamesRepository();
    return ListGames.rows
}

export async function GetGameByName (req, res) {
    const ListGamesByName = await GetGameByNameRepository(req);
    return ListGamesByName
}

export async function PostGamesService (req, res) {
    const InsertGames = await PostGamesRepository(req);
    return InsertGames;
}

export async function GetGamesByIdService (req) {
    const GetGames = await GetGameByIdRepository(req);
    return GetGames;
}