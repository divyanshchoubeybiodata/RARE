import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";

import { Navbar, Header, Footer, ContactUs } from "../components/landingPage";
import connect from "../../utils/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rare Professions",
  description:
    "We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage. We are shaping the future. Together.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default async function RootLayout({ children }) {
  const session = await auth();
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
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"/>
              </head>
              <body className={inter.className}>
                <SessionProvider session={session}>
                  {/* header component  */}
                  <Header />
                  {/* Navbar component */}
                  <Navbar />

                  {children}

                  {/* // contactus  */}
                  <ContactUs />
                  {/* footer section  */}
                  <Footer />
                </SessionProvider>
              </body>
            </html>
            );
}
