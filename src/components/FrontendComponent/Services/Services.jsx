import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <MaxWidthWrapper className="my-20">
      <SectionHeadingCenter
        imageUrl="https://i.postimg.cc/k588y1ZT/SERVICE.png"
        subTitle="What we do"
        title={
          <>
            YOUR NEXT CONTRUCTION{" "}
            <span className="border-b-4 border-[#F78C40]">
              {" "}
              <br />
              PARTNER
            </span>
          </>
        }
        description="Focusing on medium to large-scale commercial construction projects, we work with both investors and developers to create landmarks that make an impact."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {services?.map((item, idx) => (
          <ServiceCard
            imageUrl={item?.image}
            title={item?.title}
            description={item?.description}
            key={idx}
          />
        ))}
      </div>

      <div>
      <Button
                className=" duration-200 mx-auto py-2.5 pl-6 pr-0 gap-4 justify-between rounded-full items-center  border-2 border-[#0A2F4D] flex text-[#0A2F4D] font-semibold text-base border-r-0"
                variant="tti"
              >
                Explore Our Prujects{" "}
                <div className="p-2 rounded-full  bg-[#0A2F4D] my-0.5">
                  <FaArrowRightLong className="text-lg  text-white -rotate-45" />
                </div>
              </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;

const services = [
  {
    image: "https://i.postimg.cc/FsyHDtsd/Component-1-1.png",
    title: "ARCHITECTURE & BUILDING",
    description:
      "We maintain this by ensuring transparency and professional conduct in every aspect of our work.",
  },
  {
    image: "https://i.postimg.cc/0Nb6ttBT/Component-1-4.png",
    title: "STEEL STRUCTURE",
    description:
      "We maintain this by ensuring transparency and professional conduct in every aspect of our work.",
  },
  {
    image: "https://i.postimg.cc/fy5gRTfS/Component-1-2.png",
    title: "ARCHITECTURE & BUILDING",
    description:
      "We maintain this by ensuring transparency and professional conduct in every aspect of our work.",
  },
  {
    image: "https://i.postimg.cc/T1r5Vp4h/Component-1-3.png",
    title: "ARCHITECTURE & BUILDING",
    description:
      "We maintain this by ensuring transparency and professional conduct in every aspect of our work.",
  },
  {
    image: "https://i.postimg.cc/25M1gQpV/Component-1-5.png",
    title: "ARCHITECTURE & BUILDING",
    description:
      "We maintain this by ensuring transparency and professional conduct in every aspect of our work.",
  },
  {
    image: "https://i.postimg.cc/WpMdfq51/Component-1-6.png",
    title: "ARCHITECTURE & BUILDING",
    description:
      "We maintain this by ensuring transparency and professional conduct in every aspect of our work.",
  },
];
