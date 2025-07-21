// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { Header } from "../components/landingPage";

// // const Register = () => {
// //   const [error, setError] = useState("");
// //   const [role, setRole] = useState("");
// //   const router = useRouter();
// //   const { data: session, status: sessionStatus } = useSession();
// //   const [organizationName, setOrganizationName] = useState(""); // Add state for organization name
// //   console.log(role);
// //   useEffect(() => {
// //     if (sessionStatus === "authenticated") {
// //       router.replace("/dashboard");
// //     }
// //   }, [sessionStatus, router]);

// //   const isValidEmail = (email) => {
// //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// //     return emailRegex.test(email);
// //   };
// //   const handleRoleChange = (e) => {
// //     setRole(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const email = e.target[0].value;
// //     const password = e.target[1].value;

// //     if (!isValidEmail(email)) {
// //       setError("Email is invalid");
// //       return;
// //     }

// //     if (!password || password.length < 8) {
// //       setError("Password is invalid");
// //       return;
// //     }

// //     try {
// //       console.log(organizationName);
// //       const res = await fetch("/api/register", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           email,
// //           password,
// //           role,
// //           organisationName:organizationName,
// //         }),
// //       });
// //       if (res.status === 400) {
// //         setError("This email is already registered");
// //       }
// //       if (res.status === 200) {
// //         setError("");
// //         router.push("/login");
// //       }
// //     } catch (error) {
// //       setError("Error, try again");
// //       console.log(error);
// //     }
// //   };

// //   const handleOrganizationChange = (e) => {
// //     setOrganizationName(e.target.value);
// //   };

// //   if (sessionStatus === "loading") {
// //     return <h1>Loading...</h1>;
// //   }

// //   return (
// //     sessionStatus !== "authenticated" && (
// //       <div className="flex min-h-screen items-center justify-center bg-blue-100">
// //         <div className="bg-white p-8 rounded shadow-md w-96">
// //           <h1 className="text-4xl text-center font-semibold text-gray-800 mb-8">
// //             Register
// //           </h1>
// //           <form onSubmit={handleSubmit}>
// //             <input
// //               type="text"
// //               className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
// //               placeholder="Email"
// //               required
// //             />
// //             <input
// //               type="password"
// //               className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
// //               placeholder="Password"
// //               required
// //             />
// //             <label htmlFor="role" className="text-gray-800 mb-2">
// //               Role
// //             </label>
// //             <select
// //               id="role"
// //               name="role"
// //               className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
// //               value={role}
// //               onChange={handleRoleChange}
// //               required
// //             >
// //               <option value="">Select Role</option>
// //               <option value="Recruiter">Recruiter</option>
// //               <option value="JobSeeker">JobSeeker</option>
// //             </select>
// //             {role === "Recruiter" && ( // Conditionally render organization name input
// //               <>
// //                 <input
// //                   type="text"
// //                   id="organizationName"
// //                   name="organizationName"
// //                   className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
// //                   placeholder="Organization Name"
// //                   value={organizationName}
// //                   onChange={handleOrganizationChange}
// //                   required
// //                 />
// //               </>
// //             )}

// //             <button
// //               type="submit"
// //               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
// //             >
// //               Register
// //             </button>
// //             <p className="text-red-600 text-sm mt-2">{error && error}</p>
// //           </form>
// //           <div className="text-center text-gray-500 mt-4">- OR -</div>
// //           <Link
// //             className="block text-center text-blue-500 hover:underline mt-2"
// //             href="/login"
// //           >
// //             Login with an existing account
// //           </Link>
// //         </div>
// //       </div>
// //     )
// //   );
// // };
// // RegistrationPage.js
// // RegistrationPage.js
// import React, { useEffect, useState } from "react";
// import RegistrationForm from "./RegistrationForm";

// const RegistrationPage = () => {
//   const [selectedRole, setSelectedRole] = useState("jobSeeker");
//   const router = useRouter();
//   const { data: session, status: sessionStatus } = useSession();
//   const handleRoleChange = (role) => {
//     setSelectedRole(role);
//   };
//   useEffect(() => {
//     if (sessionStatus === "authenticated") {
//       router.replace("/dashboard");
//     }
//   }, [sessionStatus, router]);

//   if (sessionStatus === "loading") {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     sessionStatus !== "authenticated" && (
//       <div>
//         <Header />
//         <div className="bg-gray-900 py-24">
//           <div className="max-w-3xl mx-auto  p-6 bg-gray-800 rounded-md shadow-md">
//             <h2 className="text-4xl font-semibold mb-4 text-center text-gray-400">
//               Registration As
//             </h2>

//             <div className="mb-4">
//               <div className=" flex justify-between mx-10 py-5">
//                 <button
//                   onClick={() => handleRoleChange("jobSeeker")}
//                   className={`font-semibold transition ease-in-out duration-300 p-4 rounded-full hover:bg-gray-900 hover:text-gray-100 ${
//                     selectedRole == "jobSeeker"
//                       ? "bg-gray-900 text-gray-100"
//                       : "text-gray-400 bg-gray-800"
//                   } `}
//                 >
//                   Job Seeker
//                 </button>
//                 <button
//                   onClick={() => handleRoleChange("recruiter")}
//                   className={`font-semibold transition ease-in-out duration-300 p-4 rounded-full hover:bg-gray-900 hover:text-gray-100 ${
//                     selectedRole == "recruiter"
//                       ? "bg-gray-900 text-gray-100"
//                       : "text-gray-200 bg-gray-800"
//                   } `}
//                 >
//                   Recruiter
//                 </button>
//               </div>
//               {/* <select
//             id="role"
//             onChange={(e) => setSelectedRole(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           >
//             <option value="jobSeeker">JobSeeker</option>
//             <option value="recruiter">Recruiter</option>
//           </select> */}
//             </div>

//             <RegistrationForm role={selectedRole} />
//             <h1 className="text-center text-gray-400 pt-6">
//               Already an user?{" "}
//             </h1>
//             <Link
//               className="block text-center text-blue-500 hover:underline mt-5"
//               href="/login"
//             >
//               Login with an existing account
//             </Link>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default RegistrationPage;
// // export default Register;

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page