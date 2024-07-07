import Joi  from "joi"


export const applyJopVal = Joi.object({
    jobId:Joi.string().hex().length(24).required(),
    userId:Joi.string().hex().length(24).required(),
    userTechSkills:Joi.array().items(Joi.string()).required(),
    userSoftSkills:Joi.array().items(Joi.string()).required(),
    userResume:Joi.string().required(),
    id:Joi.string().hex().length(24).required(),
})