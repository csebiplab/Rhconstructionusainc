"use client";

import Image from "next/image";


import wc1 from "../../../../../public/assets/roofing_contractor/wh1.png";
import wc2 from "../../../../../public/assets/roofing_contractor/wh2.png";
import wc3 from "../../../../../public/assets/roofing_contractor/wh3.png";
import wc4 from "../../../../../public/assets/roofing_contractor/wh4.png";
import wc5 from "../../../../../public/assets/roofing_contractor/wh5.png";
import wc6 from "../../../../../public/assets/roofing_contractor/wh6.png";
import wc7 from "../../../../../public/assets/roofing_contractor/wh7.png";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const HiringData = [
  {
    imgSrc: wc1,
    title: "Experienced Professionals",
    description: `Our team of skilled roofing contractors in RH Construction USA brings years of experience and expertise to every project.`,
  },
  {
    imgSrc: wc2,
    title: "Quality Materials",
    description: `We use only top-grade materials to ensure durability and longevity for your roof.`,
  },
  {
    imgSrc: wc3,
    title: "Comprehensive Services",
    description: `From installation and repairs to maintenance and inspections, we offer a full range of roofing solutions.`,
  },
  {
    imgSrc: wc4,
    title: "Customer Satisfaction",
    description: `We prioritize your needs and work closely with you to achieve the best results, ensuring complete satisfaction.`,
  },
  {
    imgSrc: wc5,
    title: "Reliable and Timely",
    description: `We are committed to completing projects on time and within budget, with minimal disruption to your daily life.`,
  },
  {
    imgSrc: wc6,
    title: "Competitive Pricing",
    description: `Our services are priced fairly, providing exceptional value without compromising on quality.`,
  },
  {
    imgSrc: wc7,
    title: "Fully Licensed & Insured",
    description: `We are a licensed and insured roofing contractor, giving you peace of mind and protection throughout the project.`,
  }
];


const WhyChoose = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="common__padding__top">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.whyChoose__headingIconText}/>
            </div>

            <h5 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center">
            Hiring Us as Your Home Contractor -  <span className="text-primary-50">What to Expect</span>
            </h5>
          </div>

          <div className="grid gird-cols-1 lg:grid-cols-3  gap-10">
            {HiringData.map((data, index) => (
              <div
                key={index}
                className={`relative text-center py-4 lg:py-6 lg:px-12 Images transition-all duration-0 ease-in-out`}
              >
                <div className="">
                  <Image
                    src={data.imgSrc}
                    width={129}
                    height={129}
                    alt="hiring us"
                    className="w-[129px] h-[129px] mx-auto"
                  />

                  <div className="text-center pt-[15px]">
                    <h6 className="text-[25px] font-bold pb-[27px] text-black">
                      {data.title}
                    </h6>
                    <p className="text-lg text-center pb-[40px]  text-black leading-[24px] md:leading-6">
                      {data.description}
                    </p>
                    
                  </div>
                </div>
                <hr className="absolute bottom-0 left-0 right-0 border border-black" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;