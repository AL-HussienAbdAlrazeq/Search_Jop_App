
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import { AppError } from '../utils/appError.js'


export const fileUpload =()=>{


const storage = multer.diskStorage({
    destination:(req,file , cb)=>{
        cb(null ,'uploads/')
    },filename:(req, file, cb)=>{
        cb(null , uuidv4() + "-" +  file.originalname) 
    }
}) 

const fileFilter = (req,file,cb)=>{
  if(file.mimetype.startsWith('application/pdf')){
    cb(null , true)
  }else{
    cb(new AppError("Only PDF",409) , false)
  }
} 



const upload = multer({storage , fileFilter ,limits:{
    fileSize: 1*1024*1024
}})

return upload 
}


  

export const  uploadSingleFile = (fieldName)=>{
    return fileUpload().single(fieldName)
}


