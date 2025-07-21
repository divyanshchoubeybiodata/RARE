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
} from "@/components/ui/alert-dialog";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import TagInput from "./TagInput";
import { FaTimes } from "react-icons/fa";
import { UploadButton } from "@uploadthing/react";
import axios from "axios";
import { MdAddBox } from "react-icons/md";
import CreateAgencyDialog from "./CreateAgencyDialog";
import Link from "next/link";
// import "@uploadthing/react/styles.css";

const CreateJobDialoge = ({ agencyData, setJobPost}) => {
  const [isExperience, setIsExperience] = useState(false); // State for the switch
  const [selectedAgency, setSelectedAgency] = useState('');
  const [tags, setTags] = useState([]);
  const [jobDescriptionPdf, setJobDescriptionPdf] = useState('')
  const [inputValue, setInputValue] = useState("");
  const [success,setSuccess]=useState(null)
  // console.log("selected agency",selectedAgency)
  console.log(agencyData)
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    isExperience: false,
    experienceInYears: "",
  });

  const handleSwitchChange = (event) => {
    if (!isExperience) {
      setIsExperience(true);
      setFormData({ ...formData, isExperience: true });
      return;
    } else {
      setIsExperience(false);
      setFormData({ ...formData, isExperience: false, experienceInYears: "" });
      return;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log(tags)
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form data:", formData);
  //   console.log('agency', selectedAgency)
  //   console.log('skills', tags)
  //   console.log("jdurl",jobDescriptionPdf)
  // };

  // console.log(isExperience);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!formData.jobTitle){
        setSuccess('Enter a Job Title')
      }else if(!tags){
        setSuccess('Enter a Skill')
      }else if(!selectedAgency){
        setSuccess('Select an Agency')
      }else if(!jobDescriptionPdf){
        setSuccess('Upload a Job Description')
      }else{

        const response = await axios.post('/api/createJobPost', 
        {   
          title:formData.jobTitle, 
        jobDescription:formData.jobDescription, 
        skills:tags,
        agencyId:selectedAgency, 
        jdUrl:jobDescriptionPdf, 
        isExperience:isExperience, 
        experience:formData.experienceInYears 
      });
      console.log(response.data);
      if(response.status === 201){
        setSuccess('Job Posted Successfully!')
        setFormData({
          jobTitle: "",
          jobDescription: "",
          isExperience: false,
          experienceInYears: "",
        });
        setTags([])
        setJobDescriptionPdf('')
        setInputValue('')
        setSelectedAgency('')
        
        await fetchJob()
      }
    }
    } catch (error) {
      console.error(error);
      setSuccess('Error While Posting Job')
      await fetchJob()
    }
  };


  const fetchJob = async () => {
    try {
      const response = await fetch("/api/getAllJobPost");
      const data = await response.json();

      if (response.ok) {
        setJobPost(data);
      } else {
        // setError("Failed to load jobs");
      }
    } catch (error) {
      console.error(error.message);
      setError("An error occurred while fetching Job POst");
    }
  };

  return (
    <form >

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={`mt-24 lg:mt-24`}>+ Create New Job</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create New Job Post.</AlertDialogTitle>

          <CardContent>
            <form >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="jobTitle">Job Title<span className="text-red-600">{" "}*</span></Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Title of your Job"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    />
                </div>{" "}
                {/* <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="jobDescription">Job Description</Label>
                  <Textarea
                  id="jobDescription"
                    name="jobDescription"
                    placeholder="Job Description"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    />
                  </div>{" "} */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="jobDescriptionPdf">Job Description PDF<span className="text-red-600">{" "}*</span></Label>
                  {!jobDescriptionPdf&&(
                  <UploadButton
                    endpoint="pdfUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      setJobDescriptionPdf(res[0].url);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                    />
                  )}
                       {jobDescriptionPdf&&(
                      <Link href={jobDescriptionPdf} target="_blank" className="text-blue-700 text-xl m-1">Uploaded</Link>
                    )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Skills">Skills<span className="text-red-600">{" "}*</span></Label>
                  <div className="container mx-auto px-4">
                    {tags.map((tag, index) => (
                      <span
                      key={index}
                      className="inline-flex items-center bg-primary text-white rounded-full px-3 py-1 mr-2 my-2"
                      >
                        {tag}
                        <FaTimes
                          className="ml-2 cursor-pointer"
                          onClick={() => removeTag(index)}
                          />
                      </span>
                    ))}
                    <input
                      type="text"
                      value={inputValue}
                      onKeyDown={handleKeyDown}
                      onChange={handleChange}
                      placeholder="Add a tag..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      required
                      />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Label htmlFor="isExperience">Experience Needed?</Label>
                  <Switch id="isExperience" defaultValue={isExperience} onCheckedChange={handleSwitchChange} />
                </div>
                {isExperience && (
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="experienceInYears">Experience In Years<span className="text-red-600">{" "}*</span></Label>
                    <Input
                      id="experienceInYears"
                      name="experienceInYears"
                      type="number"
                      value={formData.experienceInYears}
                      onChange={handleInputChange}
                      required
                      />
                  </div>
                )}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Agencies<span className="text-red-600">{" "}*</span></Label>
                  <div className="flex">

                  <Select required defaultValue={selectedAgency} onValueChange={setSelectedAgency}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {agencyData.map((agency) => (
                        <SelectItem key={agency._id} value={agency._id}>
                          {agency.agencyName}
                        </SelectItem>
                      ))}
                 
                     </SelectContent>
                  </Select>
                  <div>
                    <CreateAgencyDialog/>
                  </div>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </AlertDialogHeader>
        <div>{success}</div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
         

          <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
      
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </form>
  );
};

export default CreateJobDialoge;
