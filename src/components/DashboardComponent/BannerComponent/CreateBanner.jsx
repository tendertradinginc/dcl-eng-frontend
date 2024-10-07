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

const CreateBanner = ({ setReload }) => {
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    colorWord: "",
    lastTitle: "",
    subtitle: "",
    backgroundImage: "",
    buttonText: "",
    buttonLink: "",
    location: "",
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
    setLoading(true);
    e.preventDefault();

    try {
      const imageUrl = await uploadImageToImgBB(imageFile);
      const bannerData = { ...formData, backgroundImage: imageUrl };

      const response = await fetch("http://localhost:5000/api/v1/bannerpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bannerData),
      });
      const data = await response.json();

      if (data?.success === true) {
        toast.success(" submitted successfully");
        e.target.reset();

        setReload((prev) => prev + 1);
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="flex gap-3  ">
          Create Banner
          <FaPlusCircle className="inline text-xl" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription></AlertDialogDescription>
        <form className="mx-auto w-full p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex justify-between gap-2">
              <div>
                <Label className="mb-2 block">First Title</Label>
                <Input
                  type="text"
                  name="title"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label className="mb-2 block">Color Title</Label>
                <Input
                  type="text"
                  name="colorWord"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label className="mb-2 block">last Title</Label>
                <Input
                  type="text"
                  name="lastTitle"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Sub Title</Label>
            <Textarea
              type="te"
              name="subtitle"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4 flex justify-between gap-2">
            <div>
              <Label className="mb-2 block">Button Text</Label>
              <Input
                type="text"
                name="buttonText"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label className="mb-2 block">Button Link</Label>
              <Input
                type="text"
                name="buttonLink"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Location</Label>
            <Input
              type="text"
              name="location"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <Label className="mb-2 block">Image</Label>
            <Input
              id="blogImage"
              type="file"
              accept="image/*"
              backgroundImage="image"
              onChange={handleImageUpload}
            />
          </div>

          {loading ? (
            <Button disabled className="w-full items-center gap-2.5 ">
              Processing
              <span className="animate-spin">
                <CgSpinnerTwoAlt size={18} />
              </span>
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Submit
            </Button>
          )}
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateBanner;
