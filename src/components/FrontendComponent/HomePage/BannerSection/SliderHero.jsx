"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { VscStarFull } from "react-icons/vsc";
import SkeletonSlide from "./SkeletonSlide";

const CustomSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (slides.length > 0) {
      const autoSlideTimeout = setTimeout(() => {
        nextSlide();
      }, 5000);
      return () => clearTimeout(autoSlideTimeout);
    }
  }, [currentIndex, slides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleStart = (event) => {
    setIsDragging(true);
    setStartPosition(
      event.type.includes("mouse") ? event.clientX : event.touches[0].clientX
    );
    setCurrentTranslate(0);
  };

  const handleMove = (event) => {
    if (isDragging) {
      const currentPosition = event.type.includes("mouse")
        ? event.clientX
        : event.touches[0].clientX;
      const distance = currentPosition - startPosition;
      setCurrentTranslate(distance);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (currentTranslate < -100) {
      nextSlide();
    }
    if (currentTranslate > 100) {
      prevSlide();
    }
    setCurrentTranslate(0);
  };

  return (
    <div className="mt-16">
      <div
        className="relative w-full h-[80vh] overflow-hidden shadow-lg shadow-blue-500/50"
        ref={sliderRef}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {loading
          ? [1, 2, 3].map((_, index) => <SkeletonSlide key={index} />)
          : slides?.map((slide, index) => (
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
                <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-2 md:px-10">
                  <MaxWidthWrapper>
                    <div className="flex flex-col justify-center items-start h-full text-left text-white">
                      <h1 className="text-3xl lg:text-6xl font-bold uppercase">
                        {slide?.title}
                        <span
                          className="text-transparent stroke-2 stroke-[#F97316] outline-0 ml-2"
                          style={{
                            WebkitTextStroke: "2px #F97316",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {slide?.colorWord}
                        </span>
                        <span className="mt-2 md:mt-4 lg:mt-8 block">
                          {slide?.lastTitle}
                        </span>
                      </h1>
                      <p className="my-4 lg:my-16 w-11/12 md:w-2/3 text-lg font-medium">
                        {slide?.subtitle}
                      </p>
                      <Link
                        href={slide?.buttonLink}
                        className="flex items-center pl-6 border-2 border-white hover:border-[#F97316] rounded-full text-white hover:bg-[#F97316] hover:text-white text-md font-semibold uppercase transition-colors duration-300 group"
                      >
                        {slide?.buttonText}
                        <span className="ml-3 inline-flex items-center justify-center w-12 h-12 bg-white rounded-full">
                          <GoArrowUpRight className="text-black transform transition-transform duration-300 group-hover:rotate-45" />
                        </span>
                      </Link>
                    </div>
                    <hr />
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        {slide?.location && (
                          <p className="flex items-center gap-2 text-white text-xl">
                            <SlLocationPin className="text-[#F97316] text-2xl" />
                            {slide?.location}
                          </p>
                        )}
                      </div>
                      <div className="hidden md:flex items-center gap-4">
                        <div>
                          <Image
                            alt="our vision image"
                            height={40}
                            width={40}
                            src="/slider12.png"
                          />
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-xl">
                            {Array.from({ length: 5 }, (_, index) => (
                              <VscStarFull
                                key={index}
                                className="text-[#F97316]"
                              />
                            ))}
                          </p>
                          <p className="text-white mt-2">
                            Trusted By 500+ Companies
                          </p>
                        </div>
                      </div>
                    </div>
                  </MaxWidthWrapper>
                </div>
              </div>
            ))}

        <button
          onClick={prevSlide}
          className="absolute hidden top-1/2 z-50 left-5 transform -translate-y-1/2 text-white text-3xl border border-transparent hover:border duration-200 hover:border-white bg-opacity-50 px-1 rounded-full hover:bg-opacity-80"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="hidden absolute top-1/2 z-50 right-5 transform -translate-y-1/2 text-white text-3xl border border-transparent hover:border duration-200 hover:border-white bg-opacity-50 px-1 rounded-full hover:bg-opacity-80"
        >
          &#8594;
        </button>
        <div className="absolute bottom-5 w-full flex justify-center space-x-2 z-50">
          {slides?.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full cursor-pointer transition duration-300 ${
                currentIndex === index ? "bg-orange-500 w-9" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
