import { model, Schema } from "mongoose";

  


  const appSchema = new Schema({
    jobId :{
        type:Schema.Types.ObjectId,
        ref:'Jop',
        require:true
    },
    userId :{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    userTechSkills :{
        type:[String],
        require:true
    },
    userSoftSkills :{
        type:[String],
        require:true
    },
    userResume :{
        type:String,
        require:true
    }
  },{
    timestamps:{updatedAt:false},
    versionKey:false
})

appSchema.post('init', (doc)=>{
    doc.resumeURL = "http://localhost:3000/uploads/" + doc.resumeURL 
         
  })


 export const Application = model('Application',appSchema)