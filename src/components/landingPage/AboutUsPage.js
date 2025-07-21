import React from 'react'
import { GiBullseye } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";

function AboutUsPage() {
  return (
    <div className='flex flex-col '>
        <div style={{
        width: '100vw',
        height: '70vh',
        backgroundImage: 'url("/about.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} 
      className='mt-20 md:mt-32  flex items-end md:items-center'
    >
       <div className='bg-opacity-10 backdrop-blur-sm flex flex-col items-start justify-end md:justify-center  h-[30%] md:h-full w-full md:w-[40%] bg-black pb-4 md:pb-0 pl-4 md:pl-32'>
       <h1 className='font-mono text-white text-4xl md:text-5xl font-bold'>About Us</h1>
        <div className='h-[1px] my-3  w-40 md:w-48 bg-slate-300'></div>
        <p className=' text-white text-lg md:text-xl font-light'>Founded in 2023, India</p>
       </div>
    </div> 

    <div className='h-fit w-full py-12 lg:py-28 bg-white flex flex-col px-8 md:px-20 items-center justify-center'>
        <h2 className='font-semibold text-4xl mb-8'>Our mission is clear</h2>
        <p className='text-xl'>We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage. We are shaping the future. Together.</p>
        <div className="w-screen h-auto  flex justify-center items-center">
            <div className="container mx-auto py-9 items-center justify-center">
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="p-8 space-y-3 bg-gray-100 w-full md:w-[37vw] lg:w-[26vw] rounded-xl">
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

                <div className="p-8 space-y-3 bg-gray-100 w-full md:w-[37vw] lg:w-[26vw] rounded-xl">
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

                <div className="p-8 space-y-3 bg-gray-100 w-full md:w-[37vw] lg:w-[26vw] rounded-xl">
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
    </div>
    </div>
  )
}

export default AboutUsPage