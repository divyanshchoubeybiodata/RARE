import mongoose from "mongoose";

const jobPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: true
  },
  jdUrl: {
    type: String
  },
  isExperience: {
    type: Boolean,
    required: true
  },
  experience: {
    type: String,
    required: function() {
      return this.isExperience === true;
    }
  }
});

export default mongoose.models.JobPost || mongoose.model("JobPost", jobPostSchema);
