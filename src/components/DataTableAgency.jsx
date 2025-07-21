import React, { useEffect, useState } from "react";
import {FaSort} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";
import {IoEyeOutline} from "react-icons/io";
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

function DataTableAgency({ agency, setAgency }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [displayedAgencies, setDisplayedAgencies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredAgency = agency.filter((c) =>
      Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setDisplayedAgencies(filteredAgency.slice(startIndex, endIndex));
  }, [agency, currentPage, itemsPerPage, searchQuery]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedAgencies(agency.slice(startIndex, endIndex));
  }, [agency, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(agency.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const fetchAgencies = async () => {
    try {
      const response = await fetch("/api/getAllAgency");
      const data = await response.json();

      if (response.ok) {
        // Update the agency state in the parent component
        // You can dispatch an action or call a function to update the state
        // For example, if you have a setAgency function in the parent component
        // You can call setAgency(data) here
        setAgency(data);
      } else {
        console.error("Failed to load Agency");
      }
    } catch (error) {
      console.error(error.message);
      console.error("An error occurred while fetching Agency");
    }
  };


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="overflow-x-scroll w-96 md:w-fit md:max-w-[80vh] text-center justify-center lg:w-screen lg:max-w-[150vh]">
        <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="border border-gray-300 px-3 py-2 rounded-md mb-4"
      />
      <Table className="w-full border-collapse border border-gray-200">
        <TableCaption className="text-center text-gray-600 py-2"></TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-1/6 px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              sNo.
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Agency Name
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Name/Designation
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Email
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Contact No.
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Location
            </TableHead>
            <TableHead className="px-4 py-2 text-center font-semibold text-sm text-gray-800 uppercase">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {displayedAgencies &&
            displayedAgencies.map((candidateData, i) => (
              <TableRow key={candidateData._id} className="hover:bg-gray-100">
                <TableCell className="px-4 py-2 text-sm">{i + 1}</TableCell>
                <TableCell className="px-4  py-2 text-sm">
                  {candidateData.agencyName}
                </TableCell>
                <TableCell className="px-4 py-2 text-sm">
                  {candidateData.contactPersonName} /{" "}
                  {candidateData.designation}
                </TableCell>
                <TableCell className="px-4 py-2 text-sm ">
                  <a
                    href={`mailto:${candidateData.contactPersonEmail}`}
                    className="text-blue-500 hover:underline"
                    target='_blank'
                  >
                    {candidateData.contactPersonEmail}
                  </a>
                </TableCell>
                <TableCell className="px-4 py-2 text-sm">
                  <a
                    href={`tel:${candidateData.contactPersonNumber}`}
                    className="text-blue-500 hover:underline"
                  >
                    {candidateData.contactPersonNumber}
                  </a>
                </TableCell>
                <TableCell className="px-4 py-2 text-sm ">
                  {candidateData.state},{candidateData.city}
                </TableCell>
                <TableCell className="px-4 py-2 gap-3">
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className={'w-fit'} color="error">
                          {/* <MdDelete className="mr-1 text-lg" /> */}
                          <MdDeleteOutline className="text-lg"/>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete {candidateData.agencyName} Agency
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your Agency Profile and remove your data from
                            our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={async () => {
                              const result = await deleteAgency(
                                candidateData._id
                              );

                              if (result.success) {
                                console.log(result.message);
                                await fetchAgencies(); // Fetch agencies after successful deletion
                              } else {
                                console.error(result.message);
                                await fetchAgencies(); // Fetch agencies after successful deletion
                              }
                            }}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    {/* <Button variant="outline" className="text-sm">
                  Action 2
                </Button>
                <Button variant="outline" className="text-sm">
                  Action 3
                </Button> */}
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
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

export default DataTableAgency;
