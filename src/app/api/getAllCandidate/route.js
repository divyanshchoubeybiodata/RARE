import { NextResponse } from "next/server";
import CandidateModel from "../../../../models/Candidate";
import UserModel from "../../../../models/User";
import { auth } from "../../../../auth"
import connect from "../../../../utils/db";
import { cache } from "react";
import { revalidatePath } from "next/cache";
export const dynamic = 'force-dynamic' // defaults to auto


async function connectToDatabase() {
  try {
    await connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Could not connect to MongoDB");
  }
}

connectToDatabase();

export const GET =cache( async (request) => {
  
  
  try {
   
    // Connect to the database
  

    // const session = await getServerSession({ req: request });

    // Check if the user is logged in and has the appropriate role


    
  
    
    // Retrieve all candidates and populate the user email
    const candidates = await CandidateModel.find().populate("userid", "email");
    
    // Return the candidate data as a JSON response
    return new NextResponse(JSON.stringify(candidates), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to fetch candidates", { status: 500 });
  }
})