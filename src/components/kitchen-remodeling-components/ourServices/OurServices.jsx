"use client";

import Image from "next/image";
import { useState } from "react";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

const interior = [
  {
    title: "Experienced team of renovators",
    img: "/assets/services/bithrom.png",
  },
  {
    title: "Specialize in home and commercial property renovations",
    img: "/assets/services/sheetrock.png",
  },
  {
    title: "Customer satisfaction guaranteed",
    img: "/assets/services/plastering.png",
  },
  {
    title: "Free consultations and estimates",
    img: "/assets/services/plumbing.png",
  },
  {
    title: "Fully licensed and insured",
    img: "/assets/services/kitchen.png",
  },
  {
    title: "Timely project completion",
    img: "/assets/services/painting.png",
  },
  {
    title: "Competitive Pricing",
    img: "/assets/services/painting.png",
  },
];
const exterior = [
  {
    title: "Inefficient communication with renovators",
    img: "/assets/services/roofing.png",
  },
  {
    title: "Lack of clarity on project expectations",
    img: "/assets/services/pointing.png",
  },
  {
    title: "Poor project management",
    img: "/assets/services/water.png",
  },
  {
    title: "Insufficient supervision and quality control",
    img: "/assets/services/brown.png",
  },
  {
    title: "Delayed timelines",
    img: "/assets/services/brick.png",
  },
  {
    title: "Cost overruns",
    img: "/assets/services/power.png",
  },
  {
    title: "Client dissatisfaction and negative feedback",
    img: "/assets/services/power.png",
  },
];

export default function OurServices() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className=" ">
      <div className="container py-6 lg:py-[55px]">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-4 lg:p-5 md:p-3 items-end text-sm">
          
        </div> */}
        <div className="">
            <div className="flex justify-center items-center pb-2">
            <HeadingIcon text={headingIconText.doanddonot__IconTxt}/>
              
            </div>
            <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center">
            Our Renovators <span className="text-primary"> Do or Don't</span>
            </h2>
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
              Our renovators do or have
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
              Our renovators don't do
            </span>
          </label>
        </div>

        <div className="py-5 lg:py-10">
          {!isChecked && (
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 gap-y-8">
              {interior.map((service, index) => (
                <div
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
                </div>
              ))}
            </div>
          )}
          {isChecked && (
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 gap-y-8">
              {exterior.map((service, index) => (
                <div
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
                </div>
              ))}
            </div>
          )}

          {/* PHONE VIEW SWIPER SLIDER STARTS */}
          {/* <div className="hidden mb-5">
            <Swiper
              slidesPerView={1}
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              speed={3000}
              allowTouchMove={false}
            >
              {interior.map((service, index) => (
                <SwiperSlide key={index} className={`text-center !px-10`}>
                  <div className="col-span-1 border-2 border-black px-10 mx-auto rounded-lg shadow-lg bg-[#ffb80305] relative">
                    <div className="">
                      <div className=" py-7 ">
                        <p className="mt-4 py-5  mx-auto text-center lg:text-[20px]  text-xs">
                          {service.title}{" "}
                        </p>
                      </div>
                      <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className=" lg:w-20 lg:h-20 w-14 h-14 bg-white rounded-full border-black"
                          src={service.img.src}
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <SwiperNavButtons />
            </Swiper>
          </div> */}
          {/* PHONE VIEW SWIPER SLIDER ENDS */}

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
