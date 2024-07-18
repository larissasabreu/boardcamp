import Joi from "joi";

    // customerId: 1,
    // gameId: 1,
    // daysRented: 3

export const InsertRentSchema = Joi.object({
    customerId: Joi.number().required(),
    gameId: Joi.number().required(),
    daysRented: Joi.number().required()
    
   });

