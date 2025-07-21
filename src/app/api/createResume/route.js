import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Resumes from "../../../../models/Resumes";

export const POST = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Extract data from the request body
    const {
      user,
      FirstName,
      LastName,
      DOB,
      CV,
      Pan,
      isOpen,
      category,
      domain,
      desiredPost,
    } = await request.json();

    // Check if the resume already exists
    const existingResume = await Resumes.findOne({
      user,
      FirstName,
      LastName,
      DOB,
      CV,
      Pan,
      isOpen,
      category,
      domain,
      desiredPost,
    });

    if (existingResume) {
      return new NextResponse("Resume already exists", { status: 400 });
    }

    // Create a new resume instance
    const newResume = new Resumes({
      user,
      FirstName,
      LastName,
      DOB,
      CV,
      Pan,
      isOpen,
      category,
      domain,
      desiredPost,
    });

    // Save the new resume to the database
    await newResume.save();

    return new NextResponse({ message: "Resume created successfully" }, { status: 200, headers: { "Content-Type": "application/json" } });
} catch (error) {
    console.log(error);
    return new NextResponse(error.message, { status: 500 });
  }
};
