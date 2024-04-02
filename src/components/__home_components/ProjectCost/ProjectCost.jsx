"use client";
import cost from "@/components/__home_components/Images/cost.png";
import cost1 from "@/components/__home_components/Images/cost1.png";
import cost2 from "@/components/__home_components/Images/cost2.png";
import cost3 from "@/components/__home_components/Images/cost3.png";
import cost4 from "@/components/__home_components/Images/cost4.png";
import cost5 from "@/components/__home_components/Images/cost5.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Navigation } from "swiper/modules";
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

const projects = [
  {
    src: "@/components/__home_components/Images/cost1.png",
    title: "Scope of Work",
  },
  {
    src: "@/components/__home_components/Images/cost2.png",
    title: "Materials",
  },
  {
    src: "@/components/__home_components/Images/cost3.png",
    title: "Labor Costs",
  },
  {
    src: "@/components/__home_components/Images/cost4.png",
    title: "Equipment and Machinery",
  },
  {
    src: "@/components/__home_components/Images/cost5.png",
    title: "Permits and Regulations",
  },
];
const ProjectCost = () => {
  return (
    <div className="section-bg">
      <div className="container">
        <div className="md:flex py-5 lg:py-[55px] lg:gap-10 md:gap-3">
          <div>
            <div className="flex justify-center md:block">
              <Image
                src={cost}
                width={116}
                height={18.02}
                alt="projectCost"
                className=""
              />
            </div>

            <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start">
              HOW MUCH DOES A CONSTRUCTION PROJECT COST?
            </h2>
          </div>
          <div>
            <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start lg:mt-4 md:mt-1">
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

        {/* //   ======================= Images Card ==================// */}

        {/* <div className="grid grid-cols-2 md:grid-cols-5 md:gap-2 lg:gap-3 px-4 text-center lg:py-10 md:py-4">
          <div className="mt-0 md:-mt-6 lg:-mt-10">
            <div className="w-full card-sd rounded-md">
              <Image
                src={cost1}
                width={318}
                height={238}
                alt=""
                className="w-full"
              />

              <h5 className="lg:text-base md:text-sm py-2">Scope of Work</h5>
            </div>
          </div>
          <div>
            <div className="w-full card-sd rounded-md">
              <Image
                src={cost2}
                width={318}
                height={238}
                alt=""
                className="w-full"
              />

              <h5 className="lg:text-base md:text-sm py-2">Materials</h5>
            </div>
          </div>
          <div className="mt-0 md:-mt-6 lg:-mt-10">
            <div className="w-full card-sd rounded-md">
              <Image
                src={cost3}
                width={318}
                height={238}
                alt=""
                className="w-full"
              />

              <h5 className="lg:text-base md:text-sm py-2">Labor Costs</h5>
            </div>
          </div>
          <div>
            <div className="w-full card-sd rounded-md">
              <Image
                src={cost4}
                width={318}
                height={238}
                alt=""
                className="w-full"
              />

              <h5 className="lg:text-base md:text-sm py-2">
                Equipment and Machinery
              </h5>
            </div>
          </div>
          <div className="mt-0 md:-mt-6 lg:-mt-10">
            <div className="w-full card-sd rounded-md">
              <Image
                src={cost5}
                width={318}
                height={238}
                alt=""
                className="w-full"
              />

              <h5 className="lg:text-base md:text-sm py-2">
                Permits and Regulations
              </h5>
            </div>
          </div>
        </div> */}
        {/* =================== Card Section =============== */}
        <Swiper
          // spaceBetween={21}
          // slidesPerView={3}
          modules={[Navigation]}
          breakpoints={breakpoints}
          
        >
          <SwiperSlide className={`text-center py-4 lg:py-10 px-16 !md:px-0`}>
            <div className="mt-0 md:-mt-6 lg:-mt-10">
              <div className="w-full card-sd rounded-md">
                <Image
                  src={cost1}
                  width={318}
                  height={238}
                  alt=""
                  className="w-full"
                />

                <h5 className="lg:text-base md:text-sm py-2">Scope of Work</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 lg:py-10 px-16 !md:px-0`}>
            <div>
              <div className="w-full card-sd rounded-md">
                <Image
                  src={cost2}
                  width={318}
                  height={238}
                  alt=""
                  className="w-full"
                />

                <h5 className="lg:text-base md:text-sm py-2">Materials</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 lg:py-10 px-16 !md:px-0`}>
            <div className="mt-0 md:-mt-6 lg:-mt-10">
              <div className="w-full card-sd rounded-md">
                <Image
                  src={cost3}
                  width={318}
                  height={238}
                  alt=""
                  className="w-full"
                />

                <h5 className="lg:text-base md:text-sm py-2">Labor Costs</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 lg:py-10 px-16 !md:px-0`}>
            <div>
              <div className="w-full card-sd rounded-md">
                <Image
                  src={cost4}
                  width={318}
                  height={238}
                  alt=""
                  className="w-full"
                />

                <h5 className="lg:text-base md:text-sm py-2">
                  Equipment and Machinery
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 lg:py-10 px-16 !md:px-0`}>
            <div className="mt-0 md:-mt-6 lg:-mt-10">
              <div className="w-full card-sd rounded-md">
                <Image
                  src={cost5}
                  width={318}
                  height={238}
                  alt=""
                  className="w-full"
                />

                <h5 className="lg:text-base md:text-sm py-2">
                  Permits and Regulations
                </h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperNavButtons />
        </Swiper>

      
      </div>
    </div>
  );
};

export default ProjectCost;