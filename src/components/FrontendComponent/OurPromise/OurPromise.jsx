import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";

const OurPromise = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/prH7W8px/Frame-76565.png')",
      }}
      className="py-20 bg-center bg-no-repeat bg-cover mb-20"
    >
      <MaxWidthWrapper>
        <div className="mb-10 lg:hidden">
          <div>
            <Image
              loader={customLoader}
              src="https://i.postimg.cc/Qd8rhg1b/Frame-76554.png"
              alt="our promise image"
              height={500}
              width={500}
              className="object-cover w-full max-h-[500px]"
            />
          </div>
          <div>
          <h1 className="text-4xl font-bold text-[#0B0B0B] text-center mt-10 ">
              RF Dewi Expanded
            </h1>
            <div className="flex gap-3 mt-10">
              <div>
                <Image
                  src="https://i.postimg.cc/bN8vSt1G/Vector.png"
                  height={21}
                  width={100}
                  alt="quote"
                  className=""
                />
              </div>
              <div className="space-y-3">
                <p className="text-[#0B0B0B] font-medium text-lg">
                  Rebuilto Construction has been more than a developer - they
                  have acted as a true partner. All rolled up their sleeves and
                  sought solutions instead of sidestepping substantial
                  complications.
                </p>
                <p className="text-[#0B0B0B] font-medium text-lg">
                  Rebuilto Construction has been more than a developer - they
                  have acted as a true partner. All rolled up their sleeves and
                  sought solutions instead of sidestepping substantial
                  complications. Rebuilto Construction has been more than a
                  developer - they have acted as a true partner. All rolled up
                  their sleeves and sought solutions instead of sidestepping
                  substantial complications. All rolled up their sleeves and
                  sought solutions instead of sidestepping substantial
                  complications.
                </p>
                <p className="text-[#0B0B0B] font-medium text-lg">
                  All rolled up their sleeves and sought solutions instead of
                  sidestepping substantial complications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="hidden lg:block">
        <div className="flex  items-center   ">
          
          <div className="-mr-16 relative  flex-1">
        
            <Image
              loader={customLoader}
              src="https://i.postimg.cc/Qd8rhg1b/Frame-76554.png"
              alt="our promise image"
              height={500}
              width={500}
              className="object-cover w-full max-h-[500px]"
            />
          </div>
          <div className="bg-[#E7EAED] flex-1 py-28 pl-24">
            <h1 className="text-4xl font-bold text-[#0B0B0B]">
              RF Dewi Expanded
            </h1>
            <div className="flex gap-3 mt-10">
              <div>
                <Image
                  src="https://i.postimg.cc/bN8vSt1G/Vector.png"
                  height={21}
                  width={100}
                  alt="quote"
                  className=""
                />
              </div>
              <div className="space-y-3">
                <p className="text-[#0B0B0B] font-medium text-lg">
                  Rebuilto Construction has been more than a developer - they
                  have acted as a true partner. All rolled up their sleeves and
                  sought solutions instead of sidestepping substantial
                  complications.
                </p>
                <p className="text-[#0B0B0B] font-medium text-lg">
                  Rebuilto Construction has been more than a developer - they
                  have acted as a true partner. All rolled up their sleeves and
                  sought solutions instead of sidestepping substantial
                  complications. Rebuilto Construction has been more than a
                  developer - they have acted as a true partner. All rolled up
                  their sleeves and sought solutions instead of sidestepping
                  substantial complications. All rolled up their sleeves and
                  sought solutions instead of sidestepping substantial
                  complications.
                </p>
                <p className="text-[#0B0B0B] font-medium text-lg">
                  All rolled up their sleeves and sought solutions instead of
                  sidestepping substantial complications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurPromise;
