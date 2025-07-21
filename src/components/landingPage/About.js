import Link from "next/link";
import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { GiBullseye } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="overflow-hidden items-center justify-center bg-[#eaf4ff] px-6 pt-6 pb-12 lg:pt-[120px] lg:pb-[90px]  h-fit">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center font-bold mb-6 text-4xl text-[#215995]">
            About Us
          </h2>
          <div className="w-full h-auto  flex justify-center items-center ">
            <span className="text-gray-700 text-center leading-10 tracking-wide text-xl md:text-4xl mx-8 mb-10 md:mx-16" style={{fontSize:"20px"}}>
              At RARE Professions, we specialize in connecting exceptional talent with unique opportunities. We believe that every individual has a distinct skill set, and every organization deserves professionals who bring innovation, dedication, and impact to their roles. Our mission is to bridge the gap between rare skills and the industries that need them most.
              <br/>Whether you're a job seeker looking for a role that truly fits your expertise or an employer searching for standout candidates, we’re here to make the connection seamless and successful. With a focus on quality over quantity, we take a personalized approach to recruitment — understanding the needs of both clients and candidates to ensure long-term success.
              <br/>Driven by integrity, innovation, and insight, RARE Professions is more than a recruitment agency — we’re your strategic talent partner. Let's shape the future of work, one rare professional at a time.
            </span>
          </div>
          <div className="w-screen h-auto  flex justify-center items-center">
            <div className="container mx-auto py-9 items-center justify-center">
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="p-8 space-y-3 bg-white w-full md:w-[37vw] lg:w-[26vw] rounded-xl">
                  <div className="flex justify-start items-center">
                  <span className="inline-block text-[#011e4b] dark:text-[#011e4b]">
                    <GiBullseye className="h-14 w-14" />
                  </span>
                  <span className=" ml-4 text-xl font-bold text-[#011E4B]">Our Mission</span>
                  </div>

                  <p className="text-gray-500 dark:text-gray-300 ">
                    We align agency owners with candidates to streamline
                    recuritment process.
                  </p>
                </div>

                <div className="p-8 space-y-3 bg-white w-full md:w-[37vw] lg:w-[26vw] rounded-xl">
                <div className="flex justify-start items-center">
                  <span className="inline-block text-[#011e4b] dark:text-[#011e4b]">
                    <RiTeamFill className="h-14 w-14" />
                  </span>
                  <span className=" ml-4 text-xl font-bold text-[#011E4B]">Our Vision</span>
                  </div>

                  <p className="text-gray-500 dark:text-gray-300 ">
                    Our cohesive team transforms recruitment for agencies and
                    candidates
                  </p>
                </div>

                <div className="p-8 space-y-3 bg-white w-full md:w-[37vw] lg:w-[26vw] rounded-xl">
                <div className="flex justify-start items-center">
                  <span className="inline-block text-[#011e4b] dark:text-[#011e4b]">
                    <FaMapMarkedAlt className="h-14 w-14" />
                  </span>
                  <span className=" ml-4 text-xl font-bold text-[#011E4B]">Our Client</span>
                  </div>
             
                  <p className="text-gray-500 dark:text-gray-300 ">
                    8+ Countries, where we have clients. Rare welcomes you too.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <a
              href="/aboutUs"
              className="mx-20 text-center inline-flex p-2 text-white capitalize transition-colors duration-300 transform  rounded-full rtl:-scale-x-100  bg-[#001f4b] w-fit"
            >
              <span className="mx-2">Know more </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
