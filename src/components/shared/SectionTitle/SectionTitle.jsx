import Image from "next/image";

const SectionTitle = ({ title, imageLink, position, width, height }) => {
  return (
    <div className={`flex flex-col ${[position]} mb-12`}>
      <div className="mb-5 z-10 ">
        <Image
          alt="our vision imave"
          height={height}
          width={width}
          className={`px-4 md:px-0 `}
          src={imageLink}
        ></Image>
      </div>
      <div className="flex items-center gap-3 -mt-14 ml-4">
        {" "}
        <p className="text-[#F78C40] inline-block text-center ml-4 font-bold text-lg">
          {title}
        </p>
        <p className="h-1 w-16 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]"></p>
      </div>
    </div>
  );
};

export default SectionTitle;
