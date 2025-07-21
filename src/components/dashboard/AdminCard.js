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
import {deleteAdmin} from '../../../utils/deleteAdmin'

const AdminCard = ({adminData,setAdmin ,setUsers}) => {
  const handleDelete = async () => {
    // const agencyId = adminData._id
    const result =await deleteAdmin(adminData.email)

    if (result.success) {
      console.log(result.message)
      await fetchUser() // Fetch agencies after successful deletion

   
    } else {
      console.error(result.message)
      await fetchUser() // Fetch agencies after successful deletion

  
    }
  }
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
    <Card>
      <CardHeader>
        <CardTitle>{adminData.email}</CardTitle>
      </CardHeader>

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
                Delete {adminData.email} Profile
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                Admin Profile and remove your data from our servers.
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

export default AdminCard;
