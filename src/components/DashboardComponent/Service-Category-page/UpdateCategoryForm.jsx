"use client";

import axios from "axios";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

export default function UpdateCategoryForm({ categoryId, setReload }) {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    featuredStatus: false,
  });

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/category/${categoryId}`
        );
        setFormData(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch category data:", error);
        toast.error("Failed to load category data. Please try again.");
      }
    };

    if (categoryId) {
      fetchCategoryData();
    }
  }, [categoryId]);

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
      const response = await axios.put(
        `http://localhost:5000/api/v1/category/${categoryId}`,
        formData
      );

      console.log("Form submitted:", response.data);
      toast.success("Category updated successfully!");
      setReload((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to update category:", error.response || error);
      toast.error(
        `Failed to update category: ${
          error.response?.data?.message || error.message
        }`
      );
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
          Update Category
        </Button>
      </div>
    </form>
  );
}
