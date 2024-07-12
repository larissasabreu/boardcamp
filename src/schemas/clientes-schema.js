import Joi from 'joi'

//     id: 1,
//     name: 'João Alfredo',
//     phone: '21998899222',
//     cpf: '01234567890'

export const InsertClientSchema = Joi.object({
     name: Joi.string().required(),
     phone: Joi.number().min(10).max(11).required(),
     cpf: Joi.string().min(11).required()
    });