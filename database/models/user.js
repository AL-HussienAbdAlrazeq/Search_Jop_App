import { model, Schema } from "mongoose";
 

//  Schema About User Details

const userSchema = new Schema({
    firstName : {type:String , require:true},
    lastName  : {type:String , require:true},
    username  : {type:String , require:true},
    email : {type:String , unique:true ,require:true},
    password : {type:String , require:true},
    recoveryEmail : {type:String , require:true},
    DOB : {type:Date ,  required: true},
    mobileNumber:{type:String , require:true ,unique:true},
    role :{type:String , enum:['User','Company_HR']},
    status:{type:String , enum:['online' , 'offline'] }
},{
    timestamps:{updatedAt:false},
    versionKey:false
})

export const User = model('User' , userSchema)