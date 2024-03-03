"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";

// Swiper slider breakpoints Object
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  639: {
    slidesPerView: 3,
  },
  865: {
    slidesPerView: 3,
  },
  1000: {
    slidesPerView: 4,
  },
  1500: {
    slidesPerView: 5,
  },
  1700: {
    slidesPerView: 6,
  },
};

const UserReviewSection = () => {
  return (
    <div>
      <h1>Reviews</h1>
      <div className="">
        <Swiper
          // navigation={true}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={4}
          breakpoints={breakpoints}
          spaceBetween={50}
          autoplay={{
            delay: 3000,
          }}
          className=""
        >
          {Array.from({ length: 10 }).map((__, i) => (
            <SwiperSlide key={i}>
              <ReviewCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserReviewSection;
