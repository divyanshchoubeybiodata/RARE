"use client";
import React from "react";
import { PiBuildingsFill } from "react-icons/pi";
import { HiRectangleGroup } from "react-icons/hi2";
import { FaBusinessTime } from "react-icons/fa6";
import { PiLaptopBold } from "react-icons/pi";
import { motion } from "framer-motion";
import Section from "../../components/Section";

function Services() {
  const services = [
    {
      icon: <PiBuildingsFill className="h-10 w-10 text-white transition-all" />,
      title: "International Recruitment",
      description:
        "Global talent sourcing tailored to your needs with International Recruitment.",
    },
    {
      icon: (
        <HiRectangleGroup className="h-10 w-10 text-white transition-all" />
      ),
      title: "Bulk Hiring",
      description:
        "Efficiently scale your workforce with our Bulk Hiring solutions. Find right talent. ",
    },
    {
      icon: <FaBusinessTime className="h-10 w-10 text-white transition-all" />,
      title: "Startup Recruitment Agency",
      description:
        "Empowering startups with top-tier talent through our Startup Recruitment Agency.",
    },
    {
      icon: <PiLaptopBold className="h-10 w-10 text-white transition-all" />,
      title: " IT-Recruitment Agency",
      description:
        "Specialized IT talent acquisition made seamless with our IT-Recruitment agency.",
    },
  ];

  return (
    <div className="flex flex-col">
      <div
        style={{
          width: "100vw",
          height: "70vh",
          backgroundImage: 'url("/services.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mt-20 md:mt-32  flex items-end md:items-center  "
      >
        <div className="bg-opacity-10 backdrop-blur-sm flex flex-col items-start justify-end md:justify-center  h-[30%] md:h-full w-full md:w-[40%] bg-black pb-4 md:pb-0 pl-4 md:pl-32">
          <h1 className="font-mono text-white text-4xl md:text-5xl font-bold">
            Services
          </h1>
          <div className="h-[1px] my-3  w-40 md:w-48 bg-slate-300"></div>
          <p className=" text-white text-lg md:text-xl font-light">
            Founded in 2023, INDIA
          </p>
        </div>
      </div>

      <div className="h-fit ">
        <p className="text-xl text-center py-4 lg:py-28 w-full bg-white flex flex-col px-8 md:px-20 items-center justify-center">
          &quot; Transforming businesses worldwide through seamless talent
          acquisition. Specializing in international recruitment, bulk hiring,
          and startup solutions, we&apos;re your premier IT recruitment
          agency.&quot;
        </p>
        <motion.div className=" ">
          <div id="1" style={{ paddingTop: "40px", marginTop: "-40px" }}>
            <Section
              id={"1"}
              type={"left"}
              title={"International Recruitment"}
              description={
                " We help you tap into a diverse pool of skilled professionals from around the world. With deep market insights and a refined sourcing process, our international recruitment services ensure you attract the best global talent while maintaining compliance and cultural alignment. Unlock a world of talent tailored precisely to your requirements through our International Recruitment services. Whether you're seeking skilled professionals from diverse corners of the globe or specialists with niche expertise, we offer a comprehensive solution to match your unique needs. Trust us to navigate the international talent acquisition, delivering unparalleled results that drive your business forward."
              }
              image={
                "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <section className="bg-white py-12 px-4 md:px-8 lg:px-16 shadow-sm">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base md:text-lg">
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    ✅ End-to-end cross-border hiring support
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    ✈️ Visa and relocation guidance
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🌍 Multilingual candidate sourcing
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🏢 Ideal for MNCs, remote teams, and expansion plans
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div id="2" style={{ paddingTop: "5px", marginTop: "-5px" }}>
            <Section
              id={"2"}
              type={"right"}
              title={"Bulk Hiring"}
              description={`"When speed and volume matter, our bulk hiring services help you build large teams without compromising on quality. We streamline the process from sourcing to onboarding, so you can focus on scaling operations with confidence. Streamline your organization's growth trajectory with our cutting-edge Bulk Hiring solutions. Our innovative approach empowers you to swiftly expand your workforce while pinpointing the ideal talent for your unique needs. Say goodbye to lengthy hiring processes and hello to a seamlessly efficient method for sourcing and onboarding top-tier professionals."`}
              image={
                "https://images.unsplash.com/photo-1664651205193-bfb6bfdd3b09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <section className="bg-white pt-0 pb-12 px-4 md:px-8 lg:px-16 shadow-sm">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base md:text-lg">
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    📈 High-volume candidate sourcing
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🧪 Screening, assessment & onboarding
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🧠 Sector-specific talent pools
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🚀 Perfect for new projects, seasonal demand, or business
                    expansion
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div id="3" style={{ paddingTop: "5px", marginTop: "-5px" }}>
            <Section
              id={"3"}
              type={"left"}
              title={"Startup Recruitment Agency"}
              description={`"Startups need more than just employees — they need adaptable, driven individuals who thrive in fast-paced environments. We provide early-stage companies with tailored recruitment support to attract and retain high-impact talent. Empowering startups with top-tier talent through our Startup Recruitment Agency, we specialize in sourcing, vetting, and connecting ambitious entrepreneurs with skilled professionals poised to drive innovation and growth.  From technical wizards to visionary leaders, we handpick individuals who not only possess the necessary skills but also embody the entrepreneurial spirit. "`}
              image={
                "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <section className="bg-white pt-0 pb-12 px-4 md:px-8 lg:px-16 shadow-sm">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base md:text-lg">
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🚀 Specialized recruitment for startup culture
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🔁 Flexible engagement models
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    👥 Access to pre-vetted entrepreneurial talent
                  </li>
                  <li className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                    🌱 Supports growth from seed stage to scale-up
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div id="4" style={{ paddingTop: "5px", marginTop: "-5px" }}>
            <Section
              type={"right"}
              title={"IT-Recruitment Agency"}
              description={`Effortlessly source top-tier IT talent tailored to your specific needs through our expert IT-Recruitment agency. We specialize in seamlessly connecting businesses with skilled professionals proficient in cutting-edge technologies. Whether you require developers, engineers, or IT consultants, our agency streamlines the recruitment process, ensuring you find the perfect fit for your team with ease and efficiency.`}
              image={
                "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
