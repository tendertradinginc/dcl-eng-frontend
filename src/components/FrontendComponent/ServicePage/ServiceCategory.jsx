"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function ServiceCategory() {
  const services = [
    { id: "01", name: "ROAD CONSTRUCTION", url: "road-construction" },
    { id: "02", name: "CIVIL CONSTRUCTION", url: "civil-construction" },
    {
      id: "03",
      name: "SCAFFOLDING MANUFACTURE",
      url: "scaffolding-manufacture",
    },
    { id: "04", name: "STEEL STRUCTURE", url: "steel-structure" },
    { id: "05", name: "PIPE MANUFACTURE", url: "pipe-manufacture" },
    { id: "06", name: "HEAVY EQUIPMENT SALE", url: "heavy-equipment-sale" },
    { id: "07", name: "MATERIALS SUPPLY", url: "materials-supply" },
    { id: "08", name: "SISTER COMPANY LINK", url: "sister-company-link" },
  ];

  const listRef = useRef(null);
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.offsetHeight);
    }
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2" ref={listRef}>
          <ul className="space-y-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`http://localhost:3000/services/${service.url}`}
                className={`flex items-center py-4 border-b-2 border-muted-foreground hover:border-black transition-colors duration-200 group`}
              >
                <li className="flex items-center w-full">
                  <span
                    className={`text-xl font-extrabold mr-4 text-[#F6CF62] group-hover:text-[#F78C40]`}
                  >
                    {service.id}.
                  </span>
                  <span className="text-xl font-extrabold text-muted-foreground group-hover:text-black">
                    {service.name}
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
