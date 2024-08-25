"use client";

import Image from "next/image";
import { useState } from "react";

// import bathroom from "../../../../public/assets/serviceImgs/bathroom.png";
// import sheetrock from "../../../../public/assets/serviceImgs/sheetrock.png";
// import plastering from "../../../../public/assets/serviceImgs/plastering.png";
// import plumbing from "../../../../public/assets/serviceImgs/plumbing.png";
// import kitchen from "../../../../public/assets/serviceImgs/kitchen.png";
// import painting from "../../../../public/assets/serviceImgs/painting.png";

import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";
import { smHeadingTexts } from "@/constants/smHeadingTexts";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

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
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const interior = [
  {
    title: "Bathroom Remodeling",
    img: "/assets/serviceImgs/bathroom.png",
    // img: bathroom,
  },
  {
    title: "Sheetrock",
    img: "/assets/serviceImgs/sheetrock.png",
    // img: sheetrock,
  },
  {
    title: "Plastering",
    img: "/assets/serviceImgs/plastering.png",
    // img: plastering,
  },
  {
    title: "Plumbing",
    img: "/assets/serviceImgs/plumbing.png",
    // img: plumbing,
  },
  {
    title: "Kitchen Remodeling",
    img: "/assets/serviceImgs/kitchen.png",
    // img: kitchen,
  },
  {
    title: " Painting",
    img: "/assets/serviceImgs/painting.png",
    // img: painting,
  },
];
const exterior = [
  {
    title: "Roofing",
    img: "/assets/serviceImgs/roofing.png",
  },
  {
    title: "Pointing",
    img: "/assets/serviceImgs/pointing.png",
  },
  {
    title: "Water Proofing",
    img: "/assets/serviceImgs/water.png",
  },
  {
    title: "Brown Stone Repair",
    img: "/assets/serviceImgs/brown.png",
  },
  {
    title: "Brick Works",
    img: "/assets/serviceImgs/brick.png",
  },
  {
    title: " Power Wash",
    img: "/assets/serviceImgs/power.png",
  },
];

export default function OurServices() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className=" bg-[#FFB7031A]">
      <div className="container py-6 lg:py-[55px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-4 lg:p-5 md:p-3 items-end text-sm">
          <div className="">
            <div className="flex justify-center md:justify-start items-center pb-2">
              <SmallHeadingWithIcon
                smallHeadingText={smHeadingTexts.ourServices}
              />
            </div>
            <h4 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start">
              Our Services
            </h4>
            <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start font-semibold">
              Enjoy a stress-free construction service with our unique build
              process.
            </p>
            <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start">
              <span className="font-semibold">RH Construction USA</span>, is
              your trusted partner for top-notch construction services,
              dedicated to bringing your dream project to life. From
              conceptualization to completion, we prioritize quality
              craftsmanship, timely delivery, and cost-effective solutions to
              meet and exceed your expectations.
            </p>
          </div>

          <div className="hidden md:block">
            <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start">
              At our company, we understand that your dream project is a
              significant investment, and we take pride in delivering
              unparalleled construction service that reflects our unwavering
              commitment to customer satisfaction. Whether you're envisioning a
              residential masterpiece or a commercial endeavor, our experienced
              team is equipped to handle a diverse range of projects.
            </p>
          </div>
        </div>

        {/* taggle button */}
        <div className="flex justify-center items-center lg:py-6 py-4 mb-2 md:mb-6 lg:mb-12 mx-2 lg:px-0 md:px-4">
          <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white ">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`flex items-center space-x-[6px] lg:px-32 px-4 rounded-3xl lg:py-4  py-2  lg:text-[20px] text-sm font-medium ${
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
              Interior
            </span>
            <span
              className={`flex items-center space-x-[6px] lg:px-32 px-4 rounded-3xl lg:py-4 py-2 lg:text-[20px] text-sm font-medium ${
                isChecked ? " text-white bg-black " : "text-body-color"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mr-[6px] fill-current"
              ></svg>
              Exterior
            </span>
          </label>
        </div>

        <div className="overflow-hidden py-5 lg:py-10">
          {!isChecked && (
            // <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 gap-y-8">

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
              allowTouchMove={true}
              className="!px-5 md:px-0 !overflow-visible"
            >
              {interior.map((service, index) => (
                <SwiperSlide
                  key={index}
                  className="col-span-1 border-2 rounded border-black"
                >
                  <div className="mx-auto rounded-lg bg-[#ffb80305] relative">
                    <div className="pt-4">
                      <p className="mt-4 py-5 mx-auto text-center text-xs lg:text-xl">
                        {service.title}{" "}
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        className="w-5 h-5 lg:w-[58px] lg:h-[58px]"
                        src={service?.img}
                        width={58}
                        height={58}
                        alt="Profile"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
              allowTouchMove={true}
              className="!px-5 md:px-0 !overflow-visible"
            >
              {exterior.map((service, index) => (
                <SwiperSlide
                  key={index}
                  className="col-span-1 border-2 rounded border-black"
                >
                  <div className="mx-auto rounded-lg bg-[#ffb80305] relative">
                    <div className="pt-4 pb-3">
                      <p className="mt-4 py-5 mx-auto text-center text-xs lg:text-xl">
                        {service.title}{" "}
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        className="w-5 h-5 lg:w-[58px] lg:h-[58px]"
                        src={service?.img}
                        width={58}
                        height={58}
                        alt="Profile"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="block md:hidden">
            <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start">
              At our company, we understand that your dream project is a
              significant investment, and we take pride in delivering
              unparalleled construction service that reflects our unwavering
              commitment to customer satisfaction. Whether you're envisioning a
              residential masterpiece or a commercial endeavor, our experienced
              team is equipped to handle a diverse range of projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
