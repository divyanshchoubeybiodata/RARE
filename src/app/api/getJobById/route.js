import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import JobPostModel from "../../../../models/JobPost";

export const GET = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Retrieve the jobId from the query parameters
    const { id } = request.query;

    // Find the job post by its ID
    const jobPost = await JobPostModel.findById(id);

    // If the job post is not found, return a 404 response
    if (!jobPost) {
      return new NextResponse("Job post not found", { status: 404 });
    }

    // Return the job post data as a JSON response
    return new NextResponse(JSON.stringify(jobPost), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to fetch job post", { status: 500 });
  }
};
