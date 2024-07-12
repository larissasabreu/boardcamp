import { db } from '../config/db.connection.js' 

export async function GetGames (req, res) {
    try {
        const ListGames = await db.query("SELECT * FROM games");
        res.send(ListGames.rows);
      } catch (err) {
        res.status(404).send(err.message);
      }
}

export async function PostGames (req, res) {
    const {name, image, stockTotal, pricePerDay} = req.body

    try {
        const InsertGames = 
        await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)`, [name, image, stockTotal, pricePerDay]);
        res.send(InsertGames.rows)
    } catch (err) {
        res.status(402).send(err.message);
    }
}