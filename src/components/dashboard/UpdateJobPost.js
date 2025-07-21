"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { MdEditSquare } from "react-icons/md";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";

const UpdateJobPost = ({ jobPost }) => {
  const [isExperience, setIsExperience] = useState(jobPost.isExperience); // State for the switch

  const handleSwitchChange = (event) => {
    if (!isExperience) {
      setIsExperience(true);
      return;
    } else {
      setIsExperience(false);
      return;
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          {" "}
          <MdEditSquare className="mr-1 text-lg" />
          Edit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit {jobPost.title} Post</AlertDialogTitle>
        </AlertDialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" defaultValue={jobPost.title} />
            </div>
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="jobDescription">Job Description</Label>
              <Textarea
                id="jobDescription"
                defaultValue={jobPost.jobDescription}
              />
            </div> */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                defaultValue={jobPost.skills.map((skill) => skill).join(", ")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="agencyId">Agency Name</Label>
              <Input id="agencyId" defaultValue={jobPost.agencyId.agencyName} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="jdUrl">Job Description Upload</Label>
              <Input id="jdUrl" defaultValue={jobPost.jdUrl} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="isExperience">Experience Needed?</Label>
              <Switch
                id="isExperience"
                defaultChecked={isExperience}
                onCheckedChange={handleSwitchChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              {isExperience && (
                <>
                  <Label htmlFor="experience">Experience In Years</Label>
                  <Input id="experience" defaultValue={jobPost.experience} />
                </>
              )}
            </div>
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Update</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateJobPost;
