"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const pathname = usePathname()
  const [hamIsOpen, sethamIsOpen] = useState(false);
  const toggleHamIsOpen = () => {
    // sethamIsOpen(!hamIsOpen); // Toggle the value
    if(hamIsOpen === true){
      sethamIsOpen(false);
    }else{
      sethamIsOpen(true);
    }
  };

  return (
    <motion.header
      id="hamMenu"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${(pathname.includes("/dashboard") )? "hidden" : "block"}`}
    >
      <div className={`bg-white shadow-md bg-opacity-100    flex justify-between pl-0 pr-10 md:pl-10 md:px-10 py-4 top-0 ${(pathname.includes("/login") || pathname.includes("/register") )? "lg:top-0" : "lg:top-14"} w-full h-20   items-center z-50 fixed`}>
        <Link className="text-white text-lg flex" href="/">
          <Image src="/rareNewLogoDark.png" height={50} width={160} alt="" />
          {/* <Image src="/rareNewLogoDark.png" height={50} width={160} alt="rare-logo" /> */}
        </Link>
        {/* section links  */}
        <div className="hidden  md:block">
          <div className="flex space-x-5">
            <Link
              scroll={true}
              href="/aboutUs"
              className="cursor-pointer p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827] overflow-clip relative group"
            >
              <div className="absolute rotate-12 group-hover:translate-y-0 group-hover:rotate-0 translate-y-20 transition-all ease-in-out duration-500 ">
                About
              </div>
              <div className=" group-hover:-translate-y-20 group-hover:-rotate-12 transition-all ease-in-out duration-500 ">
                About
              </div>
            </Link>
            <Link
              href="/services"
              className="cursor-pointer  p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827] overflow-clip relative group"
            >
              <div className="absolute rotate-12 group-hover:translate-y-0 group-hover:rotate-0 translate-y-20 transition-all ease-in-out duration-500 ">
                Services{" "}
              </div>
              <div className=" group-hover:-translate-y-20 group-hover:-rotate-12 transition-all ease-in-out duration-500 ">
                Services
              </div>
            </Link>
            <Link
              href="/#Testimonials"
              className="cursor-pointer  p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827] overflow-clip relative group"
            >
              <div className="absolute rotate-12 group-hover:translate-y-0 group-hover:rotate-0 translate-y-20 transition-all ease-in-out duration-500 ">
                Testimonials{" "}
              </div>
              <div className=" group-hover:-translate-y-20 group-hover:-rotate-12 transition-all ease-in-out duration-500 ">
                Testimonials
              </div>
            </Link>
            <Link
              href="#ContactUs"
              className="cursor-pointer  p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827] overflow-clip relative group"
            >
              <div className="absolute rotate-12 group-hover:translate-y-0 group-hover:rotate-0 translate-y-20 transition-all ease-in-out duration-500 ">
                ContactUs
              </div>
              <div className=" group-hover:-translate-y-20 group-hover:-rotate-12 transition-all ease-in-out duration-500 ">
                ContactUs
              </div>
            </Link>
          </div>
        </div>
        {/* login register buttons  */}
        <div className="hidden lg:block md:block">
          <div className="flex space-x-5 ">
            {" "}
            
            
            <Link
              href="/register"
              className="cursor-pointer bg-[#1F2937] hover:bg-[#10437a] py-2 px-4 rounded-xl text-white transition-all ease-in-out duration-500 overflow-clip relative group "
            >
              <div className="absolute rotate-12 group-hover:translate-y-0 group-hover:rotate-0 translate-y-20 transition-all ease-in-out duration-500 ">
                Register
              </div>
              <div className=" group-hover:-translate-y-20 group-hover:-rotate-12 transition-all ease-in-out duration-500 ">
                Register
              </div>
            </Link>
          </div>
        </div>
        {/* hamburger button  */}
        <button
          className="lg:hidden md:hidden  text-[#111827] text-3xl transition-all ease-in-out duration-500"
          onClick={toggleHamIsOpen}
          // onBlur={()=>{sethamIsOpen(false)}}
        >
          {hamIsOpen ? <IoMdCloseCircle/> : <RiMenu4Fill/>}
        </button>
        {/* hamburger options  */}
      </div>
      <OutsideClickHandler
      onOutsideClick={() => {
       sethamIsOpen(false);
      }}
    />

      <section
        className={`md:hidden lg:hidden z-40 fixed top-10 px-4 bg-white bg-opacity-100  shadow-sm 0 w-full pt-10 pb-5 transition ease-in-out duration-500 ${
          hamIsOpen ? "translate-y-0" : " -translate-y-96"
        }`}
      >
        {/* section links */}{" "}
        <div className="flex flex-col pt-4">
        

          <Link
            href="/aboutUs"
            className="cursor-pointer   p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827]"
            
            >
            About
          </Link>
            
           

          <Link
            href="/services"
            className="cursor-pointer  p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827]"
            >
            Services
          </Link>
           

          <Link
            href="/#Testimonials"
            className="cursor-pointer  p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827]"
            >
            Testimonials
          </Link>
            
          <Link
            href="#ContactUs"
            className="cursor-pointer  p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 text-[#111827]"
            >
            ContactUs
          </Link>
        </div>
        {/* login register button */}{" "}
        <div className="flex justify-between w-full pt-5 text-center space-x-2">
          {" "}
          
          
          <Link
            href="/register"
            className=" w-full cursor-pointer bg-[#1F2937] p-2 rounded-xl text-white transition-all ease-in-out duration-500 "
          >
            Register
          </Link>
        </div>
      </section>
     
    </motion.header>
  );
};

export default Navbar;
