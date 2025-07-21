"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SignUp = () => {
  const [pageNo, setpageNo] = useState(1);
  const [isExperience, setIsExperience] = useState(false); // State for the switch
  const [governmentIdType, setGovernmentIdType] = useState(""); // New state for government ID type
  console.log(governmentIdType);
  const handleSwitchChange = (event) => {
    if (!isExperience) {
      setIsExperience(true);
      return;
    } else {
      setIsExperience(false);
      return;
    }
  };
  const handleGovernmentIdChange = (value) => {
    setGovernmentIdType(value);
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img alt="Logo Here" src="" className="w-32 mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center justify-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                {pageNo == 1 && (
                  <div>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="firstName"
                      placeholder="First Name"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="lastName"
                      placeholder="Last Name"
                    />{" "}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="Email"
                    />{" "}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="phone"
                      placeholder="Mobile No."
                    />
                  </div>
                )}
                {pageNo == 2 && (
                  <div>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="education"
                      placeholder="Highest Education"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="state"
                      placeholder="State"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="city"
                      placeholder="City"
                    />

                    <div className="py-4">
                      <Select
                        className=""
                        onValueChange={handleGovernmentIdChange}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Goverment Id" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Goverment Id</SelectLabel>
                            <SelectItem value="adhar">Adhar</SelectItem>
                            <SelectItem value="pan">Pan</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    {governmentIdType === "adhar" && (
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Enter Adhar Number"
                      />
                    )}
                    {governmentIdType === "pan" && (
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Enter Pan Number"
                      />
                    )}

                    <div className="flex items-center mt-4 gap-4">
                      <Label htmlFor="isExperience">Experienced?</Label>
                      <Switch onCheckedChange={handleSwitchChange} />{" "}
                    </div>
                    {isExperience && (
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="number"
                        placeholder="Experience In Years"
                      />
                    )}
                  </div>
                )}
                <button
                  onClick={
                    pageNo == 1
                      ? () => setpageNo(pageNo + 1)
                      : () => console.log("doon")
                  }
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <ChevronRightIcon />
                  <span className="ml-3">
                    {pageNo == 1 ? "Next" : "SignUp"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
