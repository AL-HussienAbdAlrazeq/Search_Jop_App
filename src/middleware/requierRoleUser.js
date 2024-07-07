import { AppError } from "../utils/appError.js";



export const userMiddleware = (req, res, next) => {
    if (req.user.role !== 'User' ) {
        return  next(new AppError('UnAuthorized' , 403))  
    }
    next();
}