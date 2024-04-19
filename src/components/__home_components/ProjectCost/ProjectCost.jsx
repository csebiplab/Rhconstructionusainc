"use client";
import cost1 from "@/components/__home_components/Images/cost1.png";
import cost2 from "@/components/__home_components/Images/cost2.png";
import cost3 from "@/components/__home_components/Images/cost3.png";
import cost4 from "@/components/__home_components/Images/cost4.png";
import cost5 from "@/components/__home_components/Images/cost5.png";
import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const slideData = [
  {
    imgSrc: cost1,
    title: 'Reputation and Experience',
  },
  {
    imgSrc: cost2,
    title: 'Specialization and Expertise',
    
  },
  {
    imgSrc: cost3,
    title: 'Communication and Transparency',
    
  },
  {
    imgSrc: cost4,
    title: 'Reputation and Experience',
    
  },
  {
    imgSrc: cost5,
    title: 'Specialization and Expertise',
    
  },
  {
    imgSrc: cost1,
    title: 'Reputation and Experience',
  },
  {
    imgSrc: cost2,
    title: 'Specialization and Expertise',
    
  },
  {
    imgSrc: cost3,
    title: 'Communication and Transparency',
    
  },
  
];


const ProjectCost = () => {
  return (
    <div className="section-bg">
      <div className="container">
        <div className="md:flex py-6 lg:py-[55px] lg:gap-10 md:gap-3">
          <div>
            <div className="flex justify-center md:block">
              <SmallHeadingWithIcon
                smallHeadingText={smHeadingTexts.projectCost}
              />
            </div>

            <h1 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start">
              HOW MUCH DOES <br/> A CONSTRUCTION PROJECT COST?
            </h1>
          </div>
          <div>
            <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start mt-0  md:mt-1 lg:mt-4">
              The cost of a construction project can vary widely depending on{" "}
              <br /> various factors such as the size, complexity, location,
              materials used,
              <br />
              labor costs, and any additional requirements or unforeseen
              circumstances. <br />
              Here are some key points to consider when estimating
              <br /> the cost of a construction project:
            </p>
          </div>
        </div>

        
        {/* =================== Card Section =============== */}
      
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
            spaceBetween={74}
          >
            {slideData.map((data, index) => (
              <SwiperSlide key={index} className={`text-center py-4 lg:py-10 px-[90px] md:px-0`}>
                <div
                className={`${
                  (index + 2) % 2 === 0 ? "lg:-mt-10 md:-mt-5" : ""
                }`}
              >
              
                <div className="w-full shadow-md p-0 mt-[45px] lg:mt-[65px] ">
                  
                <Image
                  src={data.imgSrc}
                  width={318}
                  height={238}
                  alt="cost"
                  className="w-full"
                />
                  <h5 className="lg:text-base text-sm py-2 text-center">
                    {data?.title}
                  </h5>
                </div>
              </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
      </div>
    </div>
  );
};

export default ProjectCost;
