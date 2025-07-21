import React from "react";
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
import { MdDelete, MdEditSquare, MdOutlineDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { deleteAgency } from '../../../utils/deleteAgency'

const AgencyCard = ({agencyData,setAgency}) => {


  const router = useRouter()
  const handleDelete = async () => {
    const agencyId = agencyData._id
    const result =await deleteAgency(agencyId)

    if (result.success) {
      console.log(result.message)
      await fetchAgencies() // Fetch agencies after successful deletion

   
    } else {
      console.error(result.message)
      await fetchAgencies() // Fetch agencies after successful deletion

  
    }
  }

  const fetchAgencies = async () => {
    try {
      const response = await fetch("/api/getAllAgency",{ cache: 'no-store' })
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
    <Card>
      <CardHeader>
        <CardTitle>{agencyData.agencyName}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <Label htmlFor="jdUrl">Name</Label>
          <p>
            {agencyData.contactPersonName} - {agencyData.designation}
          </p>
        </div>
        <div>
          <Label htmlFor="jdUrl">Email</Label>
          <p>{agencyData.contactPersonEmail}</p>
        </div>
        <div>
          <Label htmlFor="jdUrl">Contact No</Label>
          <p>{agencyData.contactPersonNumber}</p>
        </div>
        <div>
          <Label htmlFor="skills">Location</Label>
          <p>
            {agencyData.state},{agencyData.city}
          </p>
        </div>
      </CardContent>

      <CardFooter className="">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="w-full" color="error">
              <MdDelete className="mr-1 text-lg" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Delete {agencyData.agencyName} Post
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                Agency Profile and remove your data from our servers.
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

export default AgencyCard;
