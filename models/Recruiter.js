import mongoose from "mongoose";

const { Schema } = mongoose;
let RecruiterModel
const recruiterSchema = new Schema(
  {
    email: {
      type: String, 
      unique:true,
      required: true,
    },
    password: {
      type: String,
      required: true, // Change to true if password is required
    },
    role: { 
        type: String, 
        required: true,
    },
    firmType: {
      type: String,
      required: true,
    },
    companyWebsite: {
      type: String,
      required:true, // Assuming date of birth is a Date type
    },
    hiringRole: {
      type: String,
      required:true, // Assuming the resume is stored as a file path or URL
    },
    companyName: {
      type: String,
     
      required:true, // Assuming the photo is stored as a file path or URL
    },
    vacancy:{
      type : String ,
      required:false,
    },
   
  },
  { timestamps: true }
);

try {
    // Try to get the existing model
    RecruiterModel = mongoose.model("recruiter");
  } catch (error) {
    // Model doesn't exist, create a new one
    RecruiterModel = mongoose.model("recruiter", recruiterSchema);
  }

  export default RecruiterModel;
