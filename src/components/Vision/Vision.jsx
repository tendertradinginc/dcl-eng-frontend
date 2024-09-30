import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";

const Vision = () => {
  return (
    <div className="mt-20 py-20">
      <MaxWidthWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        <div className="pr-5 font-semibold">
          <h1 className="text-4xl text-center lg:text-left">
            We have a vision for <br /> the future of <br />
            <span className="border-b-4 border-[#F78C40]">construction</span>
          </h1>
          <div className="flex justify-center my-8">
            <div className="w-max rounded-full border p-2 flex gap-2">
              <button className="bg-[#F78C40] text-white py-2.5 px-6 rounded-full">
                Our Vision
              </button>
              <button className="border-2 text-[#A5A5A5] py-2.5 px-6 rounded-full">
                Our Vision
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-[#090909] font-bold text-xl ">
              Building today to transform <br />
              tomorrow
            </h3>
            <p className="font-normal text-[#636363] my-3">
              Focusing on medium to large-scale commercial construction
              projects, we work with both investors and developers to create
              landmarks that make an impact.
            </p>
          </div>
          <div className="text-[#090909] font-semibold text-lg mt-10">
            <ul className="grid grid-cols-1 md:grid-cols-2 border-y-2 py-2 ">
              <li>
                <span>•</span> Building inch by inch 
              </li>
              <li><span>•</span> Building to last </li>
            </ul>
            <ul className="grid grid-cols-1 md:grid-cols-2 border-b-2 py-2 ">
              <li>
                <span>•</span> Building for the future
              </li>
              <li><span>•</span> Building with trust </li>
            </ul>
            <ul className="grid grid-cols-1 md:grid-cols-2 border-b-2 py-2 ">
              <li>
                <span>•</span> Building together
              </li>
              <li><span>•</span> Building safely </li>
            </ul>
            {/* <ul className="flex "><li>Building to last</li></ul> */}
          </div>
        </div>
        <div className="">
          <div className="p-2 border-4 border-[#F78C40] w-full">
            <Image
              src="https://i.postimg.cc/4ysfpKG8/Frame-76484-1.png"
              alt="our vision image"
              height={500}
              width={500}
              className="h-full w-full"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Vision;
