"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function ServiceCategory() {
  const services = [
    { id: "01", name: "ROAD CONSTRUCTION" },
    { id: "02", name: "CIVIL CONSTRUCTION" },
    { id: "03", name: "SCAFFOLDING MANUFACTURE" },
    { id: "04", name: "STEEL STRUCTURE" },
    { id: "05", name: "PIPE MANUFACTURE" },
    { id: "06", name: "HEAVY EQUIPMENT SALE" },
    { id: "07", name: "MATERIALS SUPPLY" },
    { id: "08", name: "SISTER COMPANY LINK" },
  ];

  const listRef = useRef(null);
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2" ref={listRef}>
          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service.id}
                className={`flex items-center py-4 border-b-2 border-muted-foreground last:border-b-0 hover:border-black transition-colors duration-200 group`}
              >
                <span
                  className={`text-xl font-extrabold mr-4 text-[#F6CF62] group-hover:text-[#F78C40]`}
                >
                  {service.id}.
                </span>
                <span className="text-xl font-extrabold text-muted-foreground group-hover:text-black">
                  {service.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <div style={{ height: `${listHeight}px` }} className="relative">
            <Image
              src="https://picsum.photos/id/58/400/300"
              alt="Construction site with building under construction at sunset"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
