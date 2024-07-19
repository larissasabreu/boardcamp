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
    const resultado = await db.query("SELECT rentals.*, games.name AS game, games.id as gameId, customers.id AS customerId, customers.name as customersName FROM rentals JOIN games ON games.id = rentals.id JOIN customers ON customers.id = rentals.id ORDER BY rentals.id");
    
    const formatar = []
    let rentalsFormatados

    for (let i = 0; i < resultado.rows.length; i++) {
    const rental = resultado.rows[i]
    const ProxRental = resultado.rows[i + 1]

    if (rentalsFormatados && rentalsFormatados.id == rental.id) {
    rentalsFormatados.customer.push(rental.customerId, rental.customersname)
    rentalsFormatados.Formatados.game.push(rental.gameId, rental.game)
    } else {
        rentalsFormatados = {...rental, customer : [{id: rental.customerId, name: rental.customersname}], 
        game : [{id: rental.gameId, name: rental.game}]}
        delete rentalsFormatados.customerid
        delete rentalsFormatados.customersname
        delete rentalsFormatados.gameid

    }
    if (!ProxRental || ProxRental.id !== rental.id) {
    formatar.push(rentalsFormatados)
    }

    }
    return formatar

}

export async function PostRentRepository ({customerId, gameId, daysRented}) {
    const GetPricePerDay = await db.query('SELECT "pricePerDay" FROM games WHERE id = $1', [gameId])
    const PricePerDay = GetPricePerDay.rows[0].pricePerDay
    const originalPrice = (PricePerDay) * daysRented

    console.log(PricePerDay)
    console.log(originalPrice)

    const delayFee = null
    const returnDate = null

    const InsertRental = await db.query(`INSERT INTO rentals ("customerId","gameId","rentDate","daysRented","returnDate","originalPrice","delayFee") VALUES ($1, $2, $3, $4, $5, $6, $7)`, [customerId, gameId, diaHoje, daysRented, returnDate, originalPrice, delayFee]);
    return InsertRental
}

// ??????????????????????????
export async function EndRentRepository (id) {
    const GetGameId = await db.query(`SELECT "gameId" FROM rentals WHERE id = $1`, [id])
    const GetPricePerDay = await db.query(`SELECT "pricePerDay" FROM games WHERE id = $1`, [GetGameId.rows[0].gameId])
    const pricePerDay = GetPricePerDay.rows[0].pricePerDay
    const GetRentDay = await db.query(`SELECT "rentDate" FROM rentals WHERE id = $1`, [id])
    
    const rentDay = GetRentDay.rows[0].rentDate

    const dayss = dayjs()
    let hours = dayss.diff(Date.parse(rentDay), 'hours');
    const days = Math.floor(hours / 24);
    hours = hours - (days * 24);
    
    // console.log('Days: ', days);
    // console.log('Hours: ', hours);
    // // console.log(pricePerDay)
    // console.log(GetPricePerDay.rows[0].pricePerDay)
    // console.log(dia)
    // console.log(rentDay)

    const delayFee = pricePerDay * days

    const EndRental = await db.query(`UPDATE rentals SET "returnDate" = $1, "delayFee" = $2 WHERE id = $3`, [diaHoje, delayFee, id])

    return EndRental
}

export async function DeleteRentRepository (id) {
    const DeleteRental = await db.query("DELETE FROM rentals WHERE id = $1", [id])
    return DeleteRental.rows
}

export async function GetRentByIdRepository(id) {
    const GetById = await db.query("SELECT * FROM rentals WHERE id = $1", [id])
    return GetById.rows[0]
}