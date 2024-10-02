"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { useState } from "react";

const ProjectCard = ({ title, description, imageUrl }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Card
      onMouseLeave={() => setIsShow(false)}
      onMouseOver={() => setIsShow(true)}
      className=" relative flex flex-col p-0 min-h-[500px] "
      radius="sm"
    >
      <CardHeader className="flex gap-3  py-3 justify-between  p-0"></CardHeader>

      <CardContent
        // onMouseOver={() => setIsShow(true)}
        className="p-0 flex-1 flex flex-col"
      >
       <div className="relative">
       <Image
          alt="slider image"
          src={imageUrl}
          height={500}
          width={427}
          className="h-[500px] "
        />
        <div className={`absolute bottom-0 p-10 pb-7 ${isShow ? "hidden":"block"}`}>
        <h1 className="text-white font-semibold text-2xl">{title}</h1>
        </div>
       </div>
      </CardContent>

      <div
          className={`absolute  w-full   top-0  left-0 bg-[#181A3980]  flex flex-col  justify-end ${
            isShow ? "h-full duration-1000" : "h-0 duration-1000"
          }`}
        >
          <div className="p-10 pb-7">
            <h1 className="text-white font-semibold text-2xl ">{title}</h1>
            <p className="text-[#EFEFEF] text-sm py-2 mb-4">{description}</p>
            <Link className="block" href={`/tenders/`}>
              <Button
                className=" duration-200 mx-auto py-2.5 pl-6 pr-1 gap-4 justify-between rounded-full items-center   bg-[#F78C40]  text-white flex "
                variant="tti"
              >
                Explore Our Prujects{" "}
                <div className="p-1 rounded-full bg-white">
                  <FaArrowRightLong className="text-xl text-[#F78C40]" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
    </Card>
  );
};

export default ProjectCard;
