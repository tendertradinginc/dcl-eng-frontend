"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { useEffect, useState } from "react";

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
    <div className="relative w-full h-[600px] overflow-hidden shadow-lg shadow-blue-500/50">
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
                  BUILT ON{" "}
                  <span
                    className="text-transparent stroke-2 stroke-[#F97316] outline-0"
                    style={{
                      WebkitTextStroke: "2px #F97316",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    TRUST
                  </span>{" "}
                  <span className="mt-4 block">SINCE 1980</span>
                </h1>
                <p className="mt-4 w-11/12 md:w-2/3 text-lg font-medium">
                  Focusing on medium to large-scale commercial construction
                  projects, we work with both investors and developers to create
                  landmarks that make an impact.
                </p>
                <button className="mt-8 px-6 py-3 text-white bg-[#F97316] rounded-lg hover:bg-[#EA5B10] transition duration-300">
                  Explore Our Project
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
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-gray-900 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 shadow-lg shadow-blue-500/50"
      >
        &#8592;
      </button>
      <button
        onClick={() => nextSlide()}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-gray-900 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 shadow-lg shadow-blue-500/50"
      >
        &#8594;
      </button>

      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
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
