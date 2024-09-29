import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function SingleCategory() {
  //* Realod with revalidate path

  return (
    <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1">
        <Image
          loader={customLoader}
          className="h-12 w-12"
          width={48}
          height={48}
          src={"https://picsum.photos/id/237/200/300"}
          alt="imgae"
        />
      </td>

      <td className="px-4 py-1 font-semibold text-blue-900">Blah</td>

      <td className="flex items-center space-x-3 py-2 md:px-4">
        <Button>Update</Button>
        <Button>Delete</Button>
      </td>
    </tr>
  );
}
