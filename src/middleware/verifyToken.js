import jwt from "jsonwebtoken"
import { AppError } from "../utils/appError.js"
import { secretKey } from "../../index.js"

 const verifyToken=()=>{
    return(req,res,next)=>{
        const {token} = req.headers
        jwt.verify(token,secretKey,(err,decoded)=>{
            if(err){
                return next(new AppError(err , 401))
            }
            req.user = decoded
            next()
        })
    }
}

const companyHRMiddleware = (req, res, next) => {
    if (req.user.role !== 'Company_HR' ) {
        return  next(new AppError('UnAuthorized' , 403))  
    }
    next();
}





export{
    verifyToken,
    companyHRMiddleware,
}