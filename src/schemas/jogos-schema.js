import Joi from "joi";

// name: 'Banco Imobiliário',
// image: 'http://www.imagem.com.br/banco_imobiliario.jpg',
// stockTotal: 3,
// pricePerDay: 1500

export const InsertGameSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    stockTotal: Joi.number().required(),
    pricePerDay: Joi.number().required()
    });