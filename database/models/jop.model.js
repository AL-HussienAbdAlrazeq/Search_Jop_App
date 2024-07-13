import { model, Schema } from "mongoose";

//  Schema About Jop Details

const jopSchema = new Schema({
    jobTitle : {type:String , require:true },
    jobLocation :{ 
         type: String,
        enum: ['onsite', 'remote', 'hybrid'],
        required: true
    },
    workingTime: {
        type: String,
        enum: ['part-time', 'full-time'],
        required: true
    },
    seniorityLevel: {
        type: String,
        enum: ['Junior', 'Mid-Level', 'Senior', 'Team-Lead', 'CTO'],
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    technicalSkills: {
        type: [String],
        required: true
    },
    softSkills: {
        type: [String],
        required: true
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },  
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:{updatedAt:false},
    versionKey:false
})


export const Jop = model('Jop', jopSchema)