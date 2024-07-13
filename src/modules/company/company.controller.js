
import { Company } from "../../../database/models/company.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";




// Add company

const addCompany = catchError(async(req,res,next)=>{

   const company = await Company.insertMany(req.body)
   res.status(201).json({message:"Success" , company})

})


// Update company data


const updateCompanyData = catchError(async(req,res,next)=>{
   const company = await Company.findByIdAndUpdate(req.params.id , req.body , {new:true})
   if(!company){
    return next(new AppError("Not Found" , 404))
   }
   res.status(200).json({message:"Updated" , company})
})



// Delete company data

const deleteCompanyData = catchError(async(req,res,next)=>{
  // const company = await Company.findByIdAndDelete(req.params.id , req.body )
  // if(!company){
  //  return next(new AppError("Not Found" , 404))
  // }
  // res.status(200).json({message:"Deleted" , company})
  
  const company = await Company.findOneAndUpdate({_id:req.params.id , companyHR:req.user.userId} , {isDeleted:true} , {new:true})
  if(!company) return next(new AppError("not allowed to delete this Company",404))
  res.status(200).json({message:"Deleted",company})

})


// Get company data By ID

const getCompanyData = catchError(async(req,res,next)=>{
  const company = await Company.findById(req.params.id).populate('companyHR')
  if(!company){
   return next(new AppError("Not Found" , 404))
  }
  res.status(200).json({message:"Founded" , company})
})


// Search for a company with a name. 

const searchCompanyByName  = catchError(async(req,res,next)=>{

   const { companyName } = req.query;
   const company = await Company.find(companyName).populate('companyHR')

    if(!company){
    return next(new AppError("Not Found" , 404))
    }
    res.status(200).json({message:"Founded" , company})
})



// Get all applications for specific Jobs

const getAllApplications = catchError(async(req,res,next)=>{
  const company = await Company.find().populate('companyHR')
  if(!company){
   return next(new AppError("Not Found" , 404))
  }
  res.status(200).json({message:"Founded" , company})
})



export{
  addCompany,
  updateCompanyData,
  deleteCompanyData,
  getCompanyData,
  searchCompanyByName,
  getAllApplications
}