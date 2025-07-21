"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import PasswordChecklist from "react-password-checklist";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { UploadButton } from "@uploadthing/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [pageNo, setpageNo] = useState(1);
  const [isExperience, setIsExperience] = useState(false); // State for the switch
  const [governmentIdType, setGovernmentIdType] = useState(""); // New state for government ID type
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [experience, setExperience] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [error, setError] = useState(null);
  const [stateid, setstateid] = useState(0);
  const [capcha, setCapcha] = useState(null);
  const [jobType, setJobType] = useState("");
  const [phoneError, setphoneError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [aadharError, setaadharError] = useState(false);
  const [panError,setPanError]=useState(false)
  const role = "candidate";
  const router = useRouter();
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
  const validateAadhar = (aadhar) => {
    const re =  /^(?:\d{4}-\d{4}-\d{4}|\d{4} \d{4} \d{4})$/;
    const isValid = re.test(String(aadhar).trim());
    if (!isValid) {
      setaadharError(true);
    }else{
      setaadharError(false)
    }
    return isValid;
  };

  const validatePan = (pan) => {
    const re =  /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    const isValid = re.test(String(pan).trim());
    if (!isValid) {
      setPanError(true);
    }else{
      setPanError(false)
    }
    return isValid;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid =re.test(String(email).toLowerCase());
    if(!isValid){
      setemailError(true)
    }else{
      setemailError(false)
    }
    return isValid;
  };
  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    const isValid = re.test(String(phoneNumber).trim());
    if (!isValid) {
    setphoneError(true);
  }else{
    setphoneError(false)
  }
    console.log("is val", isValid);
    return isValid;
  };

  const handleNext = () => {
  const isValid =  validatePhoneNumber(phone);
  validateEmail(email)
    if (isValid === false) {

      alert("Please Enter Valid Phone Number")
    }else if(validateEmail(email) === false){
      alert("Please Enter Valid Email")
    } else {
      setpageNo(2);
    }
  }
  const formatAadharNumber = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    // Add a space after every 4 digits
    const formattedValue = digitsOnly.replace(/(.{4})/g, '$1 ').trim();
    return formattedValue;
  };

  const handleAadharChange = (e) => {
    const formattedValue = formatAadharNumber(e.target.value);
    setAadhar(formattedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation checks
    if(governmentIdType === "adhar" && !validateAadhar(aadhar)) {
      alert("Please Enter Valid Aadhar Number");
    } else if(governmentIdType === "pan" && !validatePan(pan)) {
      alert('Please Enter Valid Pan Number');
    } else if (!firstName) {
      setError("Enter first name.");
    } else if (!lastName) {
      setError("Enter last name");
    } else if (!validateEmail(email)) {
      setError("Enter valid email.");
    } else if (!phone) {
      setError("Enter Phone number.");
    } else if (state === "") {
      setError("Enter state.");
    } else if (city === "") {
      setError("Enter city.");
    } else if (governmentIdType === "") {
      setError("Choose government id type.");
    } else if (governmentIdType === "adhar" && aadhar === "") {
      setError("Enter aadhar number.");
    } else if (governmentIdType === "pan" && pan === "") {
      setError("Enter pan number.");
    } else if (education === "") {
      setError("Select Education");
    } else if (resumeUrl === "") {
      setError("Upload resume");
    } else if (!capcha) {
      setError("Fill Capcha First !");
    } else {
      try {
        const response = await axios.post("/api/register", {
          role: role,
          email: email,
          // password: password,
          // Candidate fields
          firstName: firstName,
          lastName: lastName,
          education: education,
          mobileNumber: "+91" + phone,
          isPan: pan ? true : false,
          panNumber: pan,
          isAadhar: aadhar ? true : false,
          aadharNumber: aadhar,
          resumeUrl: resumeUrl,
          isExperience: isExperience,
          currentCtc: experience,
          state: state,
          city: city,
          jobType: jobType,
        });
        console.log(response.data);
        if (response.status === 201) {
          setpageNo(1);
          setIsExperience(false);
          setGovernmentIdType("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setEducation("");
          setState("");
          setCity("");
          setAadhar("");
          setPan("");
          setExperience("");
          setResumeUrl("");
          setJobType("");
          setError("");
          setphoneError(false);
          setaadharError(false);
          setemailError(false);
          setPanError(false);
          // setPassword("");
        }
        alert("Registered Successfully!");
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 400) {
          setError("Email already exists.");
        } else {
          setError("Something went wrong! Please try again later.");
        }
      }
    }
  };
  
  return (
    <div className="h-fit w-full flex py-32 items-center justify-center ">
      <div className="flex w-full max-w-sm h-fit  mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl ">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
          }}
        ></div>

        <div className="w-full px-6 py-8 pt-4 md:px-8 lg:w-1/2 overflow-y-scroll">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-16 sm:h-20"
              src="/rareNewLogoDark.png"
              alt="rare-logo"
            />
          </div>

          <p className="mt-3 mb-5 text-xl text-center text-gray-600 dark:text-gray-200">
            Register new account
          </p>

       
            {pageNo == 1 && (
              <div>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="firstName"
                  placeholder="First Name"
                  defaultValue={firstName}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="lastName"
                  defaultValue={lastName}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                  value={email}
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                 { emailError && (
                  <p className="text-sm text-red-600 ">
                    Enter Valid Email!
                  </p>
                )}
                <div className="flex">
                  <div className=" px-4 mr-2 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                    +91
                  </div>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Mobile No."
                    defaultValue={phone}
                    value={phone}
                    onChange={(e) => {
                      const inputPhone = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                      setPhone(inputPhone.slice(0, 10)); // Limit to maximum 10 digits\
                    }}
                    required
                  />
                </div>
                { phoneError && (
                  <p className="text-sm text-red-600 ">
                    Phone No is smaller than 10 digits!
                  </p>
                )}
                <div className=" flex gap-5 mt-5">
                  <label htmlFor="showPassword" className="text-xl m-1">
                    Resume:
                  </label>
                  {!resumeUrl && (

                    <UploadButton
                      endpoint="pdfUploader"
                      appearance={{
                        button: {
                          background: "#001f4b",
                        },
                      }}
                      content={{
                        button({ ready }) {
                          if (ready) return <div>Upload File</div>;

                          return "Getting ready...";
                        },
                      }}
                      onClientUploadComplete={(res) => {
                        // Do something with the response
                        setResumeUrl(res[0].url);
                        alert("Upload Completed");
                      }}
                      onUploadError={(error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                    )}
                    {resumeUrl&&(
                      <Link href={resumeUrl} target="_blank" className="text-blue-700 text-xl m-1">Uploaded</Link>
                    )}
                </div>
              </div>
            )}
            {pageNo == 2 && (
              <div>
                <select
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  value={education}
                  defaultValue={education}
                  onChange={(e) => setEducation(e.target.value)}
                  required
                >
                  <option value="">Highest Education</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Under Graduate">Under Graduate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Higher Secondary">Higher Secondary</option>
                  <option value="High School">High School</option>
                </select>

                <select
                  className="w-full px-8 py-4 mt-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  value={jobType}
                  defaultValue={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  required
                >
                  <option value="">Preferred Job Type</option>
                  <option value="Technical">Technical</option>
                  <option value="Non-Technical">Non-Technical</option>
                </select>

                <div className="w-full   rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                  <StateSelect
                    countryid={101}
                    onChange={(e) => {
                      setstateid(e.id);
                      setState(e.name);
                    }}
                    placeHolder="Select State"
                  />
                </div>

                <div className="w-full   rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                  <CitySelect
                    countryid={101}
                    stateid={stateid}
                    onChange={(e) => {
                      setCity(e.name);
                    }}
                    placeHolder="Select City"
                  />
                </div>

                <div className="py-4">
                  <Select
                    className=""
                    onValueChange={handleGovernmentIdChange}
                    value={governmentIdType}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Government Id" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Government Id</SelectLabel>
                        <SelectItem value="adhar">Aadhar</SelectItem>
                        <SelectItem value="pan">Pan</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                
                </div>
                {governmentIdType === "adhar" && (
                    <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Enter Aadhar Number"
                    value={aadhar}
                    onChange={handleAadharChange}
                    required
                  />
              
                )}
                {governmentIdType === "pan" && (
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Enter Pan Number"
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                    required
                  />
                )}
                  { (aadharError || panError) && (
                  <p className="text-sm text-red-600 ">
                    {`Enter Valid ${governmentIdType} Number!`}
                  </p>
                )}

                <div className="flex items-center mt-4 gap-4">
                  <Label htmlFor="isExperience">Experienced?</Label>
                  <Switch
                    defaultChecked={isExperience}
                    onCheckedChange={handleSwitchChange}
                  />
                </div>
                {isExperience && (
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="number"
                    placeholder="Current CTC"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                  />
                )}
              </div>
            )}
            {pageNo == 1 && (
              <div>
                <button
                  disabled={
                    pageNo === 1 &&
                    !(
                      firstName &&
                      lastName &&
                      email &&
                      phone &&
                      resumeUrl 
                    )
                  }
                  onClick={handleNext}
                  className={`bg-gray-800 rounded-lg hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50  w-full my-5 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  flex items-center justify-center`}
                >
                  <ChevronRightIcon />
                  <span className="ml-3">{"Next"}</span>
                </button>
              </div>
            )}
            {pageNo == 2 && (
              <div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY}
                  className="mx-auto py-4"
                  onChange={setCapcha}
                />

                <button
                  // disabled={
                  //   (pageNo === 1 && !(firstName && lastName && email && phone  && resumeUrl)) ||
                  //   (pageNo === 2 && !(education && state && city  && jobType))
                  // }
                  onClick={handleSubmit}
                  className={`bg-gray-800 rounded-lg hover:bg-gray-700 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50  w-full my-5 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  flex items-center justify-center`}
                >
                  <ChevronRightIcon />
                  <span className="ml-3">{"SignUp"}</span>
                </button>

                <button
                  onClick={pageNo == 2 && (() => setpageNo(1))}
                  className="w-full my-5 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 flex items-center justify-center"
                >
                  <ChevronLeftIcon />
                  <span className="ml-3">{pageNo == 2 && "back"}</span>
                </button>
              </div>
            )}
         
          <div>
            <span>{error}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            {/* <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              href="/login"
              className="text-sm text-gray-500 font-extrabold dark:text-gray-400 hover:underline"
            >
              or <span className="text-black">Login </span>
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
