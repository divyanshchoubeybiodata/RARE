"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaMobile, FaCode } from "react-icons/fa";

import { PiBuildingsFill } from "react-icons/pi";
import { HiRectangleGroup } from "react-icons/hi2";
import { FaBusinessTime } from "react-icons/fa6";
import { PiLaptopBold } from "react-icons/pi";
import Link from "next/link";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const services = [
    {
      icon: <PiBuildingsFill className="h-10 w-10 text-white transition-all"/>,
      title: "International Recruitment",
      description:
        "Global talent sourcing tailored to your needs with International Recruitment.",
    },
    {
      icon: <HiRectangleGroup className="h-10 w-10 text-white transition-all"/>,
      title: "Bulk Hiring",
      description:
        "Efficiently scale your workforce with our Bulk Hiring solutions. Find right talent. ",
    },
    {
      icon: <FaBusinessTime className="h-10 w-10 text-white transition-all"/>,
      title: "Startup Recruitment Agency",
      description:
        "Empowering startups with top-tier talent through our Startup Recruitment Agency.",
    },
    {
      icon: <PiLaptopBold className="h-10 w-10 text-white transition-all"/>,
      title: " IT-Recruitment Agency",
      description:
        "Specialized IT talent acquisition made seamless with our IT-Recruitment agency.",
    }
  ];

  return (
    <div className=" bg-white h-fit relative overflow-x-hidden pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 250 }}
        transition={{ duration: 1 }}
        className=" absolute -left-14 md:block hidden top-80"
      >
        <svg
          className="absolute "
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="20"
            ry="20"
            transform="rotate(45 50 50)"
            fill="#629bf7"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -250 }}
        transition={{ duration: 1 }}
        className=" absolute right-10 md:block hidden top-80"
      >
        <svg
          className="absolute "
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="20"
            ry="20"
            transform="rotate(45 50 50)"
            fill="#629bf7"
          />
        </svg>
      </motion.div>
      <motion.div
        className="pt-24 container mx-auto flex flex-col-reverse relative md:flex-row-reverse items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        <div className="w-full  p-4">
          <motion.h1 className="text-3xl md:text-5xl font-semibold text-[#001f4b] mb-4">
            Our Services
          </motion.h1>
          <motion.p className="text-lg md:text-2xl text-gray-600 mb-16" style={{fontSize:"20px"}}>
            &quot;Tailored Recruitment Solutions to Drive Your Growth&quot;<br/>
            At RARE Professions, we deliver end-to-end recruitment services designed to meet the evolving needs of businesses across industries. Whether you're a startup, a scaling enterprise, or a global organization, our team is equipped to connect you with the right professionals — efficiently and strategically.
            
          </motion.p>

          <motion.div className="grid gap-2  gap-y-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-4 md:space-y-0 text-white ">
            {services.map((service, index) => (
              <motion.div
              key={`serv-${index}`}
                  className="group relative cursor-pointer overflow-hidden bg-white  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-5 sm:max-w-sm sm:rounded-lg sm:px-10">

                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#001f4b] transition-all duration-300 group-hover:scale-[10]"></span>
                  <Link href={`/services/#${index+1}`}>
                  <div className="relative z-10 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-[#001f4b] transition-all duration-300 group-hover:bg-sky-400">
                      {service.icon}
                      </span>
                      <div
                          className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                          <p className="text-lg font-bold">
                            {service.title}
                          </p>
                          <p>{service.description}</p>
                      </div>
                      <div className="pt-5 text-base font-semibold leading-7">
                          <p>
                              <span className="text-[#001f4b] transition-all duration-300 group-hover:text-white">Click Here
                                  &rarr;
                              </span>
                          </p>
                      </div>
                  </div>
                  </Link>
              </motion.div>

            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
