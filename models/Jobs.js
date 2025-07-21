import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema for the Job model
const jobSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming there is a User model for the user details
        required: true
    },
    organizationName: {
        type: String,
        required: true
    },
    openingDate: {
        type: Date,
        required: true
    },
    closingDate: {
        type: Date,
        required: false
    },
    jobProfile: {
        type: String,
        required: true
    },
    postingTime: {
        type: Date,
        default: Date.now
    },
    isOpen: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        required: true
    }
});

export default mongoose.models.Job || mongoose.model("Job", jobSchema);
