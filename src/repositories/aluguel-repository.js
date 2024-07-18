import { db } from '../config/db.connection.js' 
import dayjs from 'dayjs';

const dia = dayjs().format("YYYY-MM-DD");
const diaHoje = `'${dia}'`
// {
//     id: 1,
//     customerId: 1,
//     gameId: 1,
//     rentDate: '2021-06-20',    // data em que o aluguel foi feito
//     daysRented: 3,             // por quantos dias o cliente agendou o aluguel
//     returnDate: null,          // data que o cliente devolveu o jogo (null enquanto não devolvido)
//     originalPrice: 4500,       // preço total do aluguel em centavos (dias alugados vezes o preço por dia do jogo)
//     delayFee: null             // multa total paga por atraso (dias que passaram do prazo vezes o preço por dia do jogo)
//   }

export async function GetRentRepository () {
    const ListRentals = await db.query("SELECT rentals.*, games.* AS game, customers.* AS customer FROM rentals JOIN games ON games.id = rentals.id JOIN customers ON customers.id = rentals.id");
    return ListRentals
}

// ?????????????  ????????
export async function PostRentRepository ({customerId, gameId, daysRented}) {
    // const GetOGPrice = await db.query('SELECT "pricePerDay" FROM games WHERE id = $1', [gameId])
    // const originalPrice = (GetOGPrice.rows) * daysRented;

    const InsertRental = await db.query('INSERT INTO rentals ("customerId","gameId","rentDate","daysRented","returnDate","originalPrice","delayFee") VALUES ($1, $2, $3, $4, $5, $6, $7)', [customerId, gameId, diaHoje, daysRented, null, 2, null]);
    return InsertRental
}

// ??????????????????????????
export async function EndRentRepository (id) {
    // const GetGameId = await db.query(`SELECT "gameId" FROM rentals WHERE id = $1`, [id])
    // const GetPricePerDay = await db.query(`SELECT "pricePerDay" FROM games WHERE id = $1`, [GetGameId.rows])
    // const GetRentDay = await db.query(`SELECT "rentDate" FROM rentals WHERE id = $1`, [id])
    // const RentDate = dayjs(GetRentDay.rows)
    // const daysDiff = (dia.diff(RentDate, 'day'))
    // const delayFee = daysDiff * (GetPricePerDay.rows)
    
    const EndRental = await db.query(`UPDATE rentals SET "returnDate" = $1, "delayFee" = $2 WHERE id = $3`, [diaHoje, 10, id])

    return EndRental
}

export async function DeleteRentRepository (id) {
    const DeleteRental = await db.query("DELETE FROM rentals WHERE id = $1", [id])
    return DeleteRental.rows
}

export async function GetRentByIdRepository(id) {
    const GetById = await db.query("SELECT * FROM rentals WHERE id = $1", [id])
    return GetById.rows
}