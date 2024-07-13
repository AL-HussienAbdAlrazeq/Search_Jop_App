import { Router } from "express";
import { deleteUser, forgetPassword, getAllAccounts, getProfileData, getUser, signin, signup, updateAccount, updatePassword  } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
import { validate } from "../../middleware/validation.js";
import { signinVal, signupVal, updatePasswordVal, updateUserVal } from "./user.validation.js";
import { verifyToken } from "../../middleware/verifyToken.js";

// ALL Routes About User

const userRouter = Router()

userRouter.post('/signup' ,validate(signupVal) ,checkEmail,signup)
userRouter.post('/signin' , validate(signinVal),signin)
userRouter.put('/update/:id',validate(updateUserVal) ,verifyToken(),updateAccount)
userRouter.delete('/delete/:id' , verifyToken(),deleteUser)
userRouter.get('/get/:id',verifyToken(),getUser)
userRouter.get('/profile/:userId', verifyToken(),getProfileData)
userRouter.put('/password/:id' , verifyToken(), validate(updatePasswordVal) , checkEmail,updatePassword)
userRouter.post('/forget-password' ,  verifyToken(), forgetPassword )
userRouter.get('/accounts' , verifyToken(),getAllAccounts)

export default userRouter