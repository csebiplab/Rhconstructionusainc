"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import "./OurServices.css";
import p1 from "../../../../public/assets/kitchen/p1.png"
import p2 from "../../../../public/assets/kitchen/p2.png"
import p3 from "../../../../public/assets/kitchen/p3.png"
import p4 from "../../../../public/assets/kitchen/p4.png"
import p5 from "../../../../public/assets/kitchen/p5.png"
import p6 from "../../../../public/assets/kitchen/p6.png"
import p7 from "../../../../public/assets/kitchen/p7.png"
import p8 from "../../../../public/assets/kitchen/p8.png"
import p9 from "../../../../public/assets/kitchen/p9.png"
import p10 from "../../../../public/assets/kitchen/p10.png"
import p11 from "../../../../public/assets/kitchen/p11.png"
import p12 from "../../../../public/assets/kitchen/p12.png"
import p13 from "../../../../public/assets/kitchen/p13.png"
import p14 from "../../../../public/assets/kitchen/p14.png"


import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

const services = [
  {
    title: "Experienced team of renovators",
    img: p1,
  },
  {
    title: "Specialize in home and commercial property renovations",
    img: p2,
  },
  {
    title: "Customer satisfaction guaranteed",
    img: p3,
  },
  {
    title: "Free consultations and estimates",
    img: p4,
  },
  {
    title: "Fully licensed and insured",
    img: p5,
  },
  {
    title: "Timely project completion",
    img: p6,
  },
  {
    title: "Competitive Pricing",
    img: p7,
  }
];
const services2 = [
  {
    title: "Inefficient communication with renovators",
    img: p8,
  },
  {
    title: "Lack of clarity on project expectations",
    img: p9,
  },
  {
    title: "Poor project management",
    img: p10,
  },
  {
    title: "Insufficient supervision and quality control",
    img: p11,
  },
  {
    title: "Delayed timelines",
    img: p12,
  },
  {
    title: "Cost overruns",
    img: p13,
  },
  {
    title: "Client dissatisfaction and negative feedback",
    img: p14,
  }
];

const OurServices = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="!overflow-hidden">
      <div className="bg___color">
        <div className="container common__padding__top">
        <div className="">
            <div className="flex justify-center items-center pb-2">
            <HeadingIcon text={headingIconText.doanddonot__IconTxt}/>
              
            </div>
            <h3 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center">
            Our Renovators <span className="text-primary"> Do or Don't</span>
            </h3>
          </div>

          {/* taggle button */}
          <div className="flex justify-center items-center py-5 mb-12 mx-2 ">
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white border border-black">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center border pr-5  lg:px-32 rounded-3xl lg:py-4 py-2  text-xs md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
                  !isChecked ? "text-white bg-black " : "text-body-color"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                >
                  <g clipPath="url(#clip0_3122_652)"></g>
                  <defs>
                    <clipPath id="clip0_3122_652">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Our renovators do or have
              </span>
              <span
                className={`flex items-center pr-5 lg:px-32 rounded-3xl lg:py-4 py-2 text-xs md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
                  isChecked ? "text-white bg-black " : "text-body-color"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                ></svg>
                Our renovators don't do
              </span>
            </label>
          </div>

          <div className="lg:mt-15 mt-10">
            {!isChecked && (
              <Swiper
                modules={[Navigation, Autoplay]}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={3000}
                allowTouchMove={false}
                className="!px-5 md:px-0 !overflow-visible"
              >
                {services.map((service, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white border-2 rounded border-black !h-auto !md:h-full px-2 py-6 md:py-0"
                  >
                    <div className="!h-full mx-auto relative px-2">
                      <div className="py-7">
                        <p className="mt-4 py-5 mx-auto text-center text-xs md:text-sm xl:text-base 3xl:text-lg 5xl:text-[20px] font-bold">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute  -top-10 md:-top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={service.img}
                          height={58}
                          width={58}
                          className="w-14 h-14 lg:w-[80px] lg:h-[80px] p-[14px] lg:p-[20px] bg-white rounded-full border-2 border-black"
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons/>
              </Swiper>
            )}

            {isChecked && (
              <Swiper
                modules={[Navigation, Autoplay]}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={3000}
                allowTouchMove={false}
                className="!px-5 md:px-0 !overflow-visible"
              >
                {services2.map((service, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white rounded border-2 border-black !h-auto !md:h-full px-2 py-6 md:py-0"
                  >
                    <div className="!w-full !h-full mx-auto  rounded-lg relative">
                      <div className=" py-7 ">
                        <p className="mt-4 py-5 mx-auto text-center text-xs md:text-sm xl:text-base 3xl:text-lg 5xl:text-[20px] font-bold">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute -top-6 md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={service.img}
                          height={58}
                          width={58}
                          className="w-14 h-14 lg:w-[80px] lg:h-[80px] p-[14px] lg:p-[20px] bg-white rounded-full border-2 border-black"
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons/>
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
