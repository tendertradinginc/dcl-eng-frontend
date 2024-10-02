"use client";

import axios from "axios";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function UpdateServiceForm({ serviceId, setReload }) {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "",
    shortDescription: "",
    fullDescription: "",
    featuredStatus: false,
  });

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/service/${serviceId}`
        );
        setFormData(response.data.data);
      } catch (error) {
        console.error("Failed to fetch service data:", error);
        toast.error("Failed to load service data. Please try again.");
      }
    };

    if (serviceId) {
      fetchServiceData();
    }
  }, [serviceId]);

  const handleImageUpload = async (e) => {
    setUploading(true);
    try {
      const image = e.target.files[0];
      const imageUrl = await uploadImageToImgBB(image);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    } catch (error) {
      toast.error("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.image ||
      !formData.category ||
      !formData.shortDescription ||
      !formData.fullDescription
    ) {
      toast.error("Please provide all required fields.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/service/${serviceId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Form submitted:", response.data);
      toast.success("Service updated successfully!");
      setReload(true);
    } catch (error) {
      console.error("Failed to update service:", error.response || error);
      toast.error(
        `Failed to update service: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-4">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="service-name">Service Name</Label>
          <Input
            name="service-name"
            placeholder="Enter service name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service-image">Service Image</Label>
          <Input
            type="file"
            accept="image/*"
            name="service-image"
            disabled={uploading}
            onChange={handleImageUpload}
          />
        </div>

        {formData.image && (
          <Image
            src={formData.image}
            alt="service-img"
            height={100}
            width={100}
            className="size-40"
          />
        )}

        <div className="space-y-2">
          <Label htmlFor="service-category">Category</Label>
          <Input
            name="service-category"
            placeholder="Enter service category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
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
          <Label htmlFor="full-description">Full Description</Label>
          <Textarea
            name="full-description"
            placeholder="Enter full description"
            value={formData.fullDescription}
            onChange={(e) =>
              setFormData({ ...formData, fullDescription: e.target.value })
            }
          />
        </div>

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
          Update Service
        </Button>
      </div>
    </form>
  );
}
