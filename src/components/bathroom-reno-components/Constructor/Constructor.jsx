"use client";
import pp1 from "@/components/__home_components/Images/pp1.png";
import pp2 from "@/components/__home_components/Images/pp2.png";
import pp3 from "@/components/__home_components/Images/pp3.png";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Constructor.css";
import { SwiperNavButtons } from "./SwiperSliderButton";


const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },

};

const slideData = [
  {
    imgSrc: pp1,
    title: 'Reputation and Experience',
    description: `Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.`,
  },
  {
    imgSrc: pp2,
    title: 'Specialization and Expertise',
    description: `Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project.`,
  },
  {
    imgSrc: pp3,
    title: 'Communication and Transparency',
    description: `Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges.`,
  },
  {
    imgSrc: pp1,
    title: 'Reputation and Experience',
    description: `Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.`,
  },
  {
    imgSrc: pp2,
    title: 'Specialization and Expertise',
    description: `Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project.`,
  },
  {
    imgSrc: pp3,
    title: 'Communication and Transparency',
    description: `Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges.`,
  },
  // Add more objects as needed
];



const Constructor = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className="">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.chooseUs__IconTxt}/>
            </div>

            <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[12px] xl:mt-[15px] xl:mb-[25px] text-center">
            Why Choose Our <span className="text-primary">Bathroom Remodeling Services</span>
            </h2>
          </div>

         
          <Swiper
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
      breakpoints={breakpoints}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} className={`text-center py-4 lg:py-10 px-20 md:px-14 lg:px-6`}>
          <div className="w-full h-auto md:h-[353px] card__bg p-[10px]">
            <Image
              src={slide.imgSrc}
              width={100}
              height={95}
              alt="RH"
              className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
            />
            <div className="text-center">
              <h4 className="lg:text-[20px] text-sm py-2">{slide.title}</h4>
              <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                {slide.description}
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
  );
};

export default Constructor;
