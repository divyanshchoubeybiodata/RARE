"use client";
import React, { useState } from "react";
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
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import crypto from "crypto";


const CreateAdminDialouge = ({setAdmin ,setUsers}) => {
  const [adminEmail, setadminEmail] = useState("");
  const [success,setSuccess]=useState(null)
  function generateRandomPassword() {
    return crypto.randomBytes(10).toString("hex");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!adminEmail){
        setSuccess("Enter admin email !")
      }else{

        const password = generateRandomPassword();
        const response = await axios.post('/api/createUser', 
      {   
      email: adminEmail,
      role:"admin",
      password
    });
      if(response.status === 201){
        setadminEmail('')
        setSuccess('Admin Invited Successfully')
        await fetchUser()
      }
    }
    } catch (error) {
      console.error(error);
      setSuccess('Error Occured While Creating Admin!')
      await fetchUser()
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
        // setError("Failed to load User");
      }
    } catch (error) {
      console.error(error.message);
      // setError("An error occurred while fetching Users");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={`mt-24 lg:mt-24`}>+ Create New Admin</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create New Admin Profile.</AlertDialogTitle>
          <AlertDialogDescription>
            Fill Out this form to create a new admin profile.
          </AlertDialogDescription>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="adminEmail">Admin Email<span className="text-red-600">{" "}*</span></Label>
                  <Input
                    id="adminEmail"
                    placeholder="Admin Email..."
                    value={adminEmail}
                    onChange={(e) => setadminEmail(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </AlertDialogHeader>
        <div>{success}</div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} className="bg-green-700">
            Create Profile
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateAdminDialouge;
