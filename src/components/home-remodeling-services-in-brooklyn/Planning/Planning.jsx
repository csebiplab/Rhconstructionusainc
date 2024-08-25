"use client";

import "./Planning.css";

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
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
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
  1536: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
};

const services = [
  {
    title: "Define Your Goals and Objectives",
  },
  {
    title: "Set a Budget",
  },
  {
    title: "Research and Gather Ideas",
  },
  {
    title: "Prioritize Renovation Areas",
  },
  {
    title: "Find Reliable Contractors and Suppliers",
  },
  {
    title: "Obtain Necessary Permits and Approvals",
  },
  {
    title: "Create a Timeline for the Project",
  },
  {
    title: "Prepare for Potential Challenges and Contingencies",
  },
  {
    title: "Consider Long-Term Maintenance and Sustainability",
  },
  {
    title: "Communicate Effectively with Everyone Involved",
  },
  {
    title: "Consider Design and Aesthetic Preferences",
  },
  {
    title: "Explore Financing Options",
  },
  {
    title: "Ensure Safety Measures are in Place",
  },
  {
    title: "Prepare for the Final Inspection and Completion of the Project",
  }
];

const Planning = () => {
  return (
    <div className="bg___color">
      <div className="!overflow-hidden common__padding__top">
        <div className="">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.planning__HeadingIconText}/>
              </div>
              <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-normal text-black text-center pb-[25px]">
              Considerations to Start Planning for Your <span className="text-primary-50">Home Remodeling</span>
              </h3>
            </div>

            <div className="w-full h-[3px] bg-black" />

            <div className="">
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
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="!h-auto !md:h-full">
                    <div className="flex justify-around ">
                        <div className="w-[3px] h-[80px] bg-black" />
                      </div>
                    <div className="!h-full">
                      
                      <div className="cart   px-3 py-4">
                        <p className="text-white text-lg font-bold text-center">
                          {service.title}{" "}
                        </p>
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

export default Planning;
