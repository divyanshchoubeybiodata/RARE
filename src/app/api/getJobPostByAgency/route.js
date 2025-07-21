import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import JobPostModel from "../../../../models/JobPost";

export const GET = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Retrieve the agencyId from the query parameters
    const { agencyId } = request.query;

    // Find job posts using the agencyId reference
    const jobPosts = await JobPostModel.find({ agencyId });

    // Return the job posts data as a JSON response
    return new NextResponse(JSON.stringify(jobPosts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to fetch job posts", { status: 500 });
  }
};
