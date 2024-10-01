"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ProjectCard from "./ProjectCard";

const ProjectSlide = () => {
  return (
    <MaxWidthWrapper >
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
            <ProjectCard imageUrl="https://i.postimg.cc/KvYPyzXh/Component-2.png" title="" description="We maintain this by ensuring transparency and professional conduct in every aspect of our work." />
        </SwiperSlide>
        <SwiperSlide>
            <ProjectCard imageUrl="https://i.postimg.cc/BbYWj6Q1/Downloader-La-343822.png" title="" description="We maintain this by ensuring transparency and professional conduct in every aspect of our work." />
        </SwiperSlide>
        <SwiperSlide>
            <ProjectCard imageUrl="https://i.postimg.cc/rFwMq6Fr/Component-2-1.png" title="" description="We maintain this by ensuring transparency and professional conduct in every aspect of our work." />
        </SwiperSlide>
        
       
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </MaxWidthWrapper>
  );
};

export default ProjectSlide;
