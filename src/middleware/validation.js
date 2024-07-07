
import { AppError } from "../utils/appError.js"

// Method to validate data from schema 

export const validate = (schema)=>{
    return (req,res,next)=>{
        const {error} = schema.validate({...req.body,...req.params,...req.query},{abortEarly:false})
        if(!error){
            next()
        }else{
            let errMsg = error.details.map(err=>err.message)
            return next(new AppError(errMsg , 401))
        }
    }
 }