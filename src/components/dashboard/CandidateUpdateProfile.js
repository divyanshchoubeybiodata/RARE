import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialog,
} from "@/components/ui/alert-dialog";

const CandidateUpdateProfile = ({}) => {
  const { data: session, status: sessionStatus } = useSession();
  const [candidate, setCandidate] = useState()
  console.log(session.user._id);
  useEffect(() => {
    {
      if (sessionStatus != "loading") {
        fetchCandidateById();
      }
    }
  }, []);

  const role = "Candidate";
  const fetchCandidateById = async () => {
    try {
      const response = await fetch("/api/getCandidateByUser", {
        userid: session.user._id,
      });
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
  console.log("cando",candidate)

  return (
    <div className="pt-10 md:pt-20">
      <Card className="w-full max-w-2xl ">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Update Profile</CardTitle>
              <CardDescription>
                Update your personal and professional details.
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  alt="Profile Picture"
                  src="/placeholder-avatar.jpg"
                />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <Button variant="outline">
                <CameraIcon className="h-5 w-5" />
                <span className="sr-only">Change profile picture</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="education">Education</Label>
            <Input id="education" placeholder="Enter your education" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input id="mobileNumber" placeholder="Enter your mobile number" />
          </div>  
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="panCard">PAN Card</Label>
                <Checkbox id="panCard" />
              </div>
              <Input id="panNumber" placeholder="Enter your PAN number" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="aadharCard">Aadhar Card</Label>
                <Checkbox id="aadharCard" />
              </div>
              <Input id="aadharNumber" placeholder="Enter your Aadhar number" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="resumeUrl">Resume URL</Label>
            <Input id="resumeUrl" placeholder="Enter your resume URL" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="workExperience">Work Experience</Label>
                <Switch id="workExperience" />
              </div>
              <Input id="currentCtc" placeholder="Enter your current CTC" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="Enter your state" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter your city" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your new password"
              type="password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="ml-auto">Save Changes</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Save Changes?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to save the changes to your profile?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Save Changes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CandidateUpdateProfile;

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
