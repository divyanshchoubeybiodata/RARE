import { NextResponse } from "next/server";
import AgencyModel from "../../../../models/Agency";
import connect from "../../../../utils/db";

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

export const GET = async (request) => {
  try {
   
    // Connect to the database

    // Retrieve all agencies from the database
  
    const agencies = await AgencyModel.find().populate("userid", "email");;
    
    // Return the agency data as a JSON response
    return new NextResponse(JSON.stringify(agencies), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to fetch agencies", { status: 500 });
  }
};