import Joi from "joi";


 const signupVal = Joi.object({
    firstName : Joi.string().min(3).max(100).required(),
    lastName  : Joi.string().min(3).max(100).required(),
    username  : Joi.string().min(3).max(100).required(),
    email     : Joi.string().min(3).max(100).required(),
    password  : Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).message('InValid Password').required(),
    recoveryEmail:Joi.string().min(3).max(100).required(),
    mobileNumber: Joi.string().min(3).max(100).required(),
    DOB      : Joi.date(),
    role :Joi.string().min(3).max(100).required(),
    status   : Joi.string()
})



const signinVal = Joi.object({
    email: Joi.string().min(3).max(100).required(),
    password  : Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).message('InValid Password').required(),
})



const updateUserVal = Joi.object({
    firstName : Joi.string().min(3).max(100).required(),
    lastName  : Joi.string().min(3).max(100).required(),
    email     : Joi.string().min(3).max(100).required(),
    recoveryEmail:Joi.string().min(3).max(100).required(),
    mobileNumber: Joi.string().min(3).max(100).required(),
    DOB      : Joi.date(),
    id    :Joi.string().hex().length(24).required()
})



const updatePasswordVal = Joi.object({
    password  : Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).message('InValid Password').required(),
    id    :     Joi.string().hex().length(24).required()
})



export{
    signupVal,
    signinVal,
    updateUserVal,
    updatePasswordVal
}
 
