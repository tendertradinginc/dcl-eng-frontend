"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import { useEffect } from "react";

const ViewSuccessStory = ({ data }) => {
    // Log the data to verify if it contains the necessary properties
    useEffect(() => {
        console.log(data);
    }, [data]);


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className=" text-black font-bold py-1 px-4 rounded">
                    View
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-2xl">
                <AlertDialogHeader>
                    {data?.image && (
                        <Image
                            loader={customLoader}
                            height={400}
                            width={400}
                            className="h-64 border shadow-md"
                            src={data.image}
                            alt="project Image"
                        />
                    )}

                    <AlertDialogTitle className="my-5 text-2xl font-semibold text-si-primary">
                        {data?.projectName || "No projectName"}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <p className="text-lg font-semibold">
                            {data?.companyName || "No companyName"}
                        </p>
                        <p className="mt-4 text-sm">{data?.clientName || "No clientName"}</p>

                        <p className="mt-4 text-sm">{data?.clientDesignation || "No clientDesignation"}</p>

                        <p className="mt-4 text-sm">{data?.shortDescription || "No shortDescription"}</p>

                        <p className="mt-4 text-sm">{data?.fullDescription || "No fullDescription"}</p>

                        <p className="mt-4 text-sm">{data?.location || "No location"}</p>

                        <p className="mt-4 text-sm">{data?.handoverDate || "No handoverDate"}</p>

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-green-600 text-white">
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ViewSuccessStory;
