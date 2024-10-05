"use client";

import axios from "axios";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateCategoryForm({ setReload }) {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    img: "",
  });

  // Image upload handler
  const handleImageUpload = async (e) => {
    setUploading(true);
    try {
      const image = e.target.files[0];

      const imageUrl = await uploadImageToImgBB(image);

      setFormData((prev) => ({ ...prev, img: imageUrl }));
    } catch (error) {
      toast.error("Failed to upload images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.img) {
      toast.error("Please provide all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/category",
        formData
      );

      console.log("Form submitted:", response.data);

      toast.success("Category created successfully!");
      setReload((prev) => prev + 1);
      setFormData({ name: "", img: "" });
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Failed to create category. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="category-name">Category Name</Label>
          <Input
            name="category-name"
            placeholder="Enter category name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category-image">Category Image</Label>
          <Input
            type="file"
            accept="image/*"
            name="category-image"
            disabled={uploading}
            onChange={handleImageUpload}
          />
        </div>

        {formData?.img && (
          <Image
            src={formData?.img}
            alt="category-img"
            height={100}
            width={100}
            className="size-40"
          />
        )}

        <Button type="submit" disabled={uploading}>
          Submit
        </Button>
      </div>
    </form>
  );
}
