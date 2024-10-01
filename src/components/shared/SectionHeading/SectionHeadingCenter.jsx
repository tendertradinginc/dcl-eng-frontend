import { cn } from "@/lib/utils";
import Image from "next/image";

const SectionHeadingCenter = ({ imageUrl, subTitle, title, description,  className }) => {
  return (
    <div className={cn("", className)}>
      <div className="">
        <div className="mb-5 z-10 ">
          <Image
            alt="our vision imave"
            height={64}
            width={386}
            className="mx-auto w-auto"
            src={imageUrl}
          ></Image>
        </div>
        <div className="flex items-center justify-center gap-3 -mt-12 ml-4 ">
          {" "}
          <p className="text-[#F78C40] font-bold inline-block text-center">{subTitle}</p>
          <p className="h-1 w-16 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]"></p>
        </div>
        <h1 className="text-4xl font-bold my-10 text-center ">
          {title}
          {/* We have a vision for <br /> the future of <br />
          
          <span className="border-b-4 border-[#F78C40]">construction</span> */}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeadingCenter;
