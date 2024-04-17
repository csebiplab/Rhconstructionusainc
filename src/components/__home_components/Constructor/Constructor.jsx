"use client";
import pp1 from "@/components/__home_components/Images/pp1.png";
import pp2 from "@/components/__home_components/Images/pp2.png";
import pp3 from "@/components/__home_components/Images/pp3.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Constructor.css";
import { SwiperNavButtons } from "./SwiperSliderButton";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";

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
            <div className="flex justify-center items-center">
              <SmallHeadingWithIcon
                smallHeadingText={smHeadingTexts.contractors}
              />
            </div>

            <h1 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center">
              WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
            </h1>
          </div>

          <Swiper
            // spaceBetween={21}
            // slidesPerView={3}
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
            <SwiperSlide className={`text-center py-4 lg:py-10 px-20 md:px-6`}>
              <div className="w-full card-sd rounded-sm bg-white p-[10px]">
                <Image
                  src={pp1}
                  width={100}
                  height={95}
                  alt="RH"
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                />
                <div className="text-center">
                  <h4 className="lg:text-[20px] text-sm py-2">
                    Reputation and Experience
                  </h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                    Begin by researching the contractor's reputation and
                    experience in the industry. Look for reviews, testimonials,
                    and examples of past projects. A seasoned contractor with a
                    positive track record is more likely to deliver quality
                    results.
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
                  alt="RH"
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                />
                <div className="text-center">
                  <h4 className="lg:text-[20px] text-sm py-2">
                    Specialization and Expertise
                  </h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                    Assess whether the contractor specializes in the type of
                    work you need. A specialist will likely have more in-depth
                    knowledge and skills in a specific area, leading to better
                    outcomes for your project. Assess whether the contractor
                    specializes.
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
                  alt="RH"
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                />
                <div className="text-center">
                  <h4 className="lg:text-[20px] text-sm py-2">
                    Communication and Transparency
                  </h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                    Effective communication is key to any successful project.
                    Ensure the contractor is transparent about timelines, costs,
                    and potential challenges. Regular updates and clear channels
                    of communication will help prevent misunderstandings.
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
                  alt="RH"
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                />
                <div className="text-center">
                  <h4 className="lg:text-[20px] text-sm py-2 mt-2">
                    Reputation and Experience
                  </h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                    Begin by researching the contractor's reputation and
                    experience in the industry. Look for reviews, testimonials,
                    and examples of past projects. A seasoned contractor with a
                    positive track record is more likely to deliver quality
                    results.
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
                  alt="RH"
                  className="mx-auto mt-[10px] w-[61px] md:w-[75px] lg:w-[100px] h-[61px] md:h-[70px] lg:h-[95px]"
                />
                <div className="text-center">
                  <h4 className="lg:text-[20px] text-sm py-2 mt-2">
                    Specialization and Expertise
                  </h4>
                  <p className="text-[10px] md:text-[16px] mt-2 mb-3  text-black leading-[20px] md:leading-6">
                    Assess whether the contractor specializes in the type of
                    work you need. A specialist will likely have more in-depth
                    knowledge and skills in a specific area, leading to better
                    outcomes for your project. Assess whether the contractor
                    specializes.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Constructor;
