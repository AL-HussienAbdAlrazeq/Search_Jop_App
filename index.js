process.on('uncaughtException' ,(err)=>{
    console.log("error",err);
  })

import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { dbConnection } from './database/dbConnection.js'
import { globalError } from './src/middleware/globalError.js'
import { AppError } from './src/utils/appError.js'
import userRouter from './src/modules/user/user.routes.js'
import companyRouter from './src/modules/company/company.routes.js';
import jopRouter from './src/modules/jop/jop.routes.js';
import appRouter from './src/modules/application/app.routes.js';

 const app = express()
 const port = 3000
 app.use(express.json())
 app.use( '/uploads' ,express.static('uploads'))

 app.use('/auth' , userRouter) 
 app.use('/', companyRouter)
 app.use('/',jopRouter)
 app.use('/', appRouter)

export const  secretKey = process.env.SECRET_KEY


 
app.use('*',(req,res,next)=>{
    return next(new AppError(`Route Not Found ${req.originalUrl}` , 404))
})

app.use(globalError)

process.on('unhandledRejection',(err)=>{
  console.log("error" ,err)
})
 
 app.get('/', (req, res) => res.send('Hello World!'))
 app.listen(port, () => console.log(`Example app listening on port ${port}!`))