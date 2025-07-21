// This file handles the serverless function logic
// Import necessary modules and files
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import UserModel from "./models/User";
import connect from "./utils/db";

// Define the NextAuth configuration
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

export const { handlers: { GET, POST }, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Connect to the database
        await connect();

        // Find the user in the User collection
        const user = await UserModel.findOne({ email: credentials.email });

        if (user) {
          // Check if the entered password is correct
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (isPasswordCorrect) {
            return Promise.resolve(user);
          }
        }

        return Promise.resolve(null);
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      // Find the user in the User collection
      const foundUser = await UserModel.findOne({ email: session.session.user.email });

      if (foundUser) {
        // Update the session with the user data
        session.role = foundUser.role;
        session.user = foundUser;
        session.id = foundUser._id;
      }

      return session;
    },
  },
});