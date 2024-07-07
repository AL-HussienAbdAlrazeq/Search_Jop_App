import { Router } from "express"
import { companyHRMiddleware, verifyToken } from "../../middleware/verifyToken.js"
import { addJop, deleteJop, getAllJops,  getCopmanyJops,  getJopFilter,  updateJop } from "./jop.controller.js"
import { validate } from "../../middleware/validation.js"
import { addJopVal, updateJopVal } from "./jop.validation.js"

const jopRouter = Router()
jopRouter.use(verifyToken())
jopRouter.post('/jop' ,  validate(addJopVal),companyHRMiddleware ,addJop)
jopRouter.put('/updatejop/:id', validate(updateJopVal) , companyHRMiddleware , updateJop)
jopRouter.delete('/deletejop/:id' , companyHRMiddleware , deleteJop)
jopRouter.get('/getjops' , getAllJops )
jopRouter.get('/getcompanyjops' , getCopmanyJops )
jopRouter.get('/jopfilter',getJopFilter)



export default jopRouter