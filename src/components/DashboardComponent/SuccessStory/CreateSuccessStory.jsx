"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { useState } from "react";
import { toast } from "sonner";

const CreateSuccessStory = ({ setReload }) => {
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    companyName: "",
    clientName: "",
    clientDesignation: "",
    shortDescription: "",
    fullDescription: "",
    location: "",
    handoverDate: "",
    Image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please upload an image.");
      return;
    }

    setLoading(true);

    try {
      // Upload the image and get the URL
      const imageUrl = await uploadImageToImgBB(imageFile);

      if (!imageUrl) {
        throw new Error("Failed to upload image");
      }

      // Prepare the final data object to send to the backend
      const successStoryData = {
        ...formData,
        image: imageUrl,
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/successStory/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(successStoryData),
        }
      );

      // Log the full response for debugging
      const data = await response.json();

      // Handle success or failure based on the response data
      if (data.success === true) {
        toast.success("Feedback submitted successfully!");
        setFormData({
          projectName: "",
          companyName: "",
          clientName: "",
          clientDesignation: "",
          shortDescription: "",
          fullDescription: "",
          location: "",
          handoverDate: "",
          Image: null,
        });
        setImageFile(null);
        setReload((prev) => prev + 1);
      } else {
        throw new Error(data.error || "Failed to submit success story data");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error); // Log the error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <Card className="border-none shadow-none">
        <CardContent>
          <form className="p-4" onSubmit={handleSubmit}>
            <h2 className="mb-6 text-center text-2xl font-bold">
              Success Story Details
            </h2>

            {/* File Upload */}
            <div className="mb-4">
              <Label className="mb-2 block">Image</Label>
              <Input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageUpload}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Project Name</Label>
              <Input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Company Name</Label>
              <Input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Client Name</Label>
              <Input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Client Designation</Label>
              <Input
                type="text"
                name="clientDesignation"
                value={formData.clientDesignation}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Short Description</Label>
              <Input
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Full Description</Label>
              <Input
                type="text"
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleInputChange}
                required
              />
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

            <div className="mb-4">
              <Label className="mb-2 block">Handover Date</Label>
              <Input
                type="date"
                name="handoverDate"
                value={formData.handoverDate}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit Button at the Bottom */}
            <div className="mt-6">
              <Button
                type="submit"
                className="w-full rounded-sm bg-secondary p-2 px-4 font-semibold text-white hover:text-black bg-[#F78C40]  hover:bg-[#e7b794]"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateSuccessStory;
