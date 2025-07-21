'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { FaWhatsappSquare } from "react-icons/fa";


const Header = () => {
  const pathname = usePathname();
  const hamMenuRef = useRef(null);

  const [hamIsOpen, setHamIsOpen] = useState(false);

  const toggleHamIsOpen = () => {
    setHamIsOpen(!hamIsOpen); // Toggle the value
  };

  const closeHamMenu = () => {
    setHamIsOpen(false);
  };

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (hamMenuRef.current && !hamMenuRef.current.contains(event.target)) {
  //       setHamIsOpen(false);
  //     }
  //   };shadow-sm

  //   const handleTouchStart = (event) => {
  //     if (hamMenuRef.current && !hamMenuRef.current.contains(event.target)) {
  //       setHamIsOpen(false);
  //     }
  //   };

  //   // Attach the event listeners to the document
  //   document.addEventListener("click", handleOutsideClick, true);
  //   document.addEventListener("touchstart", handleTouchStart, true);

  //   // Cleanup the event listeners on component unmount
  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick, true);
  //     document.removeEventListener("touchstart", handleTouchStart, true);
  //   };
  // }, []);


  return (
    <motion.header
      id="hamMenu"
      ref={hamMenuRef}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${(pathname.includes("/dashboard") || pathname.includes("/register") || pathname.includes("/login")) ? "hidden" : "block"}`}
    >
      <div className="justify-end hidden lg:flex px-14  top-0 w-full bg-[#fafbff] h-14   items-center z-50 fixed">
        <div className="hidden lg:block md:block">
          <div className="flex space-x-5 text-[#111827]">
            <div
              onClick={closeHamMenu} // Close the menu when this link is clicked
              className="cursor-pointer  flex items-center justify-center   p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500  overflow-clip relative group"
            >
              <div className="absolute flex rotate-12 group-hover:translate-y-0 group-hover:rotate-0 translate-y-20 transition-all ease-in-out duration-500 ">
                <FaPhoneAlt className="mr-2 mt-1" /> <div> <a href="tel:+918962531280">{"+918962531280"}</a> {" "}</div>
              </div>
              <div className=" flex group-hover:-translate-y-20 group-hover:-rotate-12 transition-all ease-in-out duration-500 ">
                <FaPhoneAlt className="mr-2 mt-1" /> <div><a href="tel:+918962531280">{"+918962531280"}</a></div>
              </div>
            </div>
            <div className="transform skew-y-12 rotate-12 overflow-hidden bg-[#111827] h-20 w-[1px] "></div>
            <div
              onClick={closeHamMenu} // Close the menu when this link is clicked
              className="cursor-pointer flex items-center justify-center  p-2 rounded-full hover:text-blue-500 transition-all ease-in-out duration-500 overflow-clip relative group"
            >
              <div className="absolute flex  rotate-12 group-hover:translate-y-0 group-hover:rotate-0 translate-y-20 transition-all ease-in-out duration-500 ">
                <MdEmail className="mr-2 mt-1"/><div> <a href="mailto:info@rareprofessions.com">info@rareprofessions.com</a> {" "}</div>
              </div>
              <div className=" flex group-hover:-translate-y-20 group-hover:-rotate-12 transition-all ease-in-out duration-500 ">
                <MdEmail className="mr-2 mt-1"/><div> <a href="mailto:info@rareprofessions.com">info@rareprofessions.com</a> </div>
              </div>
            </div>
            <div className="transform skew-y-12 rotate-12 overflow-hidden bg-[#111827] h-20 w-[1px]"></div>
            <div className="  flex items-center justify-center">
              <p className="mr-2">Follow</p>
              <Link href={"https://wa.me/+918962531280"} target="_blank">
                <img className="h-8 w-8 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="whatsapp-logo" />
              </Link>
              <Link href={"https://www.instagram.com/rare.consultants?igsh=MXBnNWJiYjBjM2J6Nw=="} target="_blank">
                <img className="h-7 w-7" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="instagram-logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

