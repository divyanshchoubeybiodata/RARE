import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import UserModel from "../../../../models/User";
import AgencyModel from "../../../../models/Agency";
import User from "../../../../models/User";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

export const POST = async (request) => {

  function generateRandomPassword() {
    return crypto.randomBytes(10).toString("hex");
  }

  try {
    // Connect to the database
    await connect();
    const { agencyName, contactPersonName, contactPersonEmail,state, contactPersonNumber, designation ,city} = await request.json();

    if (
      !agencyName ||
      !contactPersonName ||
      !contactPersonEmail ||
      !contactPersonNumber ||
      !designation ||
      !city ||
      !state
    ) {
      return new NextResponse("Missing required agency fields", { status: 400 });
    }
  
    const randomPassword = generateRandomPassword();

  // Check if the user already exists
 
  // Hash the password
  const hashedPassword = await bcrypt.hash(randomPassword, 10);

  // Create the user
  const user = await User.create({
    role: "agency",
    email:contactPersonEmail,
    hashedPassword,
  });

    // Retrieve the agency data from the request body

    // Create a new agency
    const newAgency = await AgencyModel.create({
      userid:user._id,
      agencyName,
      city,
      state,
      contactPersonName,
      contactPersonEmail,
      contactPersonNumber,
      designation,
    });

    const transporter = nodemailer.createTransport({
      port: process.env.SMTP_PORT,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.SMTP_USER,
      to: contactPersonEmail,
      subject: `Your new agency account on Rare Professions`,
      text: `Your new account has been created you can update agency information by login on our website with the following credentials:\n\nEmail: ${contactPersonEmail}\nPassword: ${randomPassword} `,
    };

    await transporter.sendMail(mailData);



    return new NextResponse(JSON.stringify(newAgency), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to create agency", { status: 500 });
  }
};