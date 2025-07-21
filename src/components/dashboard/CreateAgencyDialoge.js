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
import { Textarea } from "../ui/textarea";
import TagInput from "./TagInput";
import axios from 'axios'

const CreateAgencyDialoge = ({setAgency}) => {
  // State for each field
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  const [contactPersonContact, setContactPersonContact] = useState("");
  const [designation, setDesignation] = useState("");
  const [agencyName, setAgencyName] = useState("")
  const [success, setSuccess] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!agencyName){
        setSuccess("Please enter agency name")
      }else if(!city){
        setSuccess("Please enter city")
      }else if(!state){
        setSuccess("Please enter state")
      }else if(!contactPersonName){
        setSuccess("Please enter contact name")
      }else if(!contactPersonEmail){
        setSuccess("Please enter contact email")
      }else if(!contactPersonContact){
        setSuccess("Please enter contact number")
      }else if(!designation){
        setSuccess("Please enter designation")
      }else{

        const response = await axios.post('/api/createAgency', 
        {   
        agencyName, 
        city,
        state,
        contactPersonName, 
        contactPersonEmail, 
        contactPersonNumber: contactPersonContact, 
        designation });
      if(response.data){
        setState('')
        setCity('')
        setContactPersonName('')
        setContactPersonEmail('')
        setContactPersonContact('')
        setDesignation('')
        setAgencyName('')
        setSuccess('Agency Created Successfully')
        setAgency([])
        await fetchAgencies()
      }
    }

    } catch (error) {
      console.error(error);
      setSuccess('Error in Creating Agency')
      await fetchAgencies()
    }
  };


  const fetchAgencies = async () => {
    try {
      const response = await fetch("/api/getAllAgency")
      const data = await response.json()

      if (response.ok) {
        // Update the agency state in the parent component
        // You can dispatch an action or call a function to update the state
        // For example, if you have a setAgency function in the parent component
        // You can call setAgency(data) here
        setAgency(data)
      } else {
        console.error("Failed to load Agency")
      }
    } catch (error) {
      console.error(error.message)
      console.error("An error occurred while fetching Agency")
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={`mt-24 lg:mt-24`}>+ Create New Agency</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create New Agency Profile.</AlertDialogTitle>
          <AlertDialogDescription>
            Fill Out this form to create a new agency profile.
          </AlertDialogDescription>
          <CardContent>
            <form >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="agencyName">Agency Name<span className="text-red-600">{" "}*</span></Label>
                  <Input id="agencyName" placeholder="Name of the Agency..." value={agencyName} onChange={(e) => setAgencyName(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="state">State<span className="text-red-600">{" "}*</span></Label>
                  <Input
                    id="state"
                    placeholder="State..."
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="city">City<span className="text-red-600">{" "}*</span></Label>
                  <Input
                    id="city"
                    placeholder="City..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="contactPersonName">Contact Person Name<span className="text-red-600">{" "}*</span></Label>
                  <Input
                    id="contactPersonName"
                    placeholder="Contact Person Name..."
                    value={contactPersonName}
                    onChange={(e) => setContactPersonName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="contactPersonEmail">
                    Contact Person Email<span className="text-red-600">{" "}*</span>
                  </Label>
                  <Input
                    id="contactPersonEmail"
                    placeholder="Contact Person Email..."
                    value={contactPersonEmail}
                    onChange={(e) => setContactPersonEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="contactPersonContact">
                    Contact Person Contact<span className="text-red-600">{" "}*</span>
                  </Label>
                  <Input
                    id="contactPersonContact"
                    placeholder="Contact Person Contact..."
                    value={contactPersonContact}
                    onChange={(e) => setContactPersonContact(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="designation">Designation<span className="text-red-600">{" "}*</span></Label>
                  <Input
                    id="designation"
                    placeholder="Designation..."
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </AlertDialogHeader>
        <div>{success}</div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} className="bg-green-700" >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateAgencyDialoge;
