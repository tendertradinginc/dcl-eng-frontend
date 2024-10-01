import { cn } from "@/lib/utils";
import Image from "next/image";

const SectionHeadingLeft = ({ imageUrl, subTitle, title, description,  className }) => {
  return (
    <div className={cn("", className)}>
      <div className="">
        <div className="mb-5 z-10 ">
          <Image
            alt="our vision imave"
            height={64}
            width={386}
            className=""
            src={imageUrl}
          ></Image>
        </div>
        <div className="flex items-center gap-3 -mt-14 ml-4 ">
          {" "}
          <p className="text-[#F78C40] inline-block">{subTitle}</p>
          <p className="h-1 w-16 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]"></p>
        </div>
        <h1 className="text-4xl mt-10 text-center lg:text-left">
          {title}
          {/* We have a vision for <br /> the future of <br />
          
          <span className="border-b-4 border-[#F78C40]">construction</span> */}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeadingLeft;
