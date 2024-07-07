import mongoose from "mongoose";

  
 
export const dbConnection = mongoose.connect('mongodb://localhost:27017/Job_Search_App')
.then(()=>{
   console.log("DataBase Connect Successfully...");
})