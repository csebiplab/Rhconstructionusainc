"use client";
import google from "@/components/__home_components/Images/google.png";
import review from "@/components/__home_components/Images/review.png";
import reviewLogo from "@/components/__home_components/Images/reviewLogo.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlider.css";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const reviews = [
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
  {
    reviewText:
      "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients.",
    author: "Lisa Silva",
    address: "North York",
  },
];

const Review = () => {
  return (
    <div className="section-bg">
      <div className="container">
        <div className="py-6 lg:py-[55px]">
          <div className="text-center">
            <Image
              src={reviewLogo}
              width={95}
              height={18.02}
              alt="reviewLogo"
              className="my-2 mx-auto"
            />
            <h1 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[12px] xl:mt-[15px] xl:mb-[25px] text-center">
              Here’s what to expect when you hire us
            </h1>
          </div>
          {/* =================== Card Section =============== */}
          <Swiper
            // spaceBetween={21}
            // slidesPerView={3}
            // modules={[Navigation]}
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            // slidesPerView={5}
            speed={3000}
            allowTouchMove={false}
            // modules={[Autoplay,Navigation, Scrollbar]}
            breakpoints={breakpoints}
          >
            {reviews.map(({ address, author, reviewText }, i) => (
              <SwiperSlide
                key={i}
                className={`text-center py-4 lg:py-10 md:pr-[21px]`}
              >
                <div className="w-[370px] md:w-full h-[250px] md:h-full card-sd p-[14px] bg-[#fff] md:mx-0 mx-auto">
                  <Image
                    src={google}
                    width={89.92}
                    height={51}
                    alt="google"
                    className="mb-2"
                  />
                  <Image
                    src={review}
                    width={83}
                    height={12}
                    alt="google"
                    className=""
                  />

                  <div className="text-start">
                    <p className="text-[10px] md:text-[12px] mt-4  text-black leading-[22px] md:leading-6">
                      {reviewText}
                    </p>
                    <h6 className="font-semibold lg:text-sm text-xs mt-3">
                      {author}
                    </h6>
                    <p className="text-[#4A4A4A] text-[8px] mt-2">{address}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
