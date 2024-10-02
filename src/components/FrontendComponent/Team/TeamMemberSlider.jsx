"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamMemberCard from "./TeamMembarCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

const TeamMemberSlider = () => {
  return (
    <div>
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
            spaceBetween: 24,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
        {members?.map((item,idx)=>   <SwiperSlide key={idx}>
            <TeamMemberCard title={item?.name} imageUrl={item?.profileImage} />
        </SwiperSlide>)}
      
      </Swiper>
    </div>
  );
};

export default TeamMemberSlider;

const members = [
    {
        name:"Evelyn Luna",
        profileImage:"https://i.postimg.cc/FKtbxRrk/Downloader-La-961709.png",
        position:"Civil Engineer",
        linkedIn:"www.linkedIn.com",
        twitter:"www.twitter.com",
        facebook:"www.facebook.com"
    },
    {
        name:"NAFIUL ISLAM JIM",
        profileImage:"https://i.postimg.cc/GmDG9CFL/Downloader-La-169866.png",
        position:"Civil Engineer",
        linkedIn:"www.linkedIn.com",
        twitter:"www.twitter.com",
        facebook:"www.facebook.com"
    },
    {
        name:"MD SAKIL SAGOR",
        profileImage:"https://i.postimg.cc/C1cf9LgN/Downloader-La-638779.png",
        position:"Civil Engineer",
        linkedIn:"www.linkedIn.com",
        twitter:"www.twitter.com",
        facebook:"www.facebook.com"
    },
]
