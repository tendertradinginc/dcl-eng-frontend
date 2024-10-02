import { cn } from "@/lib/utils";
import Image from "next/image";

const SectionHeadingCenter = ({
  imageUrl,
  subTitle,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <div className="">
        <div className="mb-5 z-10 ">
          {imageUrl && (
            <Image
              alt="our vision image"
              height={64}
              width={386}
              className="mx-auto w-auto"
              src={imageUrl}
            />
          )}
        </div>
        <div className="flex items-center justify-center gap-3 -mt-12 ml-4 ">
          <p className="text-[#F78C40] font-medium inline-block text-center">
            {subTitle}
          </p>
          <div className="h-0.5 w-10 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]" />
        </div>
        <h1 className="text-4xl font-bold my-8 text-center ">{title}</h1>
        <p className="text-[#454545] max-w-4xl text-center mx-auto text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeadingCenter;
