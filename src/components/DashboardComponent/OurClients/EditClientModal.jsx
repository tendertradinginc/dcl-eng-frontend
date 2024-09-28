import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { customLoader } from "@/utils/customLoader";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import Image from "next/image";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { toast } from "sonner";
import blue from "./blue.gif";

const EditClientModal = ({ data, setReload }) => {
  const { name, _id, image, details } = data;
  const [loading, setLoading] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDetails, setUpdatedDetails] = useState(details);
  const [isDisbaled, setIsdisabled] = useState(true);
  const [img, setImg] = useState(image);
  const [file, setFile] = useState("");

  // to hanle dialogue open
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Loading...");

    try {
      const imageUrl = (await uploadImageToImgBB(file)) || image;

      const updatedClient = {
        name: updatedName,
        details: updatedDetails,
        image: imageUrl,
      };

      const response = await fetch(
        `http://localhost:5000/api/v1/client/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedClient),
        }
      );

      if (response.ok) {
        toast.dismiss(toastId);
        toast.success("Success");
        setIsOpen(false);
        setLoading(false);
        setReload((prevReload) => prevReload + 1);
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
    <AlertDialog open={isOpen} onClose={() => setIsOpen(false)} className="">
      <AlertDialogTrigger className="">
        <div onClick={() => setIsOpen(true)} className="py-1 text-blue-950">
          <CiEdit className="m-1 inline text-3xl font-bold"></CiEdit>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[600px] max-w-3xl overflow-y-scroll">
        <AlertDialogHeader>
          <AlertDialogDescription className="customScrollbar overflow-y-auto p-4"></AlertDialogDescription>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full space-y-10 py-4"
          >
            <div className="mb-5">
              <Label className="mb-2 block">Title</Label>
              <Input
                value={updatedName}
                onChange={(e) => {
                  setUpdatedName(e.target.value);
                  setIsdisabled(false);
                }}
                type="text"
                name="name"
              />
            </div>
            <div className="mb-4">
              <Label className="mb-2 block">Image</Label>

              <Image
                loader={customLoader}
                src={img}
                alt="client"
                height="56"
                width="30"
                className="h-40"
              />

              <Input
                type="file"
                accept="image/*"
                name="image"
                className="mt-5 max-w-96"
                onChange={(e) => {
                  setIsdisabled(false);
                  setFile(e.target.files[0] || img);
                }}
              />
            </div>

            <div className="mb-5">
              <Label className="mb-2 block">Details</Label>
              <Input
                value={updatedDetails}
                onChange={(e) => {
                  setUpdatedName(e.target.value);
                  setIsdisabled(false);
                }}
                type="text"
                name="details"
              />
            </div>

            <div className="">
              <div
                className={`flex h-10 items-center justify-center rounded font-semibold text-white hover:text-black ${
                  isDisbaled ? "bg-si-secondary" : "bg-si-primary"
                }`}
              >
                <button className=" ">
                  <Image
                    loader={customLoader}
                    src={blue}
                    alt="client"
                    height="56"
                    width="30"
                    className={`mx-auto w-8 text-center ${
                      !loading && "hidden"
                    }`}
                  />
                </button>

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
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="hover:bg-si-primary hover:text-white"
          >
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditClientModal;
