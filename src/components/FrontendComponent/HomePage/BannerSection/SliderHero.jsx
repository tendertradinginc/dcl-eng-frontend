"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
const CustomSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  useEffect(() => {
    const autoSlideTimeout = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(autoSlideTimeout);
  }, [currentIndex]);
  return (
    <div className="relative w-full h-[80vh] overflow-hidden shadow-lg shadow-blue-500/50">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-10">
            <MaxWidthWrapper>
              <div className="flex flex-col justify-center items-start h-full py-20 md:py-32 lg:pb-10 text-left text-white">
                <h1 className="text-3xl lg:text-6xl font-bold">
                  BUILT ON
                  <span
                    className="text-transparent stroke-2 stroke-[#F97316] outline-0"
                    style={{
                      WebkitTextStroke: "2px #F97316",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    TRUST
                  </span>
                  <span className="mt-4 block">SINCE 1980</span>
                </h1>
                <p className="my-8 w-11/12 md:w-2/3 text-lg font-medium">
                  Focusing on medium to large-scale commercial construction
                  projects, we work with both investors and developers to create
                  landmarks that make an impact.
                </p>
                <button className="relative inline-flex items-center pl-6  border-2  border-white hover:border-[#F97316]  rounded-full text-white hover:bg-[#F97316] hover:text-white text-md font-semibold uppercase transition-colors duration-300">
                  Explore Our Project
                  <span className="ml-3 inline-flex items-center justify-center w-12 h-12 bg-white rounded-full">
                    <GoArrowUpRight className="text-black" />
                  </span>
                </button>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
          )
        }
        className="absolute top-1/2 z-50 left-5 transform -translate-y-1/2 text-white text-3xl  border border-transparent hover:border duration-200 hover:border-white  bg-opacity-50 px-1  rounded-full hover:bg-opacity-80"
      >
        &#8592;
      </button>
      <button
        onClick={() => nextSlide()}
        className="absolute top-1/2 z-50 right-5 transform -translate-y-1/2 text-white text-3xl border border-transparent hover:border duration-200 hover:border-white bg-opacity-50 px-1  rounded-full hover:bg-opacity-80"
      >
        &#8594;
      </button>
      <div className="absolute bottom-5 w-full flex justify-center space-x-2 z-50">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition duration-300 ${
              currentIndex === index ? "bg-orange-500" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
