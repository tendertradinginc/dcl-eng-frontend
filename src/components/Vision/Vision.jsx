import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import SectionHeadingLeft from "../shared/SectionHeading/SectionHeadingLeft";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Vision = () => {
  return (
    <div className="mt-20 py-20">
      <MaxWidthWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        <div className="pr-5 font-semibold  ">
          {/* <div className="">
            <div className="mb-5 z-10 ">
              <Image
                alt="our vision imave"
                height={64}
                width={386}
                className=""
                src="https://i.postimg.cc/kGgDznXX/VISION.png"
              ></Image>
            </div>
            <div className="flex items-center gap-3 -mt-14 ml-4 ">
              {" "}
              <p className="text-[#F78C40] inline-block">Vision & Values</p>
              <p className="h-1 w-16 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]"></p>
            </div>
            <h1 className="text-4xl mt-10 text-center lg:text-left">
            We have a vision for <br /> the future of <br />
            <span className="border-b-4 border-[#F78C40]">construction</span>
          </h1>
          </div> */}
          <SectionHeadingLeft
            subTitle="Vision & Values"
            imageUrl="https://i.postimg.cc/kGgDznXX/VISION.png"
            title={
              <>
                {" "}
                We have a vision for <br /> the future of <br />
                <span className="border-b-4 border-[#F78C40]">
                  construction
                </span>
              </>
            }
          />

          <div className="flex justify-center my-8">
            <Tabs defaultValue="vision" className="">
              <TabsList className="grid w-full grid-cols-2 mb-12 mt-5 gap-3 max-w-max rounded-full border-2 border-[#F2DAB24D] py-2 h-max mx-auto">
                <TabsTrigger
                  className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-xl rounded-full py-2.5 px-6"
                  value="vision"
                >
                  Our Vision
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-xl rounded-full py-2.5 px-6 "
                  value="value"
                >
                  Our Values
                </TabsTrigger>
              </TabsList>
              <TabsContent value="vision">
                <div>
                  <h3 className="text-[#090909] font-bold text-xl ">
                    Building today to transform <br />
                    tomorrow
                  </h3>
                  <p className="font-normal text-[#636363] my-3">
                    Focusing on medium to large-scale commercial construction
                    projects, we work with both investors and developers to
                    create landmarks that make an impact.
                  </p>
                </div>
                <div className="text-[#090909] font-semibold text-lg mt-10">
                  <ul className="grid grid-cols-1 md:grid-cols-2 border-y-2 py-2 ">
                    <li>
                      <span>•&nbsp;&nbsp;</span>Building inch by inch
                    </li>
                    <li>
                      <span>•&nbsp;&nbsp;</span>Building to last{" "}
                    </li>
                  </ul>
                  <ul className="grid grid-cols-1 md:grid-cols-2 border-b-2 py-2 ">
                    <li>
                      <span>•&nbsp;&nbsp;</span>Building for the future
                    </li>
                    <li>
                      <span>•&nbsp;&nbsp;</span>Building with trust{" "}
                    </li>
                  </ul>
                  <ul className="grid grid-cols-1 md:grid-cols-2 border-b-2 py-2 ">
                    <li>
                      <span>•&nbsp;&nbsp;</span> Building together
                    </li>
                    <li>
                      <span>•&nbsp;&nbsp;</span>Building safely{" "}
                    </li>
                  </ul>
                  {/* <ul className="flex "><li>Building to last</li></ul> */}
                </div>
              </TabsContent>
              <TabsContent value="value">
                <div>
                  <h3 className="text-[#090909] font-bold text-xl ">
                    Upholding Integrity, Driving Innovation, and Striving <br />
                    for Excellence
                  </h3>
                  <p className="font-normal text-[#636363] my-3">
                    We are committed to maintaining the standards of
                    professionalism, constantly innovating to bring creative
                    solutions that exceed
                    expectations in every project.
                  </p>
                </div>
                <div className="text-[#090909] font-semibold text-lg mt-10">
                  <ul className="grid grid-cols-1 md:grid-cols-2 border-y-2 py-2 ">
                    <li>
                      <span>•&nbsp;&nbsp;</span>Acting with honesty
                    </li>
                    <li>
                      <span>•&nbsp;&nbsp;</span>Embracing creativity{" "}
                    </li>
                  </ul>
                  <ul className="grid grid-cols-1 md:grid-cols-2 border-b-2 py-2 ">
                    <li>
                      <span>•&nbsp;&nbsp;</span>Delivering unmatched quality
                    </li>
                    <li>
                      <span>•&nbsp;&nbsp;</span>Building lasting partnerships{" "}
                    </li>
                  </ul>
                  <ul className="grid grid-cols-1 md:grid-cols-2 border-b-2 py-2 ">
                    <li>
                      <span>•&nbsp;&nbsp;</span>Embracing sustainability
                    </li>
                    
                  </ul>
                  {/* <ul className="flex "><li>Building to last</li></ul> */}
                </div>
              </TabsContent>
            </Tabs>
       
          </div>
        </div>
        <div
          style={{
            boxShadow: "-94px -10px 87px -51px rgba(247, 140, 64, 0.233)",
          }}
          className=""
        >
          <div className="p-2 border-4 border-[#F78C40] w-full h-full">
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
