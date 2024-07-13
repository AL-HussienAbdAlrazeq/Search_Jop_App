import { Application } from "../../../database/models/application.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";



const applyToJop = catchError(async(req,res,next)=>{
   req.body.userResume = req.file.filename; 
  const application = await Application.insertMany(req.body)
  if(!application){
    return next(new AppError("Not Found"),404)
  }

  // const { jobId, userId, userTechSkills, userSoftSkills } = req.body;
  //   if (!req.file) {
  //     return res.status(400).send({ message: 'Resume is required and must be a PDF' });
  //   }

  //   const newApplication = new Application({
  //     jobId,
  //     userId,
  //     userTechSkills: JSON.parse(userTechSkills),
  //     userSoftSkills: JSON.parse(userSoftSkills),
  //     userResume: req.file.filename,
  //   });

    // await newApplication.save();
  res.status(201).json({message:"Success"})
})



  

export{
    applyToJop
}