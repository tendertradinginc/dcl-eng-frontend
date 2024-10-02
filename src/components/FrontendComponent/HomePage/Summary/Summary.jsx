import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";

const Summary = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex items-center gap-3">
          {" "}
          <p className="h-0.5 w-14 bg-gradient-to-tr from-[#ffc1957a] to-[#F78C40]"></p>{" "}
          <p className="text-[#F78C40] font-semibold text-xl">Summary</p>{" "}
          <hr className="border flex-1 border-[#718698]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div>
              <span
                className="text-transparent stroke-2 stroke-gray-300 outline-0 text-9xl font-extrabold"
                style={{
                  WebkitTextStroke: "2px #d1d5db",
                  WebkitTextFillColor: "transparent",
                }}
              >
                34
              </span>
            </div>
            <div className="flex items-center mt-[-80px] ml-28">
              <p className="text-7xl font-bold">34</p>
              <div className="ml-4">
                <span className=" uppercase">Projects</span>
                <p className="text-3xl font-semibold">Design</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Summary;
