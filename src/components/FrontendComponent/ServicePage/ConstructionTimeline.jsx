"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function ConstructionTimeline() {
  const steps = [
    {
      number: "01",
      title: "FIRST STEP",
      subtitle: "Identify and Simplify",
      description:
        "Lorem ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      highlight: true,
    },
    {
      number: "02",
      title: "SECOND STEP",
      subtitle: "Build and Develop",
      description:
        "Lorem ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      highlight: true,
    },
    {
      number: "03",
      title: "THIRD STEP",
      subtitle: "Scale and Deploy",
      description:
        "Lorem ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      highlight: false,
    },
    {
      number: "04",
      title: "FOURTH STEP",
      subtitle: "Completion",
      description:
        "Lorem ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
      highlight: false,
    },
  ];
  const listRef = useRef(null);
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="container mx-auto px-5 py-6 md:py-10 lg:px-14">
      <div className="flex flex-col md:flex-row-reverse md:gap-20">
        <div className="container mx-auto px-4 py-8 md:w-1/2" ref={listRef}>
          <div className="relative">
            <div className="absolute left-10 top-0 h-[calc(90%)] w-[2px] bg-gray-300" />
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-start">
                  <div
                    className={`absolute left-0 size-20 bg-white rounded-full border-2 ${
                      step.highlight
                        ? "border-orange-500 text-black"
                        : "border-gray-300 text-gray-300"
                    } flex items-center justify-center font-bold ${
                      index < 2 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="ml-24">
                    <h4
                      className={`text-sm md:text-base font-semibold ${
                        step.highlight ? "text-orange-500" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <h3
                      className={`text-xl md:text-2xl font-bold mt-1 ${
                        step.highlight ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step.subtitle}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-gray-600 max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center">
          <div className="w-full h-full relative">
            <Image
              src="/servicePage2.jpg"
              alt="Construction site with excavator"
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
