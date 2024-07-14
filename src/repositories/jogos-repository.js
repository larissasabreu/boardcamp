import { db } from '../config/db.connection.js' 

export async function GetGamesRepository () {
    const ListGames = await db.query("SELECT * FROM games");
    return ListGames
}

export async function PostGamesRepository ({name, image, stockTotal, pricePerDay}) {
    
        const InsertGames = await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)`, [name, image, stockTotal, pricePerDay]);

        return InsertGames
}

export async function GetGameByNameRepository({name}) {
    const ListGames = await db.query(`SELECT * FROM games WHERE name = $1`, [name])
    return ListGames.rows;
}