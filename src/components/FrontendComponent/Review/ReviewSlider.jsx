"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";


const ReviewSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      
      }}
    
      modules={[Pagination]}
      className="mySwiper "
    >
      {reviews?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="p-4 mb-10 mt-8">
            <div className="border-t-4 border-[#F78C40]">
              <p className="text-[#090909] font-semibold text-2xl leading-normal my-5">
                {item?.review}
              </p>
              <div className="flex from-white items-center justify-center lg:justify-start gap-4">
                <Image
                  src={item?.pofileImage}
                  alt="Author Profile"
                  height={64}
                  width={64}
                  className="rounded-full border-2 "
                />
                <div>
                  <h3 className="text-[#333333]  text-2xl">
                    {item?.authorName}
                  </h3>
                  <p className="text-[#7E7E7E] text-xl">
                    Assistant Project Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const reviews = [
  {
    review:
      "Rebuilto Construction has been more than a developer - they have acted as a true partner. All rolled up their sleeves and sought solutions instead of sidestepping substantial complications.",
    authorName: "Nafiul Islam Jim",
    position: "Assistant Project Manager",
    pofileImage: "https://i.postimg.cc/bvvjjW0v/Ellipse-1.png",
  },
  {
    review:
      "Rebuilto Construction has been more than a developer - they have acted as a true partner. All rolled up their sleeves and sought solutions instead of sidestepping substantial complications.",
    authorName: "Nafiul Islam Jim",
    position: "Assistant Project Manager",
    pofileImage: "https://i.postimg.cc/bvvjjW0v/Ellipse-1.png",
  },
  {
    review:
      "Rebuilto Construction has been more than a developer - they have acted as a true partner. All rolled up their sleeves and sought solutions instead of sidestepping substantial complications.",
    authorName: "Nafiul Islam Jim",
    position: "Assistant Project Manager",
    pofileImage: "https://i.postimg.cc/bvvjjW0v/Ellipse-1.png",
  },
  {
    review:
      "Rebuilto Construction has been more than a developer - they have acted as a true partner. All rolled up their sleeves and sought solutions instead of sidestepping substantial complications.",
    authorName: "Nafiul Islam Jim",
    position: "Assistant Project Manager",
    pofileImage: "https://i.postimg.cc/bvvjjW0v/Ellipse-1.png",
  },
  {
    review:
      "Rebuilto Construction has been more than a developer - they have acted as a true partner. All rolled up their sleeves and sought solutions instead of sidestepping substantial complications.",
    authorName: "Nafiul Islam Jim",
    position: "Assistant Project Manager",
    pofileImage: "https://i.postimg.cc/bvvjjW0v/Ellipse-1.png",
  },
];

export default ReviewSlider;
