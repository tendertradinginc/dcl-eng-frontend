import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FeaturedServices() {
  return (
    <section className="relative bg-white text-white py-16 overflow-hidden">
      <div className="absolute inset-0 z-0 h-1/2">
        <Image
          src="/servicePage3.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeadingCenter
          title="FEATURED SERVICES"
          description="Focusing on medium to large-scale commercial construction projects, we work with both investors and developers to create landmarks that make an impact."
          subTitle="Working Process"
          descriptionClassname="text-white"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 -mb-32 lg:px-10">
          <div className="relative overflow-hidden shadow-lg">
            <Image
              src="/servicePage4.jpg"
              alt="Architecture & Building"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
              <h3 className="text-2xl font-bold">ARCHITECTURE & BUILDING</h3>
            </div>
          </div>
          <div className="relative overflow-hidden shadow-lg">
            <Image
              src="/servicePage5.jpg"
              alt="Steel Structure"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end p-6">
              <h3 className="text-2xl font-bold">STEEL STRUCTURE</h3>
              <p className="text-sm">
                We maintain this by ensuring transparency and professional
                conduct in every aspect of our work.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden shadow-lg">
            <Image
              src="/servicePage6.jpg"
              alt="Architecture & Building"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
              <h3 className="text-2xl font-bold">ARCHITECTURE & BUILDING</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <Link href="/services/road-construction">
          <Button
            className=" duration-200 mx-auto py-2.5 pl-6 pr-0 gap-4 justify-between rounded-full items-center border-2 border-[#0A2F4D] flex text-[#0A2F4D] font-semibold text-base border-r-0 mt-24"
            variant="tti"
          >
            View More Services
            <div className="p-2 rounded-full  bg-[#0A2F4D] my-0.5">
              <FaArrowRightLong className="text-lg  text-white -rotate-45" />
            </div>
          </Button>
        </Link>
      </div>
    </section>
  );
}
