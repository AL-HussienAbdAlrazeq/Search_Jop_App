import { model, Schema } from "mongoose";

  


  const appSchema = new Schema({
    jobId :{
        type:Schema.Types.ObjectId,
        ref:'Jop',
        required:true
    },
    userId :{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    userTechSkills :{
        type:[String],
    },
    userSoftSkills :{
        type:[String],
    },
    userResume :{
        type:String,
        required:true
    },
    
  },{
    timestamps:{updatedAt:false},
    versionKey:false
})

appSchema.post('init', (doc)=>{
    doc.userResume = "http://localhost:3000/uploads/" + doc.userResume 
         
  })


 export const Application = model('Application',appSchema)