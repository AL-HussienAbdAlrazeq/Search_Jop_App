import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"
import { sendOTP } from "../../email/email.js"
import { secretKey } from "../../../index.js"
import { User } from "../../../database/models/user.model.js"


// Signup user API

const signup = catchError(async(req,res)=>{
    const user = await User.insertMany(req.body)
    sendOTP(req.body.email)
    user[0].password = undefined
    res.status(201).json({message:"Success" , user})
})


// Signin user API

const signin =catchError(async(req,res,next)=>{
  const user = await User.findOne({email:req.body.email })
  if(!user || !bcrypt.compareSync(req.body.password , user.password)){
    return next(new AppError("Incorrect Email OR Password" , 401))
  }
  jwt.sign({userId:user.id , name:user.username , role:user.role }, secretKey , async(err,token)=>{
    await User.findOneAndUpdate({status:'online'})
    res.status(201).json({message:"Login" , token})
  })

})




// Update User API

const updateAccount = catchError(async(req,res,next)=>{
  

      const { email, mobileNumber } = req.body;
      const { userId } = req.user;

    const existingUser = await User.findOne({
      $or: [{ email }, { mobileNumber }],
      _id: { $ne: userId }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email or mobile number already in use' });
    }

    const user = await User.findByIdAndUpdate(req.params.id , req.body , {new:true})
    user.password=undefined
    res.status(200).json({message:"Updated",user})

})




// Delete User API

const deleteUser=catchError(async(req,res,next)=>{


  // Hard Delete
  //  const user = await User.findByIdAndDelete(req.params.id)
  //  if(!user){
  //    return next(new AppError(" User Not Found " , 404 ))
  //  }
  //  res.status(200).json({message:"Deleted" , user})

  // softDelete
  const user = await User.findOneAndUpdate({_id:req.params.id} , {isDeleted:true} , {new:true})
  if(!user) return next(new AppError("not allowed to delete this Jop",404))
  res.status(200).json({message:"Deleted",user})
})


// Get User API

const getUser=catchError(async(req,res,next)=>{
  const user =  await User.findById(req.params.id)
    if(!user){
        return next(new AppError(" User Not Found " , 404 ))
    }
    res.status(200).json({message:"Success" , user})
 })



//  Get profile data

const getProfileData = catchError(async(req,res,next)=>{
    const {userId} = req.params
    const user =  await User.findById(userId).select('-password')
    if(!user){
        return next(new AppError(" User Not Found " , 404 ))
    }
    res.status(200).json({message:"Success" , user})
})




const updatePassword = catchError(async(req,res,next)=>{

   const user = await User.findByIdAndUpdate(req.params.id ,req.body, {new:true})

   if(!user){
    return next(new AppError(" User Not Found " , 404 ))
    }
   user.password = undefined
    res.status(200).json({message:"Updated" , user}) 
 
})




const forgetPassword = catchError(async(req,res,next)=>{

  const { email, newPassword } = req.body;
  const user = await User.findOne({email})
  if(!user) return next(new AppError("User Not Found" , 404))

  sendOTP(req.body.email)
  user.password = bcrypt.hashSync(newPassword , 10)
  res.status(200).json({message:"Success" , user})
 })


const getAllAccounts = catchError(async(req,res,next)=>{

    const{recoveryEmail} = req.body
    const user = await User.find(recoveryEmail)
    if(!user){
        return next(new AppError(" User Not Found " , 404 ))
    }
    res.status(200).json({message:"Success" , user})

 })





   
export{
    signup,
    signin,
    updateAccount,
    deleteUser,
    getUser,
    getProfileData,
    updatePassword,
    forgetPassword,
    getAllAccounts
}