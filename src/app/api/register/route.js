import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import User from "../../../../models/User";
import CandidateModel from "../../../../models/Candidate";
import AgencyModel from "../../../../models/Agency";
import crypto from 'crypto'
import nodemailer from "nodemailer";

export const POST = async (request) => {
  function generateRandomPassword() {
    return crypto.randomBytes(10).toString("hex");
  }
  try {
    await connect();
    const {
      role,
      email,
      // Candidate fields
      firstName,
      lastName,
      education,
      mobileNumber,
      isPan,
      panNumber,
      isAadhar,
      aadharNumber,
      resumeUrl,
      isExperience,
      currentCtc,
      state,
      city,
      jobType,
      // Agency fields
      agencyName,
      contactPersonName,
      contactPersonEmail,
      contactPersonNumber,
      designation,
    } = await request.json();
console.log(isAadhar,aadharNumber,isPan,panNumber);
    // Validate required fields based on the role
    if (role === "candidate") {
      if (
        !firstName ||
        !lastName ||
        !education ||
        !mobileNumber ||
        !jobType||
   
        !resumeUrl ||
    
       
        !state ||
        !city
      ) {
        return new NextResponse("Missing required candidate fields", { status: 400 } );
      }
    } else if (role === "agency") {
      if (
        !agencyName ||
        !contactPersonName ||
        !contactPersonEmail ||
        !contactPersonNumber ||
        !designation
      ) {
        return new NextResponse("Missing required agency fields", { status: 400 });
      }
    } else {
      return new NextResponse("Invalid role", { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    // Hash the password
    const randomPassword = generateRandomPassword();

    // Check if the user already exists
   
    // Hash the password
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    // Create the user
    const user = await User.create({
      role,
      email,
      hashedPassword,
    });

    // Create the candidate or agency document
    if (role === "candidate") {
      await CandidateModel.create({
        userid: user._id,
        firstName,
        lastName,
        education,
        mobileNumber,
        isPan,
        panNumber,
        isAadhar,
        aadharNumber,
        resumeUrl,
        isExperience,
        currentCtc,
        state,
        city,
        jobType,
      });
    } else if (role === "agency") {
      await AgencyModel.create({
        userid: user._id,
        agencyName,
        contactPersonName,
        contactPersonEmail,
        contactPersonNumber,
        designation,
      });
    }

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
      to: email,
      subject: `Welcome to Rare Professions`,
      text: `Welcome New Candidate ${firstName} ${lastName} Your application have been registered with us successfully our team will contact with you soon.`,
    };

    await transporter.sendMail(mailData);
    return new NextResponse("User registered successfully", { status: 201 });
  } catch (err) {
    console.error("Error during user registration:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};