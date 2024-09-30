"use client";
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
import { uploadImageToImgBB } from "@/utils/imageUpload"; // Import the upload function
import Image from "next/image";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { toast } from "sonner";
import blue from "./blue.gif";

const EditFeedback = ({ data, setReload }) => {
    const { authorName, authorDesignation, _id, image, feedback } = data;
    const [loading, setLoading] = useState(false);
    const [updatedAuthor, setUpdatedAuthor] = useState(authorName);
    const [updatedDesignation, setUpdatedDesignation] = useState(authorDesignation);
    const [updatedFeedback, setUpdatedFeedback] = useState(feedback);
    const [file, setFile] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const toastId = toast.loading("Loading...");

        try {
            let imageUrl = image;
            // If a new file is selected, upload it
            if (file) {
                imageUrl = await uploadImageToImgBB(file);
            }

            const updatedClientFeedback = {
                authorName: updatedAuthor,
                authorDesignation: updatedDesignation,
                feedback: updatedFeedback,
                image: imageUrl, // Include the image URL
            };

            const response = await fetch(
                `http://localhost:5000/api/v1/clientFeedback/${_id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedClientFeedback),
                }
            );

            if (response.ok) {
                toast.dismiss(toastId);
                toast.success("Success");
                setIsOpen(false);
                setReload((prevReload) => prevReload + 1);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "An unexpected error occurred");
            }
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "An unexpected error occurred");
            console.error("Error:", error);
        } finally {
            setLoading(false);
            toast.dismiss(toastId);
        }
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger>
                <div onClick={() => setIsOpen(true)} className="py-1 text-blue-950">
                    <CiEdit className="m-1 inline text-3xl font-bold" />
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
                            <Image
                                loader={customLoader}
                                height={400}
                                width={400}
                                className="h-64 border shadow-md"
                                src={image} // Display the current image
                                alt="Feedback Image"
                            />
                            <Label className="mb-2 mt-5 block">Update Image</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                name="image"
                                className="max-w-96"
                                onChange={(e) => {
                                    setIsDisabled(false);
                                    setFile(e.target.files[0]);
                                }}
                            />
                        </div>

                        <div className="mb-5">
                            <Label className="mb-2 block">Author</Label>
                            <Input
                                value={updatedAuthor}
                                onChange={(e) => {
                                    setUpdatedAuthor(e.target.value);
                                    setIsDisabled(false);
                                }}
                                type="text"
                                name="author"
                            />
                        </div>

                        <div className="mb-5">
                            <Label className="mb-2 block">Designation</Label>
                            <Input
                                value={updatedDesignation}
                                onChange={(e) => {
                                    setUpdatedDesignation(e.target.value);
                                    setIsDisabled(false);
                                }}
                                type="text"
                                name="designation"
                            />
                        </div>

                        <div className="mb-4">
                            <Label className="mb-2 block">Feedback</Label>
                            <Input
                                value={updatedFeedback}
                                onChange={(e) => {
                                    setUpdatedFeedback(e.target.value);
                                    setIsDisabled(false);
                                }}
                                type="text"
                                name="feedback"
                            />
                        </div>

                        <div>
                            <button
                                disabled={isDisabled || loading}
                                type="submit"
                                className={`flex h-10 items-center justify-center rounded font-semibold text-black hover:text-white ${isDisabled ? "bg-secondary" : "bg-black"}`}
                            >
                                {loading ? (
                                    <Image
                                        loader={customLoader}
                                        src={blue}
                                        alt="Loading"
                                        height="56"
                                        width="30"
                                        className="mx-auto w-8 text-center"
                                    />
                                ) : (
                                    <span className="px-8 text-sm bg-black text-white py-1 rounded-md">Submit</span>
                                )}
                            </button>
                        </div>
                    </form>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel
                        onClick={() => setIsOpen(false)}
                        className="hover:bg-black hover:text-white"
                    >
                        Close
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default EditFeedback;
