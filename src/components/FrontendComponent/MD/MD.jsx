import Image from "next/image";

const MD = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 py-10">
      <div className="py-10 order-last lg:order-first">
        <div className="flex items-center gap-3 ">
          {" "}
          <p className="text-[#F78C40] inline-block font-semibold">
            Some Words From MD
          </p>
          <p className="h-1 w-16 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]"></p>
        </div>
        <div className="text-[#454545] text-sm space-y-4 mt-5 lg:mt-10 ">
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="relative h-[500px] lg:h-auto">
        <div className="absolute left-0 top-0 w-[90%] h-[90%]">
          <Image
            className="h-full w-full object-cover"
            src="https://i.postimg.cc/KzdHPQgt/Frame-76557.png"
            alt="ceo background image"
            height={500}
            width={400}
          />
        </div>
        <div className="absolute right-0 md:right-5  bottom-5 w-[90%] h-[90%]">
          <Image
            className="h-full w-full object-cover "
            src="https://i.postimg.cc/CMmFdLsY/Frame-76558.png"
            alt="ceo  image"
            height={500}
            width={400}
          />
        </div>
        <div className="bg-[#F78C40] w-max absolute text-center py-2.5 px-10 md:px-14 mg:px-14 -bottom-5 left-0 lg:-left-5">
          <h1 className="text-2xl font-bold text-white">NAFIUL ISLAM JIM</h1>
          <p className="text-[#EFEFEF] text-sm font-medium">
            Managing Directors (MD)
          </p>
          <p className="text-[#EFEFEF] text-sm font-medium">
            DCL Engineering Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default MD;
