import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Jobs from "../../../../models/Jobs";

export const POST = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Extract data from the request body
    const {
      user,
      organizationName,
      openingDate,
      closingDate,
      jobProfile,
      category,
    } = await request.json();

    // Check if the job already exists
    const existingJob = await Jobs.findOne({
      organizationName,
      openingDate,
      closingDate,
      jobProfile,
    });

    if (existingJob) {
      return new NextResponse("Job already exists", { status: 400 });
    }

    // Create a new job instance
    const newJob = new Jobs({
      user,
      organizationName,
      openingDate,
      closingDate,
      jobProfile,
      category,
    });

    // Save the new job to the database
    await newJob.save();

    return new NextResponse("Job created successfully", { status: 200 });
  } catch (error) {
    console.log(error)
    return new NextResponse(error.message, { status: 500 });
  }
};
