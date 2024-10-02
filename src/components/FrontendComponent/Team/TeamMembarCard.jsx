"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { useState } from "react";
import { customLoader } from "@/utils/customLoader";
import { CgMail } from "react-icons/cg";

const TeamMemberCard = ({ data }) => {
  const [isShow, setIsShow] = useState(false);
  const { name, profileImage, position, linkedIn, twitter, facebook } = data;

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
            src={profileImage}
            height={500}
            width={427}
            loader={customLoader}
            className="h-[500px] object-cover"
          />
          <div
            className={`absolute bottom-0 p-10 pb-7 ${
              isShow ? "hidden" : "block"
            }`}
          >
            <h1 className="text-[#EFEFEF] font-semibold text-2xl">{name}</h1>
            <p className="text-xl font-medium my-2 text-[#EFEFEF]">
              {position}
            </p>
          </div>
        </div>
      </CardContent>

      <div
        className={`absolute  w-full   top-0  left-0 bg-[#181A3980]  flex flex-col  justify-end ${
          isShow ? "h-full duration-1000" : "h-0 duration-1000"
        }`}
      >
        <div className="p-10 pb-7">
          <h1 className="text-[#EFEFEF] font-semibold text-2xl text-center">
            {name}
          </h1>

          <p className="text-xl font-medium my-2 text-[#EFEFEF] text-center">
            {position}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-white rounded-full h-10 w-10 flex justify-center items-center">
              <Link href={linkedIn}>
                <PiLinkedinLogoBold className="text-[#0A2F4D] text-2xl" />
              </Link>
            </div>
            <div className="bg-white rounded-full h-10 w-10 flex justify-center items-center">
              <Link href={linkedIn}>
                <RiFacebookCircleLine className="text-[#0A2F4D] text-3xl font-bold" />
              </Link>
            </div>
            <div className="bg-white rounded-full h-10 w-10 flex justify-center items-center">
              <Link href={linkedIn}>
                <CgMail className="text-[#0A2F4D] text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
