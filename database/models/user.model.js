import { model, Schema } from "mongoose";
 

//  Schema About User Details

const userSchema = new Schema({
    firstName : {type:String , required:true},
    lastName  : {type:String , required:true},
    username  : {type:String , required:true},
    email : {type:String , unique:true ,required:true},
    password : {type:String , required:true},
    recoveryEmail : {type:String , required:true},
    DOB : {type:Date ,  required: true},
    mobileNumber:{type:String , required:true ,unique:true},
    role :{type:String , enum:['User','Company_HR']},
    status:{type:String , enum:['online' , 'offline'] },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:{updatedAt:false},
    versionKey:false
})

export const User = model('User' , userSchema)