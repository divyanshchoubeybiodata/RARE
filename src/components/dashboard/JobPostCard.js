import React, { useState } from "react";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import {deleteJobPost} from '../../../utils/deleteJobPost'

const JobPostCard = ({ jobData,setJobPost }) => {

  const [error ,setError]=useState('')
  const router = useRouter()
  const handleDelete = async () => {
 
    const result =await deleteJobPost(jobData._id)

    if (result.success) {
      console.log(result.message)
     await fetchJob() // Revalidate the page after successful deletion
    router.refresh()
    } else {
      console.error(result.message)
      await fetchJob()
      router.refresh()
    }
  }

  const fetchJob = async () => {
    try {
      const response = await fetch("/api/getAllJobPost",{ cache: 'no-store' });
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>{jobData.title}</CardTitle>

        <CardDescription>
          <span className="truncate">{jobData.jobDescription}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <Label htmlFor="skills">Skills</Label>
          <p>{jobData.skills.map((skill) => skill).join(", ")}</p>
        </div>
        <div>
          <Label htmlFor="agencyId">Agency Name</Label>
          <p>{jobData.agencyId.agencyName}</p>
        </div>
        <div>
          <Label htmlFor="jdUrl">Job Description</Label><br/>
          <Link href={jobData.jdUrl} className="text-blue-600">View</Link>
        </div>
        <div>
          {jobData.isExperience && (
            <>
              <Label htmlFor="experience">Experience In Years</Label>
              <p>{jobData.experience}</p>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        {/* <UpdateJobPost jobPost={jobData} /> */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" color="error">
              <MdDelete className="mr-1 text-lg" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete {jobData.title} Post</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                job post and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default JobPostCard;
