"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateCategoryForm({ setReload }) {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    featuredStatus: false,
    shortDescription: "", // Add this line
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

    if (!formData.name || !formData.img || !formData.shortDescription) {
      // Update this line
      toast.error("Please provide all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/category",
        formData
      );

      toast.success("Category created successfully!");
      setReload((prev) => prev + 1);
      setFormData({
        name: "",
        img: "",
        featuredStatus: false,
        shortDescription: "",
      });
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
          <Label htmlFor="short-description">Short Description</Label>
          <Input
            name="short-description"
            placeholder="Enter short description"
            value={formData.shortDescription}
            onChange={(e) =>
              setFormData({ ...formData, shortDescription: e.target.value })
            }
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

        <div className="flex items-center space-x-2">
          <Checkbox
            id="featured-status"
            checked={formData.featuredStatus}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, featuredStatus: checked })
            }
          />
          <Label htmlFor="featured-status">Featured Status</Label>
        </div>

        <Button type="submit" disabled={uploading}>
          Submit
        </Button>
      </div>
    </form>
  );
}
