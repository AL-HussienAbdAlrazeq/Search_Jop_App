import { Router } from "express"
import { addCompany, deleteCompanyData, getAllApplications, getCompanyData, searchCompanyByName, updateCompanyData } from "./company.controller.js"
import { validate } from "../../middleware/validation.js"
import { addCompanyVal, updateCompanyVal } from "./company.validation.js"
import { companyHRMiddleware, verifyToken } from "../../middleware/verifyToken.js"


const companyRouter = Router()

companyRouter.use(verifyToken())
companyRouter.post('/company' ,validate(addCompanyVal), companyHRMiddleware ,addCompany)
companyRouter.put('/update/:id' ,validate(updateCompanyVal),companyHRMiddleware , updateCompanyData ) 
companyRouter.delete('/delete/:id' ,companyHRMiddleware , deleteCompanyData ) 
companyRouter.get('/get/:id' ,companyHRMiddleware , getCompanyData ) 
companyRouter.get('/search' ,companyHRMiddleware , searchCompanyByName ) 
companyRouter.get('/getapp' ,companyHRMiddleware , getAllApplications ) 



export default companyRouter