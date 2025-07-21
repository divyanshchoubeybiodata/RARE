import mongoose from "mongoose";

const { Schema } = mongoose;
let JobSeekerModel;

const jobSeekerSchema = new Schema(
  {
    email: {
      type: String, 
      unique: true,
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
    fullName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required:true, // Assuming date of birth is a Date type
    },
    resume: {
      type: String,
      required:true, // Assuming the resume is stored as a file path or URL
    },
    photo: {
      type: String,
      required:true, // Assuming the photo is stored as a file path or URL
    },
    phoneNumber: {
      type: String,
      required:true, // Assuming phone number is stored as a string
    },
    description: {
      type: String,
      required:true,
    },
    domain:{
      type:String,
      required:true,
    },
    jobProfile: {
      type:String,
      required:false,
    },
  },
  { timestamps: true }
);

// export default mongoose.models.JobSeeker || mongoose.model("jobseeker", jobSeekerSchema);
try {
    // Try to get the existing model
    JobSeekerModel = mongoose.model("jobseeker");
  } catch (error) {
    // Model doesn't exist, create a new one
    JobSeekerModel = mongoose.model("jobseeker", jobSeekerSchema);
  }

  export default JobSeekerModel;
