"use client";
import "./WhyUs.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import Image from "next/image";

const usualPool = [
  {
    title: "Poor craftsmanship",
  },
  {
    title: "Unreliable scheduling",
  },
  {
    title: "Lack of communication",
  },
  {
    title: "Low-quality materials",
  },
  {
    title: "Messy work habits",
  },
  {
    title: "Inadequate attention to detail",
  },
  {
    title: "Failure to adhere to agreed-upon budget",
  },
  {
    title: "Ignoring client preferences",
  },
  {
    title: "Difficulty in resolving issues or conflicts",
  },
  {
    title: "Subpar post-renovation support",
  },
];
const easyPool = [
  {
    title: "Attention to detail",
  },
  {
    title: "Timely completion of projects",
  },
  {
    title: "Quality craftsmanship",
  },
  {
    title: "Excellent communication skills",
  },
  {
    title: "Knowledgeable the latest trends & materials",
  },
  {
    title: "Respectful of client's space & preferences",
  },
  {
    title: "Ability to work within budget constraints",
  },
  {
    title: "Flexible and accommodating to changes",
  },
  {
    title: "Provides valuable design suggestions",
  },
  {
    title: "Provides transparent pricing and estimates",
  },
];

const WhyUs = () => {
  return (
    <div className="bg___color">
      <div className="container">
        <div className="2xl:py-20 py-10 shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[50px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.hireUs__IconTxt}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
                Hire Our Bathroom 
                  <span className="text-primary"> Remodeling Specialist</span>
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                With a keen eye for design and quality craftsmanship, we offer a comprehensive range of renovation services, from concept to completion. Whether you're looking to update fixtures, install custom cabinetry, or completely overhaul the layout, our experienced team ensures every detail is executed with precision and care.
                </p>
              </div>
            </div>

            <div className=" border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-[22px] font-bold">
              Usual Bathroom Renovators
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icons/x.png"
                      alt="x"
                      width={23}
                      height={23}
                      className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm md:text-lg text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-[22px] font-bold">
              RH Construction USA Inc.
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icons/r.png"
                      alt="r"
                      width={23}
                      height={23}
                      className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px]"
                    />
                    <p className="text-xs md:text-base text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;