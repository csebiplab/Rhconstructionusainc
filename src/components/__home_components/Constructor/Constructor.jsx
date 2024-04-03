"use client";
import cons from "@/components/__home_components/Images/const.png";
import pp1 from "@/components/__home_components/Images/pp1.png";
import pp2 from "@/components/__home_components/Images/pp2.png";
import pp3 from "@/components/__home_components/Images/pp3.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Constructor.css";
import { SwiperNavButtons } from "./SwiperSliderButton";
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};
const Constructor = () => {
    return (
       <div className="section-bg">
        <div className="container">
         <div className="py-6 lg:py-[55px]">
            <div className="text-center">
            <Image
            src={cons}
            width={115}
            height={18.02}
            alt="cons"
            className="my-2 mx-auto"
          />
          <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center">
          WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
          </h2>
            </div>
            {/* =================== Card Section =============== */}
            {/* <div>
            <div className="grid grid-cols-1 md:px-3 lg:px-6 md:grid-cols-3 md:gap-4 lg:gap-20 text-center md:py-4 lg:py-10">
              <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                  src={pp1}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                  
                />
                <div className="text-center">                  
                <h4 className="lg:text-[20px] text-sm py-2 mt-2">Reputation and Experience</h4>
                  <p className="text-[10px] md:text-[16px] mt-4  text-black leading-[20px] md:leading-6">
                  Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.
                  </p>
                </div>
              </div>
              <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                  src={pp2}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                  
                />
                <div className="text-center">                  
                <h4 className="md:text-[20px] text-sm py-2">Specialization and Expertise</h4>
                  <p className="text-[10px] md:text-[16px] mt-4  text-black leading-[20px] md:leading-6">
                  Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project. Assess whether the contractor specializes.
                  </p>
                </div>
              </div>
              <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                 src={pp3}
                 width={100}
                 height={95}
                 alt=""
                 className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]" 
                
                />
                <div className="text-center">
                  <h4 className="md:text-[20px] text-sm py-2">Communication and Transparency</h4>
                  <p className="text-[10px] md:text-[16px] mt-4  text-black leading-[20px] md:leading-6">
                  Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges. Regular updates and clear channels of communication will help prevent misunderstandings.
                  </p>
                </div>
              </div>
            </div>
            </div> */}

            <Swiper
          // spaceBetween={21}
          // slidesPerView={3}
          modules={[Navigation]}
          breakpoints={breakpoints}
          
        >
          <SwiperSlide className={`text-center py-4 lg:py-10 px-20 md:px-6`}>
          <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                  src={pp1}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                  
                />
                <div className="text-center">                
                <h4 className="lg:text-[20px] text-sm py-2">Reputation and Experience</h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                  Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.
                  </p>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 lg:py-10 px-20 md:px-6`}>
           <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                  src={pp2}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                  
                />
                <div className="text-center">                 
                <h4 className="lg:text-[20px] text-sm py-2">Specialization and Expertise</h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                  Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project. Assess whether the contractor specializes.
                  </p>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 lg:py-10 px-20 md:px-6`}>
          <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                 src={pp3}
                 width={100}
                 height={95}
                 alt=""
                 className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]" 
                
                />
                <div className="text-center">
                  <h4 className="lg:text-[20px] text-sm py-2">Communication and Transparency</h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                  Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges. Regular updates and clear channels of communication will help prevent misunderstandings.
                  </p>
                </div>
              </div>
          </SwiperSlide>
           <SwiperSlide className={`text-center py-4 lg:py-10 px-20 md:px-6`}>
          <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                  src={pp1}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                  
                />
                <div className="text-center">                
                <h4 className="lg:text-[20px] text-sm py-2 mt-2">Reputation and Experience</h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                  Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.
                  </p>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 lg:py-10 px-20 md:px-6`}>
           <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                  src={pp2}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                  
                />
                <div className="text-center">                 
                <h4 className="lg:text-[20px] text-sm py-2 mt-2">Specialization and Expertise</h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                  Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project. Assess whether the contractor specializes.
                  </p>
                </div>
              </div>
          </SwiperSlide>
          {/* <SwiperSlide className={`text-center py-4 lg:py-10 px-20 md:px-6`}>
          <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                 src={pp3}
                 width={100}
                 height={95}
                 alt=""
                 className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]" 
                
                />
                <div className="text-center">
                  <h4 className="lg:text-[20px] text-sm py-2 mt-2">Communication and Transparency</h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                  Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges. Regular updates and clear channels of communication will help prevent misunderstandings.
                  </p>
                </div>
              </div>
          </SwiperSlide> */}
          
          
          

          <SwiperNavButtons />
        </Swiper>
        </div>
       </div>
       </div>
    );
};

export default Constructor;