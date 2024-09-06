"use client";
import pp1 from "../../../../public/assets/kitchen/pp1.png"
import pp2 from "../../../../public/assets/kitchen/pp2.png"
import pp3 from "../../../../public/assets/kitchen/pp3.png"
import pp4 from "../../../../public/assets/kitchen/pp4.png"
import pp5 from "../../../../public/assets/kitchen/pp5.png"
import pp6 from "../../../../public/assets/kitchen/pp6.png"
import pp7 from "../../../../public/assets/kitchen/pp7.png"
import pp8 from "../../../../public/assets/kitchen/pp8.png"
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
import "./KeyPoints.css";
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
    title: 'Layout and Design',
    description: `Consider the overall layout of your kitchen. Think about the work triangle (the relationship between the stove, sink, and refrigerator) for an efficient workflow.`,
  },
  {
    imgSrc: pp2,
    title: 'Cabinetry',
    description: `Choose the type of cabinets that suit your style and needs. Options include traditional wooden cabinets, sleek modern designs, or open shelving. `,
  },
  {
    imgSrc: pp3,
    title: 'Countertops',
    description: `Consider durability, maintenance, and visual appeal when selecting the countertop material.`,
  },
  {
    imgSrc: pp4,
    title: 'Appliances',
    description: `Upgrade kitchen appliances to newer, energy-efficient models. Consider the layout and flow of the kitchen when placing appliances like the refrigerator, stove, and dishwasher.`,
  },
  {
    imgSrc: pp5,
    title: 'Lighting',
    description: `Plan for ample and strategically placed lighting. This could include overhead fixtures, under-cabinet lighting, and pendant lights. Explore energy-efficient and smart lighting.`,
  },
  {
    imgSrc: pp6,
    title: 'Flooring',
    description: `Consider the visual impact and how well the flooring complements the rest of the kitchen design.`,
  },
  {
    imgSrc: pp7,
    title: 'Backsplash',
    description: `Explore various backsplash materials like tile, glass, or metal. Use the backsplash as an opportunity to add a pop of color or a unique design element to the kitchen.`,
  },
  {
    imgSrc: pp8,
    title: 'Storage Solutions',
    description: `Plan for efficient storage solutions, such as pull-out pantry shelves, deep drawers, and custom cabinets to maximize space.`,
  },
];



const KeyPoints = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className="">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.chooseUs__IconTxt}/>
            </div>

            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center">
            Key Points to Consider a  <span className="text-primary">Kitchen Remodel</span>
            </h2>
            <p className="text-lg font-normal text-center">Kitchen remodeling can involve several different elements, ranging from design and layout to materials and appliances. Here are some key areas to consider when planning a kitchen remodel:</p>
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
        <SwiperSlide key={index} className={`!h-auto !md:h-full text-center py-4 lg:py-10 px-20 md:px-14 lg:px-6`}>
          <div className="w-full !h-full  card__bg p-[10px]">
            <Image
              src={slide.imgSrc}
              width={70}
              height={70}
              alt="RH"
              className="mx-auto mt-[10px] w-[70px] h-[70px] border-2 rounded-full bg-white p-4 "
            />
            <div className="text-center">
              <p className="text-[20px] font-bold py-2">{slide?.title}</p>
              <p className="text-base font-normal mt-2 mb-3  text-black ">
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

export default KeyPoints;
