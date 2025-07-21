import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import UserModel from "../../../../models/User";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Get the current user from the request

    // Retrieve the user data from the request body
    const { email, password, role } = await request.json();

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await UserModel.create({
      email,
      hashedPassword,
      role,
    });

    // Send a welcome email
    const transporter = nodemailer.createTransport({
      port: process.env.SMTP_PORT,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: newUser.email,
      subject: "Welcome to our platform",
      text: `Hello ${newUser.email}, welcome to our platform as a ${newUser.role}!\nlogin on our website with the following credentials:\n\nEmail: ${newUser.email}\nPassword: ${password} `,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(JSON.stringify(newUser), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error.message);
    // You can handle the error appropriately based on your application's needs
    return new NextResponse("Failed to create user", { status: 500 });
  }
};