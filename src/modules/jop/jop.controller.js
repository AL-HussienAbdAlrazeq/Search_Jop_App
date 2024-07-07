

import { Company } from "../../../database/models/company.js";
import { Jop } from "../../../database/models/jop.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";




// Add Jop

const addJop = catchError(async(req,res,next)=>{

   const jop = await Jop.insertMany(req.body)
   res.status(201).json({message:"Success" , jop})

})


// Update Jop 


const updateJop = catchError(async(req,res,next)=>{
   const jop = await Jop.findByIdAndUpdate(req.params.id , req.body , {new:true})
   if(!jop){
    return next(new AppError("Not Found" , 404))
   }
   res.status(200).json({message:"Updated" , jop})
})



// Delete Jop 

const deleteJop = catchError(async(req,res,next)=>{
  const jop = await Jop.findByIdAndDelete(req.params.id , req.body )
  if(!jop){
   return next(new AppError("Not Found" , 404))
  }
  res.status(200).json({message:"Deleted" , jop})
})


// Get Jop 

const getAllJops = catchError(async(req,res,next)=>{
  const jop = await Jop.find().populate('addedBy')
  if(!jop){
   return next(new AppError("Not Found" , 404))
  }
  res.status(200).json({message:"Founded" , jop})
})



// Get Jop  By ID

const getCopmanyJops  = catchError(async(req,res,next)=>{
  const { companyName } = req.query;
  const company = await Company.findOne({ companyName });

  if(!company){
   return next(new AppError("Not Found" , 404))
  }
  const jops = await Jop.find({company: company._id }).populate('company');
  if(!jops){
    return next(new AppError("Not Found" , 404))
   }
  res.status(200).json({message:"Founded" , jops})
})




// Get all applications for specific Jobs

const getJopFilter = catchError(async(req,res,next)=>{
  const { workingTime, jobLocation, seniorityLevel, jobTitle, technicalSkills } = req.query;
  const filters = {};

  if (workingTime) filters.workingTime = workingTime;
  if (jobLocation) filters.jobLocation = jobLocation;
  if (seniorityLevel) filters.seniorityLevel = seniorityLevel;
  if (jobTitle) filters.jobTitle = jobTitle;
  if (technicalSkills) filters.technicalSkills = { $in: technicalSkills };

  const jops = await Jop.find(filters).populate('company').populate('addedBy');
  if(!jops){
    return next(new AppError("Not Found" , 404))
   }
   res.status(200).json({message:"Founded" , jops})
})



// Apply to Job  in a document application




export{
  addJop,
  updateJop,
  deleteJop,
  getAllJops,
  getCopmanyJops,
  getJopFilter
}