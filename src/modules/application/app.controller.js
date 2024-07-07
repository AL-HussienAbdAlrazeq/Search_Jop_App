import { Application } from "../../../database/models/application.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";



const applyToJop = catchError(async(req,res,next)=>{
  // const userResume = req.file.path; 
  const application = await Application.insertMany(req.body)
  if(!application){
    return next(new AppError("Not Found"),404)
  }
  res.status(201).json({message:"Success"})
})



  

export{
    applyToJop
}