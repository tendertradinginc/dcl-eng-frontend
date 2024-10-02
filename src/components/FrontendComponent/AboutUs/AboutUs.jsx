import SectionHeadingLeft from "@/components/shared/SectionHeading/SectionHeadingLeft";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2  mt-10 py-20">
      <div className="mt-5 md:mt-10 lg:mt-0">
        <SectionHeadingLeft
          imageUrl="https://i.postimg.cc/65SSjyX9/ABOUT-US.png"
          subTitle="SINCE FROM 2000"
          title={
            <>
              {" "}
              WE ARE HERE FOR RENOVATE
              <br />
              <span className="border-b-4 border-[#F78C40]">ANYTHING</span>
            </>
          }
        />

        <Tabs defaultValue="Our Goal" className="">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 gap-3 max-w-[441px] rounded-full md:border py-2 h-max">
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white  rounded-full py-4"
              value="Our Goal"
            >
              Our Goal
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white  rounded-full py-4 "
              value="History"
            >
              History
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white rounded-full py-4 "
              value="approach"
            >
              Approach
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Our Goal">
            <div className="text-[#454545] text-base space-y-4 mt-5 lg:mt-10 text-justify ">
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="History">
            <div className="text-[#454545] text-base space-y-4 mt-5 lg:mt-10 ">
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="approach">
            <div className="text-[#454545] text-base space-y-4 mt-5 lg:mt-10 ">
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <p className="text-justify">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="relative h-[500px] lg:h-auto lg:ml-16 order-first lg:order-last">
        <div className="absolute left-0 top-0 w-[90%] h-[90%] ">
          <Image
            className="h-full w-full drop-shadow-xl"
            src="https://i.postimg.cc/c4wD1T3n/Frame-76507.png"
            alt="ceo background image"
            height={500}
            width={400}
          />
        </div>
        <div className="absolute right-0  bottom-5 w-[70%] h-[70%]">
          <Image
            className="h-full w-full drop-shadow-2xl "
            src="https://i.postimg.cc/xjHGL8dr/Frame-76507-1.png"
            alt="ceo  image"
            height={500}
            width={400}
          />
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
