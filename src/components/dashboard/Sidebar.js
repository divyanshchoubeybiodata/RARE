"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { BsBuildingFillGear } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { MdShoppingBag } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ImSwitch } from "react-icons/im";

const Sidebar = ({ role, setIsSidebarOpen, isSidebarOpen }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const pathname = usePathname();
  const handleSignOut = () => {
    signOut();
    router.push("/login");
  };
  console.log(session?.role);
  console.log(isSidebarOpen);
  return (
    <aside
      className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-96 md:translate-x-0"
        } fixed top-0 z-50  justify-between w-64 h-screen px-5 py-8 pt-3 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700`}
    >


      {isSidebarOpen && (
        <Button
          className="lg:hidden absolute top-3 left-3"
          variant="outline"
          size="icon"
          onClick={() => setIsSidebarOpen(false)}
        >
          <RxCross1 className="h-4 w-4" />
        </Button>
      )}
      <div className="h-fit flex items-center justify-center border-b-2 bg-opacity-30 mb-2 pb-4">


        <div className="flex flex-col">
          <Link href={"/"}>
            <img
              className="h-24 w-36 mx-auto"
              src="/rareNewLogoDark.png"
              alt="rare logo"
            />
          </Link>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white p-2 pl-4">
            {role === "admin"
              ? "Admin"
              : role === "superadmin"
                ? "Super Admin"
                : null}{" "}
            Panel
          </h2>
        </div>
      </div>
      <ul className={''}>
        {/* <Link href="/">
          <li
          className={`flex items-center p-6 space-x-4 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
            pathname.includes("/home") ? " bg-[#e9e9e9]" : null
          }`}
          >
          <GoHomeFill className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-medium">Home</span>
          </li>
        </Link> */}
        {session?.role == "superadmin" && (
          <Link href="/dashboard/candidateManagement">
            <li
              className={`flex items-center space-x-4 p-6 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname.includes("/candidateManagement")
                  ? " bg-[#e9e9e9]"
                  : null
                }`}
            >
              <BsFillPeopleFill className="h-5 w-5 text-gray-500 " />
              <span className="text-sm font-medium"> Candidate Management</span>
            </li>
          </Link>
        )}
        {session?.role == "superadmin" && (
          <Link href="/dashboard/agencyManagement">
            <li
              className={`flex items-center space-x-4 p-6 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname.includes("/agencyManagement") ? " bg-[#e9e9e9]" : null
                }`}
            >
              <BsBuildingFillGear className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Agency Management</span>
            </li>
          </Link>
        )}
        {session?.role == "superadmin" && (
          <Link href="/dashboard/jobsManagement">
            <li
              className={`flex space-x-4 items-center p-6 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname.includes("/jobsManagement") ? " bg-[#e9e9e9]" : null
                }`}
            >
              <MdShoppingBag className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Jobs Management</span>
            </li>
          </Link>
        )}

        {session?.role == "admin" && (
          <Link href="/dashboard/candidateManagement">
            <li
              className={`flex space-x-4 items-center p-6 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname.includes("/candidateManagement")
                  ? " bg-[#e9e9e9]"
                  : null
                }`}
            >
              <BsFillPeopleFill className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium"> Candidate Management</span>
            </li>
          </Link>
        )}
        {session?.role == "admin" && (
          <Link href="/dashboard/agencyManagement">
            <li
              className={`flex space-x-4 items-center p-6 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname.includes("/agencyManagement") ? " bg-[#e9e9e9]" : null
                }`}
            >
              <BsBuildingFillGear className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Agency Management</span>
            </li>
          </Link>
        )}
        {session?.role == "admin" && (
          <Link href="/dashboard/jobsManagement">
            <li
              className={`flex space-x-4 items-center p-6 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname.includes("/jobsManagement") ? " bg-[#e9e9e9]" : null
                }`}
            >
              <MdShoppingBag className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Jobs Management</span>
            </li>
          </Link>
        )}
        {session?.role == "superadmin" && (
          <Link href="/dashboard/adminManagement">
            <li
              className={`flex space-x-4 items-center p-6 py-3 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname.includes("/adminManagement") ? " bg-[#e9e9e9]" : null
                }`}
            >
              <RiAdminFill className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Admin Management</span>
            </li>
          </Link>
        )}
        <li className="items-center justify-center">

         <button
            className=" text-center justify-center items-center w-[85%] bg-[#1f2937] text-white absolute bottom-0 rounded-lg p-6 py-3 my-2 space-x-4 hover:bg-red-500 hover:text-white"
            onClick={handleSignOut}
            >
            Log Out
          </button>
            </li>

      </ul>

       

      


    </aside>
  );
};

export default Sidebar;
