import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
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
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input"; 
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { MdDelete, MdEditSquare, MdOutlineDelete } from "react-icons/md";
import UpdateJobPost from "./UpdateJobPost";
import CandidateDetailsDialouge from "./CandidateDetailsDialouge";
import { deleteCandidate } from "../../../utils/deleteCandidate";

const CandidateCard = ({ CandidateData,setCandidate }) => {

  const handleDelete = async () => {
    // const agencyId = adminData._id
    const result =await deleteCandidate(CandidateData._id)

    if (result.success) {
      console.log(result.message)
      await fetchCandidate() // Fetch agencies after successful deletion

   
    } else {
      console.error(result.message)
      await fetchCandidate() // Fetch agencies after successful deletion

  
    }
  }
  const fetchCandidate = async () => {
    try {
      const response = await fetch("/api/getAllCandidate",{ cache: 'no-store' });
      const data = await response.json();

      if (response.ok) {
        setCandidate(data);
      } else {
        // setError("failed to load candidate");
      }
    } catch (error) {
      console.error(error.message);
      // setError("An error occurred while fetching candidates");
    }
  };

  return (
    <Card className="overflow-clip lg:w-[500px] w-auto ">
      <CardContent className=" w-full py-10 ">
        <div className="max-w-md  sm:flex  sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
         
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">
                {CandidateData.firstName} {CandidateData.lastName}
              </h2>
              <span className="text-sm dark:text-gray-600">
                General manager
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">
                  {CandidateData?.userid?.email}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">
                  {CandidateData.mobileNumber}
                </span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className=" flex justify-between">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" color="error">
              <MdDelete className="mr-1 text-lg" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Delete {CandidateData.firstName} {CandidateData.lastName} Candidate
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                Candidate Profile and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* candidate details dialouge  */}
        <CandidateDetailsDialouge candidateeData={CandidateData} />
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;
