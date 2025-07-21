import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  isPan: {
    type: Boolean,
    required: true
  },
  panNumber: {
    type: String,
    required: function() {
      return this.isPan;
    }
  },
  isAadhar: {
    type: Boolean,
    required: true
  },
  aadharNumber: {
    type: String,
    required: function() {
      return this.isAadhar;
    }
  },
  resumeUrl: {
    type: String,
    required: true
  },
  isExperience: {
    type: Boolean,
    required: true
  },
  currentCtc: {
    type: Number,
    required: function() {
      return this.isExperience;
    }
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  jobType:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);
