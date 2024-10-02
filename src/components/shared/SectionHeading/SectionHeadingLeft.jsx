import { cn } from "@/lib/utils";
import Image from "next/image";

const SectionHeadingLeft = ({
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
        <div className="mb-5 z-10 ">
          {imageUrl && (
            <Image
              alt="our vision image"
              height={64}
              width={386}
              className="w-auto"
              src={imageUrl}
            />
          )}
        </div>
        <div className="flex items-center gap-3 -mt-12 ml-4 ">
          <p className="text-[#F78C40] font-medium inline-block">{subTitle}</p>
          <div className="h-0.5 w-10 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]" />
        </div>
        <h1 className="text-4xl font-bold my-8 text-left">{title}</h1>
        <p
          className={cn(
            "text-[#454545] max-w-4xl text-left text-xl",
            descriptionClassname
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeadingLeft;
