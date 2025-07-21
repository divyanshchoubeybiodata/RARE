// Import the necessary modules
import mongoose from "mongoose";

const { Schema } = mongoose;
// Define the schema for the Resumes model
const resumesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming there is a User model for the user details
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    CV: {
        type: String, // Assuming CV is stored as a link (URL)
        required: true
    },
    Pan: {
        type: String, // Assuming Pan is stored as a link (URL)
        required: true
    },
    isOpen: {
        type: String,
        default: true
    },
    category: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    desiredPost: {
        type: String,
        required: true
    }
});

// Create the Resumes model using the schema
export default mongoose.models.Resume || mongoose.model("Resume", resumesSchema);
