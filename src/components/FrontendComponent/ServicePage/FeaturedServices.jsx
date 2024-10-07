"use client";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export default function FeaturedServices() {
  const [featuredServices, setFeaturedServices] = useState([]);

  useEffect(() => {
    const fetchFeaturedServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/category?page=1&limit=8&featured=true"
        );
        const data = await response.json();
        setFeaturedServices(data.data || []);
      } catch (error) {
        console.error("Error fetching featured services:", error);
      }
    };

    fetchFeaturedServices();
  }, []);

  return (
    <section className="relative bg-white text-white py-16 overflow-hidden mb-16">
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
          {featuredServices.map((service) => (
            <div
              key={service._id}
              className="relative overflow-hidden shadow-lg h-[500px] group"
            >
              <Image
                src={service.img}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end text-center p-6">
                <h3 className="text-2xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-24">
                  {service.name.toUpperCase()}
                </h3>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  {service.shortDescription && (
                    <p className="text-sm mb-4">{service.shortDescription}</p>
                  )}
                  <Link
                    href={`/services/${service?.name}?page=1&limit=12`}
                    className="flex justify-center"
                  >
                    <Button
                      className="duration-200 py-2.5 pl-6 pr-0 gap-4 justify-between rounded-full items-center border-2 border-white flex text-white font-semibold text-base"
                      variant="tti"
                    >
                      View More Services
                      <div className="p-2.5 rounded-full bg-white">
                        <FaArrowRightLong className="text-lg text-black -rotate-45" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16"></div>
    </section>
  );
}
