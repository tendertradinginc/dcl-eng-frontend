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
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ViewBanner = ({ data }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MdOutlineRemoveRedEye className="m-1 inline text-3xl text-si-primary" />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <Image
            loader={customLoader}
            height={400}
            width={400}
            className="h-64 border shadow-md"
            src={data?.backgroundImage}
            alt="updated blog Image"
          />
          <AlertDialogTitle className="my-5 text-2xl font-semibold text-si-primary">
            {data?.title} {data?.colorWord} {data?.lastTitle}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p>{data?.subtitle}</p>
            <p className="my-2">
              Button: {data?.buttonText}-- {data?.buttonLink}
            </p>
            <p>{data?.location}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-blue-950 hover:bg-blue-800 text-white hover:text-white">
            {" "}
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ViewBanner;
