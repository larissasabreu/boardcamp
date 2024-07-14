import { db } from '../config/db.connection.js' 

export async function GetCustomersRepository () {
    const ListCustomers = await db.query("SELECT * FROM customers");
    return ListCustomers
}

export async function PostCustomersRepository ({name, phone, cpf}) {
    const InsertCustomers = await db.query(`INSERT INTO customers (name, phone, cpf) VALUES ($1, $2, $3)`, [name, phone, cpf]);
    return InsertCustomers
}