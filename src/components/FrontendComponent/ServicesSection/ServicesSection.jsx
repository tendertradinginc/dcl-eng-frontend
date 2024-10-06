import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import ServiceCardHome from "@/components/shared/ServiceCard/ServiceCardHome";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesSection = async () => {
  const res = await fetch('http://localhost:5000/api/v1/service')
  const data = await res.json()
  const services = data?.data
  
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
          <ServiceCardHome
          data={item}
            image={item?.image}
            title={item?.title}
            description={item?.shortDescription}
            key={idx}
          />
        ))}
      </div>

      <div>
        <Link href="/services">
          {" "}
          <Button
            className="group  duration-300 mx-auto py-2.5 pl-6 pr-0 gap-4 justify-between rounded-full items-center  border-2 border-[#0A2F4D] flex text-[#0A2F4D] font-semibold text-base border-r-0 hover:text-white hover:bg-[#F78C40] hover:border-[#F78C40]"
            variant="tti"
          >
            Explore Our Prujects{" "}
            <div className="p-2 rounded-full duration-300  bg-[#0A2F4D] my-0.5 group-hover:bg-white hover:text-white">
              <FaArrowRightLong className="text-lg duration-300 group-hover:text-[#F78C40]  text-white -rotate-45" />
            </div>
          </Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default ServicesSection;


