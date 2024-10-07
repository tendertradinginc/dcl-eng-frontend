"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { useState } from "react";
import { toast } from "sonner";

const CreateClientFeedback = ({ setReload }) => {
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    authorName: "",
    authorDesignation: "",
    feedback: "",
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
      const feedbackData = {
        ...formData,
        image: imageUrl,
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/clientFeedback/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        }
      );

      // Log the full response for debugging
      const data = await response.json();
      // Handle success or failure based on the response data
      if (data.success === true) {
        toast.success("Feedback submitted successfully!");
        setFormData({
          authorName: "",
          authorDesignation: "",
          feedback: "",
          Image: null,
        });
        setImageFile(null);
        setReload((prev) => prev + 1);
      } else {
        throw new Error(data.error || "Failed to submit feedback data");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error); // Log the error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-h-[600px] w-full">
      <Card className="border-none shadow-none outline-none">
        <CardContent>
          <form className="mx-auto max-w-2xl p-4" onSubmit={handleSubmit}>
            <h2 className="mb-6 text-center text-2xl font-bold">
              Clients Feedback Details
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
              <Label className="mb-2 block">Author Name</Label>
              <Input
                type="text"
                name="authorName"
                value={formData.authorName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Author Designation</Label>
              <Input
                type="text"
                name="authorDesignation"
                value={formData.authorDesignation}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Feedback</Label>
              <Textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                required
                className="min-h-60"
              />
            </div>

            <Button
              type="submit"
              className="mt-2 w-full rounded-sm bg-[#F78C40] p-1 px-3 font-semibold hover:text-black text-white hover:bg-[#f0b991]"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateClientFeedback;
