import { model, Schema } from "mongoose";

//  Schema About Company Details

const companySchema = new Schema({
    companyName :{
        type:String ,
        required:true ,
        unique:true
        },
    description :{
        type:String ,
        required:true
     },
    industry  : {
        type:String ,
        required:true 
    },
    address :  {
        type:String ,
        required:true
     } ,
    numberOfEmployees : {
        type:Number ,
        required:true
    },
    companyEmail :{
        type:String ,
        required:true , 
        unique:true 
    },
    companyHR :{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:{updatedAt:false},
    versionKey:false
})



export const Company = model('Company' , companySchema)