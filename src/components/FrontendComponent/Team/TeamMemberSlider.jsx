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
        className="mySwiper my-20"
      >
      
        {members?.map((item,idx)=>   <SwiperSlide className="mb-10" key={idx}>
            <TeamMemberCard data={item} />
        </SwiperSlide>)}
      
      </Swiper>
    </div>
  );
};

export default TeamMemberSlider;

const members = [
  {
    name:"MD SAKIL SAGOR",
    profileImage:"https://i.postimg.cc/cLyjDxkn/Component-5.png",
    position:"Civil Engineer",
    linkedIn:"www.linkedIn.com",
    gmail:"www.gmail.com",
    facebook:"www.facebook.com"
},
    {
        name:"Evelyn Luna",
        profileImage:"https://i.postimg.cc/mZnKHNQV/Component-3.png",
        position:"Civil Engineer",
        linkedIn:"www.linkedIn.com",
        gmail:"www.gmail.com",
        facebook:"www.facebook.com"
    },
    {
        name:"NAFIUL ISLAM JIM",
        profileImage:"https://i.postimg.cc/hvXwYfq9/Component-4.png",
        position:"Civil Engineer",
        linkedIn:"www.linkedIn.com",
        gmail:"www.gmail.com",
        facebook:"www.facebook.com"
    },
  {
    name:"MD SAKIL SAGOR",
    profileImage:"https://i.postimg.cc/cLyjDxkn/Component-5.png",
    position:"Civil Engineer",
    linkedIn:"www.linkedIn.com",
    gmail:"www.gmail.com",
    facebook:"www.facebook.com"
},
    {
        name:"Evelyn Luna",
        profileImage:"https://i.postimg.cc/mZnKHNQV/Component-3.png",
        position:"Civil Engineer",
        linkedIn:"www.linkedIn.com",
        gmail:"www.gmail.com",
        facebook:"www.facebook.com"
    },
    {
        name:"NAFIUL ISLAM JIM",
        profileImage:"https://i.postimg.cc/hvXwYfq9/Component-4.png",
        position:"Civil Engineer",
        linkedIn:"www.linkedIn.com",
        gmail:"www.gmail.com",
        facebook:"www.facebook.com"
    },
   
]
