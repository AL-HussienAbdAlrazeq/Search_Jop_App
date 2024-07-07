import { Router } from "express";
import { verifyToken } from "../../middleware/verifyToken.js";
import { userMiddleware } from "../../middleware/requierRoleUser.js";
import { validate } from "../../middleware/validation.js";
import { applyJopVal } from "./app.validation.js";
import { applyToJop } from "./app.controller.js";
import { uploadSingleFile } from "../../fileUploads/fileUploads.js";


const appRouter =Router()
appRouter.use( verifyToken())
appRouter.post('/applyjop/:id/', userMiddleware ,validate(applyJopVal),uploadSingleFile('resume'),applyToJop)



export default appRouter