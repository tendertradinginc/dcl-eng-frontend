"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function ServiceCategory() {
  const [services, setServices] = useState([]);
  const listRef = useRef(null);
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/category?page=1&limit=8"
        );
        const data = await response.json();
        setServices(data.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.offsetHeight);
    }
  }, [services]);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2" ref={listRef}>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <Link
                key={service._id}
                href={`http://localhost:3000/services/${service.name}?page=1&limit=12`}
                className={`flex items-center py-4 border-b-2 border-muted-foreground hover:border-black transition-colors duration-200 group`}
              >
                <li className="flex items-center w-full">
                  <span
                    className={`text-xl font-extrabold mr-4 text-[#F6CF62] group-hover:text-[#F78C40]`}
                  >
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  <span className="text-xl font-extrabold text-muted-foreground group-hover:text-black">
                    {service.name.toUpperCase()}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <div style={{ height: `${listHeight}px` }} className="relative">
            <Image
              src="/servicePage1.jpg"
              alt="Construction site with building under construction at sunset"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
