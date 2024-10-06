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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { customLoader } from "@/utils/customLoader";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { Label } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { toast } from "sonner";

const BlogUpdate = ({ data, setReload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisbaled, setIsdisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { title, image, description, _id } = data;
  const [file, setFile] = useState("");
  const [updatedTitle, setUpdtedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Loading...");

    try {
      let imageUrl = image;
      if (file) {
        imageUrl = await uploadImageToImgBB(file);
      }
      const updatedBlog = {
        title: updatedTitle,
        description: updatedDescription,
        image: imageUrl,
      };

      const response = await fetch(
        `http://localhost:5000/api/v1/blogs/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBlog),
        }
      );

      if (response.ok) {
        toast.dismiss(toastId);
        toast.success("Success");
        setIsdisabled(true);
        setLoading(false);
        setReload((prev) => prev + 1);
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unexpected error occurred");
      }
    } catch (error) {
      toast.dismiss(toastId);
      setLoading(false);
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <AlertDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <AlertDialogTrigger className="">
        <div onClick={() => setIsOpen(true)} className="py-1 text-blue-950">
          <CiEdit className="m-1 inline text-3xl font-bold"></CiEdit>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl">
        <AlertDialogTitle></AlertDialogTitle>

        <AlertDialogDescription className=" "></AlertDialogDescription>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full space-y-10 p-5 py-4"
        >
          <div className="mb-5">
            <Image
              loader={customLoader}
              height={400}
              width={400}
              className="h-64 border shadow-md"
              src={data?.image}
              alt="updated blog Image"
            />
            <Label className="mb-2 mt-5 block">Update Thumbnail</Label>
            <Input
              type="file"
              accept="image/*"
              name="image"
              className="max-w-96"
              onChange={(e) => {
                setIsdisabled(false);
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Title</Label>
            <Input
              value={updatedTitle}
              onChange={(e) => {
                setUpdtedTitle(e.target.value);
                setIsdisabled(false);
              }}
              type="text"
              name="title"
              required
            />
          </div>

          <div className="mb-4">
            <Label className="mb-2 block">Description</Label>
            <Textarea
              value={updatedDescription}
              onChange={(e) => {
                setUpdatedDescription(e.target.value);
                setIsdisabled(false);
              }}
              className="customScrollbar min-h-[160px]"
              required
            />
          </div>

          <div className=" ">
            <div
              className={`flex h-10 items-center justify-center rounded font-semibold text-white hover:text-black ${
                isDisbaled ? "bg-[#91AADF]" : "bg-si-primary"
              }`}
            >
              <button
                disabled={isDisbaled}
                type="submit"
                className={`py-18 h-full w-full ${loading && "hidden"}`}
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BlogUpdate;
