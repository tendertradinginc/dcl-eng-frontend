"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import UpdateCategoryForm from "./UpdateCategoryForm";

export default function SingleCategory({ index, data }) {
  //* Realod with revalidate path

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/category/${id}`);

      toast.success("Category Deleted Successfully!");
    } catch (error) {
      toast.error("Failed to delete the category. Try again later.");
      console.error("Failed to delete the category:", error);
    }
  };

  return (
    <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1">
        <Image
          className="h-12 w-12"
          width={48}
          height={48}
          src={data.img || "https://picsum.photos/id/237/200/300"}
          alt={data.name || "Category Image"}
        />
      </td>

      <td className="px-4 py-1 font-semibold text-blue-900">
        {data.name || "N/A"}
      </td>

      <td className="flex items-center space-x-3 py-2 md:px-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Pencil1Icon />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Category</DialogTitle>
            </DialogHeader>

            <UpdateCategoryForm categoryId={data._id} />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" size="icon">
              <Trash2 />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>
                This action will permanently delete this category from the
                database. This cannot be undone.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button">Cancel</Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={() => handleDelete(data._id)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </td>
    </tr>
  );
}
