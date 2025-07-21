import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import CandidateModel from "../../../../models/Candidate";
import UserModel from "../../../../models/User";

export const GET = async (request, { params }) => {
  try {
    // Connect to the database
    await connect();

    const {userid} = request.json()
    console.log(userid)
    // Retrieve the candidate by user ID reference
    const candidate = await CandidateModel.findOne({ userid: userid }).populate(
      "userid",
      "email"
    );

    if (!candidate) {
      return new NextResponse("Candidate not found", { status: 404 });
    }

    // Return the candidate data as a JSON response
    return new NextResponse(JSON.stringify(candidate), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to fetch candidate", { status: 500 });
  }
};