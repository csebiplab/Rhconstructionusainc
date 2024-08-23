"use client";
import "./WhyHireUs.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import Image from "next/image";

const usualPool = [
  {
    title: "Inexperienced Technicians",
  },
  {
    title: "Use of Low-Quality Materials",
  },
  {
    title: "Poor Communication",
  },
  {
    title: "Overcharging for Services",
  },
  {
    title: "Inconsistent Workmanship",
  },
  {
    title: "Delayed Project Completion",
  },
  {
    title: "Lack of Transparency in Pricing",
  },
  {
    title: "Limited Expertise",
  },
  {
    title: "Poor Customer Service",
  },
  {
    title: "Unreliable Emergency Response",
  },
];
const easyPool = [
  {
    title: "Experienced Professionals",
  },
  {
    title: "Top-Quality Materials",
  },
  {
    title: "Customized Solutions",
  },
  {
    title: "Prompt Response",
  },
  {
    title: "Transparent Pricing",
  },
  {
    title: "Skilled Craftsmanship",
  },
  {
    title: "Comprehensive Services",
  },
  {
    title: "Reliable Repairs",
  },
  {
    title: "Customer Satisfaction",
  },
  {
    title: "Emergency Services",
  },
];

const WhyHireUs = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className="">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.hireUs__IconTxt}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
                Why Choose Our  
                  <span className="text-primary"> Roof Repair Specialist</span>
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                Choose RH Construction USA Inc. for your roof repair needs and benefit from our expert craftsmanship, reliable service, and personalized solutions. Our skilled team delivers high-quality repairs tailored to your roof type and specific issues, ensuring durability and long-term protection. We prioritize transparency, efficiency, and customer satisfaction, making us
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Usual Roof Repair Specialist
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-lg md:text-base text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Our Roof Repair Specialist
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px]  px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-lg md:text-base text-black font-bold">
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

export default WhyHireUs;