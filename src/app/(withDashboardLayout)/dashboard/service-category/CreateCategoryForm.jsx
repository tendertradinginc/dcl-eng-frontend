"use client";

import { uploadImageToImgBB } from "@/app/utils/imageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateCategoryForm() {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    img: "",
  });

  console.log(formData);

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

  return (
    <form>
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="category-name">Category Name</Label>
          <Input name="category-name" placeholder="Enter category name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category-image">Category Image</Label>
          <Input
            type="file"
            accept="image/*"
            name="category-image"
            multiple
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

        <Button>Submit</Button>
      </div>
    </form>
  );
}
