// jogos
export function same_GameName() {
    return {
        type: "same_Name",
        message: "name não pode ser um nome de jogo já existente"
    }
}

export function invalid_number() {
    return {
        type: "invalid_number",
        message: "stockTotal e pricePerDay devem ser maiores que 0"
    }
}

// customers
export function invalid_Id() {
    return {
        type: "invalid_CustomerId",
        message: "o id do cliente não existe"
    }
}

export function same_CPF() {
    return {
        type: "same_CPF",
        message: "cpf não pode ser de um cliente já existente;"
    }
}

export function invalid_phone() {
    return {
        type: "invalid_phone",
        message: "o número de telefone precisa ter 10 a 11 caracteres numéricos"
    }
}

export function invalid_cpf() {
    return {
        type: "invalid_cpf",
        message: "o cpf deve ter 11 caracteres numéricos"
    }
}

// rentals

export function invalid_GameId() {
    return {
        type: "invalid_GameId",
        message: "o id do game não existe"
    }
}

export function invalid_CustomerId() {
    return {
        type: "invalid_CustomerId",
        message: "o id do cliente não existe"
    }
}

