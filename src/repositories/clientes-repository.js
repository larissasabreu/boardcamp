import { db } from '../config/db.connection.js' 

export async function GetCustomersRepository () {
    const ListCustomers = await db.query("SELECT * FROM customers");
    return ListCustomers
}

export async function PostCustomersRepository ({name, phone, cpf}) {
    const InsertCustomers = await db.query(`INSERT INTO customers (name, phone, cpf) VALUES ($1, $2, $3)`, [name, phone, cpf]);
    return InsertCustomers
}

export async function GetCustomersByCPFRepository({cpf}) {
    const ListCustomers = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [cpf])
    return ListCustomers.rows;
}

export async function GetCustomersByIdRepository({customerId}) {
    const ListCustomers = await db.query(`SELECT * FROM customers WHERE id = $1`, [customerId])
    return ListCustomers.rows;
}