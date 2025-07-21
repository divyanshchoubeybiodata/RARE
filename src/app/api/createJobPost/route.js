import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import JobPostModel from "../../../../models/JobPost";

export const POST = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Retrieve the job post data from the request body
    const { title, skills, agencyId, jdUrl, isExperience, experience } = await request.json();

    if (
      !title ||
      !skills ||
      !agencyId ||
      !jdUrl 
    ) {
      return new NextResponse("Missing required agency fields", { status: 400 });
    }
    // Create a new job post
    const newJobPost = await JobPostModel.create({
      title,
      
      skills,
      agencyId,
      jdUrl,
      isExperience,
      experience,
    });

    return new NextResponse(JSON.stringify(newJobPost), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to create job post", { status: 500 });
  }
};
