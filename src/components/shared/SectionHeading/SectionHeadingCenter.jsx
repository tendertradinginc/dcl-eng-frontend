import { cn } from "@/lib/utils";
import Image from "next/image";

const SectionHeadingCenter = ({
  imageUrl,
  subTitle,
  title,
  description,
  className,
  descriptionClassname,
}) => {
  return (
    <div className={cn("", className)}>
      <div className="">
        {imageUrl && (
          <div className="mb-5 z-10 ">
            <Image
              alt="our vision imave"
              height={64}
              width={600}
              className="mx-auto w-full md:w-auto"
              src={imageUrl}
            ></Image>
          </div>
        )}
        <div className="flex items-center justify-center gap-3 -mt-12 ml-4 ">
          {" "}
          <h3 className="text-[#F78C40] font-bold inline-block text-center">
            {subTitle}
          </h3>
          <p className="h-1 w-16 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]"></p>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mt-4 mb-8 text-center ">
          {title}
        </h1>
        <p
          className={cn(
            "text-[#454545] max-w-4xl text-center mx-auto text-lg",
            descriptionClassname
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeadingCenter;
