"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ProjectCard from "./ProjectCard";

const ProjectSlide = () => {
  return (
    <MaxWidthWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectCard
            title=" ARCHITECTURE & BUILDING"
            imageUrl="https://i.postimg.cc/KvYPyzXh/Component-2.png"
            description="We maintain this by ensuring transparency and professional conduct in every aspect of our work."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title=" ARCHITECTURE & BUILDING"
            imageUrl="https://i.postimg.cc/BbYWj6Q1/Downloader-La-343822.png"
            description="We maintain this by ensuring transparency and professional conduct in every aspect of our work."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title="ARCHITECTURE & BUILDING"
            imageUrl="https://i.postimg.cc/rFwMq6Fr/Component-2-1.png"
            description="We maintain this by ensuring transparency and professional conduct in every aspect of our work."
          />
        </SwiperSlide>
      </Swiper>
    </MaxWidthWrapper>
  );
};

export default ProjectSlide;
