"use client";
import AdminCard from "@/components/dashboard/AdminCard";
import AgencyCard from "@/components/dashboard/AgencyCard";
import CandidateCard from "@/components/dashboard/CandidateCard";
import CandidateUpdateProfile from "@/components/dashboard/CandidateUpdateProfile";
import CreateAdminDialouge from "@/components/dashboard/CreateAdminDialouge";
import CreateAgencyDialoge from "@/components/dashboard/CreateAgencyDialoge";
import CreateJobDialoge from "@/components/dashboard/CreateJobDialoge";
import JobPostCard from "@/components/dashboard/JobPostCard";
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import DataTable from "../../../components/DataTable";
// import DataTableAgency from '@/components/DataTableAgency'
import DataTable from '@/components/DataTable'
import DataTableAgency from "@/components/DataTableAgency";

function filterObjects(arr, fieldsToKeep) {
  return arr.map((obj) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key]) => fieldsToKeep.includes(key))
    )
  );
}

function rearrangeKeys(array, newKeyOrder) {
  return array.map((obj) => {
    const newObj = {};
    newKeyOrder.forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  });
}

export const fetchCache = "force-no-store";

const Dashboard = ({ params }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data: session, status: sessionStatus } = useSession();

  const role = session?.user?.role;

  const [candidate, setCandidate] = useState([]);
  const [jobPost, setJobPost] = useState([]);
  const [error, setError] = useState([]);
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [agency, setAgency] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchCandidate();
    fetchUser();
    fetchAgency();
    fetchJob();
    if (sessionStatus === "unauthenticated") {
      router.replace("/login");
    }
  }, [sessionStatus, router]);

  const fetchAgency = async () => {
    try {
      const response = await fetch("/api/getAllAgency");
      const data = await response.json();
      console.log("agency running");
      if (response.ok) {
        setAgency(data);
      } else {
        setError("Failed to load Agency");
      }
    } catch (error) {
      console.error(error.message);
      setError("An error occurred while fetching Agency");
    }
  };

  const fetchJob = async () => {
    try {
      const response = await fetch("/api/getAllJobPost");
      const data = await response.json();

      if (response.ok) {
        setJobPost(data);
      } else {
        setError("Failed to load jobs");
      }
    } catch (error) {
      console.error(error.message);
      setError("An error occurred while fetching Job POst");
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/getUsers");
      const data = await response.json();
      setUsers(data);
      if (response.ok) {
        const adminUsers = data.filter((user) => user.role === "admin");
        setAdmin(adminUsers);
      } else {
        setError("Failed to load User");
      }
    } catch (error) {
      console.error(error.message);
      setError("An error occurred while fetching Users");
    }
  };

  const fetchCandidate = async () => {
    try {
      const response = await fetch("/api/getAllCandidate");
      const data = await response.json();

      if (response.ok) {
        setCandidate(data);
      } else {
        setError("failed to load candidate");
      }
    } catch (error) {
      console.error(error.message);
      setError("An error occurred while fetching candidates");
    }
  };

  //  const capRole=                {params.slug === "home"? "Home" : (params.slug === "candidateManagement" ? "Candidate Management" : (params.slug === "agencyManagement" ? "Agency Management" : (params.slug === "jobsManagement" ? "Jobs Management" : (params.slug === "adminManagement" ? "Admin Management" : null)))) }

  if (
    session &&
    session.role == "superadmin" &&
    agency &&
    candidate &&
    jobPost &&
    admin
  ) {
    return (
      <div className="bg-gray-100 h-fit overflow-x-clip">
        <div className="relative flex h-fit bg-white dark:bg-gray-900">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            role={role}
          />
          <main className="flex-1 p-6  lg:pl-[275px] pl-0 ">
            <div className="flex justify-between flex-col lg:flex-row ">
              <div className="flex">
                {!isSidebarOpen && (
                  <Button
                    className="lg:hidden absolute z-30 top-4 left-2"
                    variant="outline"
                    size="icon"
                    onClick={() => setIsSidebarOpen(true)}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </Button>
                )}
                <h1 className="text-3xl absolute lg:pl-20 top-0 lg:left-[190px] w-screen py-5 bg-gray-800 text-white pl-16 lg-ml-0 font-semibold dark:text-white ">
                  {params.slug === "home"
                    ? "Home"
                    : params.slug === "candidateManagement"
                    ? "Candidate Management"
                    : params.slug === "agencyManagement"
                    ? "Agency Management"
                    : params.slug === "jobsManagement"
                    ? "Jobs Management"
                    : params.slug === "adminManagement"
                    ? "Admin Management"
                    : null}
                </h1>
              </div>
              <div className=" flex  justify-center items-center">
                {params.slug == "jobsManagement" && (
                  <CreateJobDialoge
                    key={agency._id}
                    agencyData={agency}
                    setJobPost={setJobPost}
                  />
                )}
                {params.slug == "agencyManagement" && (
                  <CreateAgencyDialoge setAgency={setAgency} />
                )}
                {params.slug == "adminManagement" && (
                  <CreateAdminDialouge
                    setAdmin={setAdmin}
                    setUsers={setUsers}
                  />
                )}
              </div>
            </div>
            {/* <div className="mt-6 flex">
            {params.slug == "home" && <CandidateUpdateProfile />}
          </div> */}
            {params.slug != "home" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {params.slug == "jobsManagement" &&
                  jobPost.map((jobData) => (
                    <JobPostCard
                      key={jobData._id}
                      jobData={jobData}
                      setJobPost={setJobPost}
                    />
                  ))}

                {params.slug == "agencyManagement" &&
                  <DataTableAgency agency={agency} setAgency={setAgency}/>
                  }
                {console.log(candidate)}
                {params.slug == "candidateManagement" && (
                  <div className="mt-20 w-fit ">
                    {candidate.length > 0 && (
                   <DataTable candidate={candidate} setCandidate={setCandidate}/>
                    )}

                    {/* {candidate.map((candidateData) => (
                      <CandidateCard
                        className=""
                        key={candidateData._id}
                        CandidateData={candidateData}
                        setCandidate={setCandidate}
                      />
                    ))} */}
                  </div>
                )}
                {params.slug == "adminManagement" &&
                  admin.map((adminData) => (
                    <AdminCard
                      key={adminData._id}
                      adminData={adminData}
                      setAdmin={setAdmin}
                      setUsers={setUsers}
                    />
                  ))}
              </div>
            )}
          </main>
        </div>
      </div>
    );
  } else if (
    session &&
    session.role == "admin" &&
    agency &&
    candidate &&
    jobPost &&
    admin
  ) {
    return (
      <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 overflow-x-clip">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          role={role}
        />
        <main className="flex-1 p-6 lg:pl-64 pl-0 ">
          <div className="flex justify-between flex-col lg:flex-row ">
            <div className="flex">
              {!isSidebarOpen && (
                <Button
                  className="lg:hidden absolute z-30 top-4 left-2"
                  variant="outline"
                  size="icon"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </Button>
              )}
              <h1 className="text-3xl absolute lg:pl-20 top-0 lg:left-[190px] w-screen py-5 bg-gray-800 text-white pl-16 lg-ml-0 font-semibold dark:text-white ">
                {params.slug === "home"
                  ? "Home"
                  : params.slug === "candidateManagement"
                  ? "Candidate Management"
                  : params.slug === "agencyManagement"
                  ? "Agency Management"
                  : params.slug === "jobsManagement"
                  ? "Jobs Management"
                  : params.slug === "adminManagement"
                  ? "Admin Management"
                  : null}
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              {params.slug == "jobsManagement" && (
                <CreateJobDialoge
                  key={agency._id}
                  agencyData={agency}
                  setJobPost={setJobPost}
                />
              )}
              {params.slug == "agencyManagement" && (
                <CreateAgencyDialoge setAgency={setAgency} />
              )}
            </div>
          </div>
          {/* <div className="mt-6 flex">
            {params.slug == "home" && <CandidateUpdateProfile />}
          </div> */}
          {params.slug != "home" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 mt-6">
              {params.slug == "jobsManagement" &&
                jobPost.map((jobData) => (
                  <JobPostCard
                    key={jobData._id}
                    jobData={jobData}
                    setJobPost={setJobPost}
                  />
                ))}

              {params.slug == "agencyManagement" &&
                agency.map((agencyData) => (
                  <AgencyCard
                    key={agencyData._id}
                    agencyData={agencyData}
                    setAgency={setAgency}
                  />
                ))}
              {params.slug == "candidateManagement" &&
                candidate.map((candidateData) => (
                  <CandidateCard
                    key={candidateData._id}
                    CandidateData={candidateData}
                    setCandidate={setCandidate}
                  />
                ))}
            </div>
          )}
        </main>
      </div>
    );
  } else if (session && session.role == "agency") {
    return (
      <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 overflow-x-clip">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          role={role}
        />
        <main className="flex-1 p-6 lg:pl-64 pl-0 ">
          <div className="flex justify-between flex-col lg:flex-row ">
            <div className="flex">
              {!isSidebarOpen && (
                <Button
                  className="lg:hidden absolute z-30 top-4 left-2"
                  variant="outline"
                  size="icon"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </Button>
              )}
              <h1 className="text-3xl absolute lg:pl-20 top-0 lg:left-[190px] w-screen py-5 bg-gray-800 text-white pl-16 lg-ml-0 font-semibold dark:text-white uppercase">
                {role} Dashboard
              </h1>
            </div>
          </div>
          <div className="mt-24 m-5 flex">
            {/* {params.slug == "home" && <CandidateUpdateProfile />} */} Your
            Agency Have Been Registered Successfully Please Wait For Admin To
            contact on email...
          </div>
        </main>
      </div>
    );
  } else if (session && session.role == "candidate") {
    return (
      <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 overflow-x-clip">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          role={role}
        />
        <main className="flex-1 p-6 lg:pl-64 pl-0 ">
          <div className="flex justify-between flex-col lg:flex-row ">
            <div className="flex">
              {!isSidebarOpen && (
                <Button
                  className="lg:hidden absolute z-30 top-4 left-2"
                  variant="outline"
                  size="icon"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </Button>
              )}
              <h1 className="text-3xl absolute lg:pl-20 top-0 lg:left-[190px] w-screen py-5 bg-gray-800 text-white pl-16 lg-ml-0 font-semibold dark:text-white uppercase">
                {role} Dashboard
              </h1>
            </div>
          </div>
          <div className="mt-24 m-5 flex">
            {/* {params.slug == "home" && <CandidateUpdateProfile />} */} Your
            Profile has been Successfully created our team will contact you
            soon...
          </div>
        </main>
      </div>
    );
  } else {
    return <h1 className="mt-24 items-center justify-center">Loading...</h1>;
  }
};

export default Dashboard;
