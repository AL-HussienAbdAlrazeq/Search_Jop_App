import Joi from "joi"


const addCompanyVal = Joi.object({
    companyName:Joi.string().min(3).max(500).required(),
    description:Joi.string().min(3).max(2000).required(),
    industry:Joi.string().min(3).max(100).required(),
    address:Joi.string().min(3).max(100).required(),
    numberOfEmployees:Joi.number().min(11).max(20).required(),
    companyEmail:Joi.string().min(3).max(100).required(),
    companyHR:Joi.string().hex().length(24).required()
})

const updateCompanyVal = Joi.object({
    companyName:Joi.string().min(3).max(500),
    description:Joi.string().min(3).max(2000),
    industry:Joi.string().min(3).max(100),
    address:Joi.string().min(3).max(100),
    numberOfEmployees:Joi.number().min(11).max(20),
    companyEmail:Joi.string().min(3).max(100),
    id : Joi.string().hex().length(24).required()
})


export{
    addCompanyVal,
    updateCompanyVal
}