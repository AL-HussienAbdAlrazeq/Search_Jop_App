import bcrypt from "bcrypt"
import { User } from "../../database/models/user.model.js"
import { AppError } from "../utils/appError.js"

//middleware to  Check Email is Exists or Not 
 
export const checkEmail=async(req,res,next)=>{
    const isFound = await User.findOne({email:req.body.email})
    if(isFound){
        return next(new AppError("Email Already Exist",409))
    }
    req.body.password = bcrypt.hashSync(req.body.password , 8)
    next()
}