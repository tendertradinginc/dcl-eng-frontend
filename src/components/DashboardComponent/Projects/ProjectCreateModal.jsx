"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "sonner";

const ProjectCreateModal = ({ setReload }) => {
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    shortDescription: "",
    location: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("loading...");
    const imageUrl = await uploadImageToImgBB(imageFile);
    try {
      
      const projectData = { ...formData, image: imageUrl, category };
   

      const response = await fetch(
        "http://localhost:5000/api/v1/projects/create-project",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        }
      );
      const data = await response.json();

      if (data?.success === true) {
        toast.success("Article submitted successfully");
        e.target.reset();
        setIsOpen(false);
        setReload((prev) => prev + 1);
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
      console.log( {...formData, category})
      toast.error(error?.message);
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
      console.log({ ...formData, image: imageUrl, category })
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-3 bg-si-primary py-4 text-end font-semibold text-white duration-500 bg-gray-700 "
        >
          Create Blog
          <FaPlusCircle className="inline text-xl" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription></AlertDialogDescription>
        <form className="mx-auto w-full p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label className="mb-2 block">Project Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Short Description</Label>
            <Textarea
              type="text"
              name="shortDescription"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Description</Label>
            <Textarea
              type="text"
              name="description"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <Label className="mb-2 block">Project Thumbnail</Label>
            <Input
              id="projectImage"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageUpload}
            />
          </div>
         
         <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
         <div className="mb-4">
            <Label className="mb-2 block">Category</Label>
            <select onChange={(e)=>setCategory(e.target.value)} className="border w-full p-2 rounded-md">
              <option value="up-coming">Up-Coming</option>
              <option value="on-going">On-Going</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mb-4">
            <Label className="mb-2 block">Location</Label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
         </div>

          {loading ? (
            <Button
              disabled
             
              className="w-full items-center gap-2.5"
            >
              Processing
              <span className="animate-spin">
                <CgSpinnerTwoAlt size={18} />
              </span>
            </Button>
          ) : (
            <Button
              type="submit"
              className="mt-2 w-full rounded-sm  p-1 px-3 font-semibold "
            >
              Submit
            </Button>
          )}
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectCreateModal;
