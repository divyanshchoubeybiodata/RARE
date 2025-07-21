import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(request) {
  const reqBody = await request.json();

  const { name, email, phone, message } = reqBody;
  let sendTo = "info@rareprofessions.com";

  if (!name || !email  || !message || !sendTo) {
    console.error("Missing required fields");
    return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: sendTo,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}