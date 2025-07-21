import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import JobSeekerModel from "../../../../models/JobSeeker";

export const GET = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Retrieve all resumes from the database
    const allResumes = await JobSeekerModel.find();

    // Return the resume data as a JSON response
    return new NextResponse(JSON.stringify(allResumes), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to fetch resumes", { status: 500 });
  }
};
