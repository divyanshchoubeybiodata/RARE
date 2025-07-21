"use client";
import axios from "axios";
import React, { useState } from "react";
import { RiUserLocationFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const pathname = usePathname()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        phone,
        message,
      });

      if (response.status === 200) {
        alert("Sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the email. Please try again.");
    }
  };
  return (
    <div id="ContactUs" style={{ paddingTop: '60px', marginTop: '-60px' }} >
      <section  className={` z-10  overflow-hidden   bg-[#021f4e] pt-16 pb-12 lg:pb-14  lg:pt-40 lg:py-16 ${(pathname.includes("/dashboard") || pathname.includes("/register") || pathname.includes("/login"))? "hidden" : "block"}`} >
        <div className="container">

            <div className="w-full  ">
              <div className="rounded-lg  md:px-8  sm:px-12 flex items-center justify-center md:justify-start">
                <form onSubmit={handleSubmit} className="w-[80vw] pb-6 md:w-1/2">
                  <h4 className="text-white racking-wide font-semibold mb-6 text-2xl md:hidden">Get in touch with us.</h4>
                  <div className="flex flex-col md:flex-row">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={name} // Add the value prop
                      onChange={(e) => setName(e.target.value)} // Add the onChange prop
                      className="w-full border border-gray-400 border-stroke px-[14px] py-3 text-base text-body-color rounded-xl mb-4 outline-none mr-4 focus:border-blue-500 "
                      required
                    />

                    <input
                      type="text"
                      placeholder="Your Email"
                      name="email"
                      value={email} // Add the value prop
                      onChange={(e) => setEmail(e.target.value)} // Add the onChange prop
                      className="w-full  border border-gray-400 border-stroke px-[14px] py-3 text-base text-body-color mb-4 rounded-xl  outline-none focus:border-blue-500 "
                      required
                    />
                  </div>
                  {/* text-area*/}
                  <textarea
                    row="4"
                    placeholder="Your Message / Feedback"
                    name="details"
                    value={message}
                    defaultValue={""} // Add the onChange prop
                    className="w-full resize-none border-gray-400  border border-stroke px-[14px] py-3 text-base text-body-color rounded-xl outline-none focus:border-blue-500 my-4"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />

                  {/* </div> */}
                  <div className="flex justify-center md:justify-start">
                    <button
                      type="submit"
                      className="w-fit rounded-xl bg-gray-200  py-3 px-6 text-[#0D3885] transition hover:bg-opacity-90"
                    >
                      Send
                    </button>
                  </div>
                </form>
                <div className="hidden md:block mb-12 w-1/2 pl-24 ">
                <h2 className="mb-10 leading-12 font-mono text-3xl block font-semibold text-white text-[32px] tracking-wide  sm:text-[25px] lg:text-[36px] xl:text-[40px]">
                  Get in touch with us.
                </h2>
                <div className="mb-8  flex w-full items-center max-w-[370px]">
                  {/* <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-gray-100 bg-opacity-10 text-blue-500 sm:h-[70px] sm:max-w-[70px] p-2">
                    <RiUserLocationFill className="h-16 w-16 text-gray-100" />
                  </div> */}
                  <div className="w-full">
                    {/* <h4 className="mb-1 text-lg lg:text-xl font-bold text-white">
                      Our Location
                    </h4>
                    <p className="text-sm ld:text-base text-body-color text-gray-200">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p> */}
                  </div>
                </div>
              </div>
              </div>
            </div>


          </div>
        
      </section>
    </div>
  );
};

export default ContactUs;
