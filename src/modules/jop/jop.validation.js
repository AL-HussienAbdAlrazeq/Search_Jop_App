import Joi from "joi"


const addJopVal = Joi.object({
    jobTitle:Joi.string().required(),
    jobLocation:Joi.string().valid('onsite', 'remote', 'hybrid').required(),
    workingTime:Joi.string().valid('part-time', 'full-time').required(),
    seniorityLevel:Joi.string().valid('Junior', 'Mid-Level', 'Senior', 'Team-Lead', 'CTO').required(),
    jobDescription:Joi.string().required(),
    technicalSkills:Joi.array().items(Joi.string()).required(),
    softSkills:Joi.array().items(Joi.string()).required(),
    addedBy:Joi.string().hex().length(24).required(),
    company:Joi.string().hex().length(24).required()
})

const updateJopVal = Joi.object({
    jobTitle:Joi.string(),
    jobLocation:Joi.string(),
    workingTime:Joi.string(),
    seniorityLevel:Joi.string(),
    jobDescription:Joi.string(),
    technicalSkills:Joi.array(),
    softSkills:Joi.array(),
    id:Joi.string().hex().length(24).required()
})


export{
    addJopVal,
    updateJopVal
}