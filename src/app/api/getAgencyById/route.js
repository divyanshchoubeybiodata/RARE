import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import AgencyModel from "../../../../models/Agency";
import UserModel from "../../../../models/User";

export const GET = async (request, { params }) => {
  try {
    // Connect to the database
    await connect();

    // Retrieve the agency by ID and populate the user email
    const agency = await AgencyModel.findById(params.agencyId).populate(
      "userid",
      "email"
    );

    if (!agency) {
      return new NextResponse("Agency not found", { status: 404 });
    }

    // Return the agency data as a JSON response
    return new NextResponse(JSON.stringify(agency), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to fetch agency", { status: 500 });
  }
};