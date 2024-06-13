"use client";

import "./OurService.css";

import p1 from "../../../../public/assets/icons/p1.png";
import p2 from "../../../../public/assets/icons/p2.png";
import p3 from "../../../../public/assets/icons/p3.png";
import p4 from "../../../../public/assets/icons/p4.png";
import p5 from "../../../../public/assets/icons/p5.png";

import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "@/components/__home_components/Review/SwiperSliderButton";

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
    title: "Ignoring proper ventilation installation",
    img: p1,
  },
  {
    title: "Cutting corners on  measures",
    img: p2,
  },
  {
    title: "Neglecting to obtain necessary permits",
    img: p3,
  },
  {
    title: "Using substandard plumbing fixtures",
    img: p4,
  },
  {
    title: "Failing to address mold and mildew issues",
    img: p5,
  },
  {
    title: " Medical offices cleaning",
    img: p1,
  },
  {
    title: " Medical offices cleaning",
    img: p2,
  },
  {
    title: " Medical offices cleaning",
    img: p3,
  },
];

const OurService = () => {
  return (
    <div className="bg___color common__padding__top">
      <div className="!overflow-hidden">
        <div className="">
          <div className="container">
            <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-40 gap-4  p-5 items-center text-sm ">
              <div className="  ">
                <div className="flex justify-center lg:justify-normal items-center">
                  <HeadingIcon text={headingIconText.service__IconTxt} />
                </div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
                  Our Bathroom <br /> Remodeling Contractors <br />{" "}
                  <span className="text-primary"> Don't Do</span>
                </h3>
              </div>

              <div className="flex justify-center items-center">
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                  We have done bathroom remodeling so many times. When
                  considering a bathroom remodeling project in Brooklyn, there
                  are certain actions that contractors should avoid to ensure
                  the best results and customer satisfaction:
                </p>
              </div>
            </div>

            <div className="lg:mt-10 mt-5">
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
                    className="bg-white border-4 rounded border-black !h-auto !md:h-full px-2 py-6 md:py-0"
                  >
                    <div className="mx-auto relative px-2">
                      <div className="">
                        <p className="mt-4 py-5 mx-auto text-center text-lg font-bold">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute  -top-10 md:-top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={service.img}
                          height={58}
                          width={58}
                          className="w-14 h-14 lg:w-[80px] lg:h-[80px] p-[14px] lg:p-[20px] bg-white rounded-full border-[3px] border-black"
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
