import React from "react";

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
import { MdDelete } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Card } from "../ui/card";

const CandidateDetailsDialouge = ({ candidateeData }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link">
          <FaExternalLinkSquareAlt className="mr-1 text-lg" />
          View Details
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex flex-col justify-center p-6 sm:px-12">
        
          <div className="space-y-4 text-center divide-y">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {candidateeData.firstName} {candidateeData.lastName}
              </h2>
              <p className="px-5 text-xs sm:text-base">Full-stack developer</p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {/* Additional Details */}
              <div className="flex flex-col space-y-2">
                <div>
                  <p className="font-semibold">Education:</p>
                  <p>{candidateeData.education}</p>
                </div>
                <div>
                  <p className="font-semibold">Mobile Number:</p>
                  <p>{candidateeData.mobileNumber}</p>
                </div>
                {candidateeData.panNumber && (
                  <div>
                    <p className="font-semibold">PAN:</p>
                    <p>{candidateeData.panNumber}</p>
                  </div>
                )}
                {candidateeData.aadharNumber && (
                  <div>
                    <p className="font-semibold">Aadhar:</p>
                    <p>{candidateeData.aadharNumber}</p>
                  </div>
                )}
                <div>
                  <p className="font-semibold">Resume URL:</p>
                  <a
                    href={candidateeData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Resume
                  </a>
                </div>
                {candidateeData.isExperience&&<div>
                  <p>Current CTC:  ₹{candidateeData.currentCtc}</p>
                </div>}
                <div>
                  <p className="font-semibold">Location:</p>
                  <p>State: {candidateeData.state}</p>
                  <p>City: {candidateeData.city}</p>
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
  );
};

export default CandidateDetailsDialouge;
