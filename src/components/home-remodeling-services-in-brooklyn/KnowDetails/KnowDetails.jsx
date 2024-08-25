"use client";
import "./KnowDetails.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import Image from "next/image";

const usualPool = [
  {
    title: "Inexperienced & unreliable contractors",
  },
  {
    title: "Poor quality workmanship",
  },
  {
    title: "Delays in project completion",
  },
  {
    title: "Cost overruns & unexpected expenses",
  },
  {
    title: "Lack of communication & responsiveness",
  },
  {
    title: "Substandard materials & shortcuts",
  },
  {
    title: "Messy and disorganized work sites",
  },
  {
    title: "Ignoring building codes & regulations",
  },
  {
    title: "Ignoring client preferences",
  },
  {
    title: "Difficulty in resolving disputes or issues",
  },
];
const easyPool = [
  {
    title: "Timely completion",
  },
  {
    title: "Skilled craftsmanship",
  },
  {
    title: "Attention to detail",
  },
  {
    title: "Professionalism",
  },
  {
    title: "Customer satisfaction",
  },
  {
    title: "Clear communication",
  },
  {
    title: "Reliable service",
  },
  {
    title: "Innovative solutions",
  },
  {
    title: "Budget-conscious solutions",
  },
  {
    title: "Attention to safety",
  },
];

const KnowDetails = () => {
  return (
    <div className="bg___color">
      <div className="container">
        <div className="2xl:py-20 py-10 shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.knowDetails__HeadingIconText}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
                Our Home Renovators Like No Others 
 
                  <span className="text-primary"> in Brooklyn</span>
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                The home renovators of RH Construction USA Inc. are different and not like others in Brooklyn. Transform your living space with our exceptional home renovators. From concept to completion, we deliver top-notch craftsmanship and unparalleled attention to detail for your home remodeling in Brooklyn.
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Usual Home Renovators
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 5xl:gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-xs 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              RH Construction USA Inc
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px]  pl-[60px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-3 5xl:gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-xs 2xl:text-sm text-black font-bold">
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

export default KnowDetails;