import { model, Schema } from "mongoose";

//  Schema About Company Details

const companySchema = new Schema({
    companyName :{
        type:String ,
        require:true ,
        unique:true
        },
    description :{
        type:String ,
        require:true
     },
    industry  : {
        type:String ,
        require:true 
    },
    address :  {
        type:String ,
        require:true
     } ,
    numberOfEmployees : {
        type:Number ,
        require:true
    },
    companyEmail :{
        type:String ,
        require:true , 
        unique:true 
    },
    companyHR :{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
},{
    timestamps:{updatedAt:false},
    versionKey:false
})



export const Company = model('Company' , companySchema)