"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { customLoader } from "@/utils/customLoader";
import { useState } from "react";

const ServiceCardHome = ({ data }) => {
  const { name, shortDescription, img, category } = data;
  const [isShow, setIsShow] = useState(false);

  return (
    <Card
      onMouseLeave={() => setIsShow(false)}
      onMouseOver={() => setIsShow(true)}
      className=" relative flex flex-col p-0 min-h-[500px] "
      radius="sm"
    >
      <CardHeader className="flex gap-3  py-3 justify-between  p-0"></CardHeader>

      <CardContent className="p-0 flex-1 flex flex-col">
        <div className="relative">
          <Image
            alt="slider image"
            src={img}
            height={500}
            width={427}
            loader={customLoader}
            className="h-[500px] w-full object-cover "
          />
          <div
            className={`absolute bottom-0 p-10 pb-7 w-full bg-[#181A3980]  ${
              isShow ? "hidden" : "block"
            }`}
          >
            <h1 className="text-white text-center font-semibold text-2xl uppercase">
              {name}
            </h1>
          </div>
        </div>
      </CardContent>
      <div
        className={`absolute duration-1000 w-full   top-0  left-0 bg-[#181A3980]  flex flex-col  justify-end ${
          isShow ? "h-full  opacity-100 " : "h-0 duration-1000 opacity-0 "
        }`}
      >
        <div className={`p-10 pb-7 text-center ${isShow ? "block" : "hidden"}`}>
          <h1 className="text-white font-semibold text-2xl text-center ">
            {name}
          </h1>
          <p className="text-[#EFEFEF] text-sm my-2 mb-4 line-clamp-2">
            {shortDescription}
          </p>
          <Link className="block" href={`/services/${name}`}>
            <Button
              className=" duration-200 mx-auto py-2.5 pl-6 pr-0 gap-4 justify-between rounded-full items-center   border-2  text-white flex "
              variant="tti"
            >
              Explore More Services{" "}
              <div className="p-2 rounded-full bg-white">
                <FaArrowRightLong className="text-lg  text-[#181A39] " />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCardHome;
