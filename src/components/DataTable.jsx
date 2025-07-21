import React, { useEffect, useState } from "react";
import {FaSort} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";
import {RiDeleteBin6Line} from "react-icons/ri"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MdDeleteOutline } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdDelete } from "react-icons/md";
import { deleteCandidate } from "../../utils/deleteCandidate";
import { deleteAgency } from "../../utils/deleteAgency";
import { revalidatePath } from "next/cache";
import { IoEyeOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaFilter } from "react-icons/fa";

function DataTable({ candidate, setCandidate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [displayedCandidates, setDisplayedCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState(null);
  const [isOpen ,setIsOpen]=useState()
  const [entriesPerPage,setEntriesPerPage]=useState()
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let sortedCandidates = [...candidate];
    if (sortOption === "newestFirst") {
      sortedCandidates.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOption === "oldestFirst") {
      sortedCandidates.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortOption === "aToZ") {
      sortedCandidates.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortOption === "zToA") {
      sortedCandidates.sort((a, b) => b.firstName.localeCompare(a.firstName));
    }
    const filteredCandidates = sortedCandidates.filter((c) =>
      Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setDisplayedCandidates(filteredCandidates.slice(startIndex, endIndex));
  }, [candidate, currentPage, itemsPerPage, searchQuery, sortOption]);

  const totalPages = Math.ceil(candidate.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleDeleteCandidate = async (candidateId) => {
    const result = await deleteCandidate(candidateId);
    if (result.success) {
      console.log(result.message);
      await fetchCandidate(); // Fetch candidates after successful deletion
    } else {
      console.error(result.message);
    }
  };
  
  const fetchCandidate = async () => {
    try {
      const response = await fetch("/api/getAllCandidate");
      const data = await response.json();

      if (response.ok) {
        setCandidate(data);
      } else {
        console.error("Failed to load candidates");
      }
    } catch (error) {
      console.error("An error occurred while fetching candidates:", error.message);
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSort = (option) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to first page when sorting
  };

  return (
    <div className="w-screen md:w-fit p-6 overflow-scroll bg-white md:max-w-[80vh] lg:max-w-[150vh] lg:w-screen">
      {/* // search-bar and no.of entries  */}
      <div className="w-full flex justify-between px-3 pb-3">
        {/* // select no of entries  */}
     

        {/* // search bar */}
        <div className=" flex h-10 w-[25%] items-center justify-start  rounded-sm bg-gray-100">
          
          <input
            type="text"
            placeholder="Search"
            className=" p-2 outline-none bg-gray-100  w-[90%] "
            onChange={handleSearch}
          />
<CiSearch className="h-6 w-6 mr-4"/>

        </div>
        <div className="relative inline-block text-left">
  {/* <div>
    <button
      onClick={toggleDropdown}
      type="button"
      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      id="options-menu"
      aria-expanded="true"
      aria-haspopup="true"
    >
      Sort by <FaSort className="ml-2" />
    </button>
  </div> */}

  {/* Dropdown menu */}
  {/* {isOpen && ( */}
    {/* <div
      className="origin-top-right z-30 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div className="py-1" role="none">
        <button
          onClick={() => handleSort("newestFirst")}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
          role="menuitem"
        >
          Newest first
        </button>
        <button
          onClick={() => handleSort("oldestFirst")}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
          role="menuitem"
        >
          Oldest first
        </button>
        
      </div>
    </div> */}
  {/* )} */}


<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <FaFilter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortOption} onValueChange={setSortOption}>
          <DropdownMenuRadioItem value="newestFirst">newestFirst</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="oldestFirst">oldestFirst</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="aToZ">aToZ</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="zToA">zToA</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
</div>
      </div>
      <div className="overflow-x-auto">

      <Table className="w-full  border-collapse border border-gray-200">
        <TableCaption className="text-center text-gray-600 py-2"></TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className=" px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              sNo.
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Name
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Mobile No.
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              State / City
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Job Preference
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Resume
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white text-center">
          {displayedCandidates &&
            displayedCandidates.map((candidateData, i) => (
              <TableRow key={candidateData._id} className="hover:bg-gray-100">
                <TableCell className="px-4 py-2 text-sm">{i + 1}</TableCell>
                <TableCell className="px-4  py-2 text-sm">
                  {candidateData.firstName} {candidateData.lastName}
                </TableCell>
                <TableCell className="px-4 py-2 text-sm">
                  <a
                    href={`tel:${candidateData.mobileNumber}`}
                    className="text-blue-500 hover:underline"
                  >
                    {candidateData.mobileNumber}
                  </a>
                </TableCell>
                <TableCell className="px-4 py-2 text-sm justify-center text-center items-center">
                  {candidateData.state},{candidateData.city}
                </TableCell>
                <TableCell className="px-4 py-2 text-center text-sm ">
                  {candidateData?.jobType}
                </TableCell>
                <TableCell className="px-4 py-2 text-sm">
                  <a
                    href={candidateData.resumeUrl}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View
                  </a>
                </TableCell>
                <TableCell className="px-4 py-2">
                  <div className="flex  gap-1">
                  <AlertDialog>
                      <AlertDialogTrigger asChild className="items-center">
                        <Button variant="link">
                          {/* <FaExternalLinkSquareAlt className="mr-1 text-lg" /> */}
                          {/* <FaCircleInfo className="text-xl mr-3"/> */}
                          <IoEyeOutline  className="text-xl mr-3 text-black"/>

                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <div className="flex flex-col justify-center p-6 sm:px-12">
                          <div className="space-y-4 text-center divide-y">
                            <div className="my-2 space-y-1">
                              <h2 className="text-xl font-semibold sm:text-2xl">
                                {candidateData.firstName}{" "}
                                {candidateData.lastName}
                              </h2>
                            </div>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                              {/* Additional Details */}
                              <div className="flex flex-col space-y-2">
                                <div>
                                  <p className="font-semibold">Education:</p>
                                  <p>{candidateData.education}</p>
                                </div>
                                <div>
                                  <p className="font-semibold">
                                    Mobile Number:
                                  </p>
                                  <a
                                    href={`tel:${candidateData.mobileNumber}`}
                                    className="text-blue-500 hover:underline"
                                    >
                                    {" "}
                                    {candidateData.mobileNumber}
                                  </a>
                                </div>
                                <div>
                                  <p className="font-semibold">Email:</p>
                                  <a
                                    href={`mailto:${candidateData.userid?.email}`}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    >
                                    {" "}
                                    {candidateData.userid?.email}
                                  </a>
                                </div>
                                {candidateData.panNumber && (
                                  <div>
                                    <p className="font-semibold">PAN:</p>
                                    <p>{candidateData.panNumber}</p>
                                  </div>
                                )}
                                {candidateData.aadharNumber && (
                                  <div>
                                    <p className="font-semibold">Aadhar:</p>
                                    <p>{candidateData.aadharNumber}</p>
                                  </div>
                                )}
                                <div>
                                  <p className="font-semibold">Resume URL:</p>
                                  <a
                                    href={candidateData.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                  >
                                    View Resume
                                  </a>
                                </div>
                                {candidateData.isExperience && (
                                  <div>
                                    <p>
                                      Current CTC: ₹{candidateData.currentCtc}
                                    </p>
                                  </div>
                                )}
                                <div>
                                  <p>Job Preference: {candidateData.jobType}</p>
                                </div>
                                <div>
                                  <p className="font-semibold">Location:</p>
                                  <p>State: {candidateData.state}</p>
                                  <p>City: {candidateData.city}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AlertDialogFooter>
                          <AlertDialogCancel> Close</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant=" " className={''} color="error">
                          {/* <MdDelete className="mr-1 text-lg" />
                          Delete */}
                           {/* <MdDeleteOutline className="text-2xl"/> */}
                           <RiDeleteBin6Line className="text-lg"/>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete {candidateData.firstName} {candidateData.lastName} Candidate
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your Candidate Profile and remove your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteCandidate(candidateData._id)}
                            >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                

                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
        </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="ml-2 px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTable;
