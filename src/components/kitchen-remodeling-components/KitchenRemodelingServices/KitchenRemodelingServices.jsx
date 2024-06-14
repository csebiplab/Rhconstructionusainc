import s1 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-1.png"
import s2 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-2.png"
import s3 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-3.png"
import s4 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-4.png"
import s5 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-5.png"
import s6 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-6.png"
import s7 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-7.png"
import s8 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-8.png"
import s9 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-9.png"
import s10 from "../../../../public/assets/kitchen/Kitchen Remodeling Services-10.png"

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
// import "swiper/css/scrollbar";
import "swiper/css/virtual";
// import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "./SwiperSliderButton";

import "./KitchenRemodelingServices.css"

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const slideContents = [
  {
    imageSrc: s1,
    title: "Kitchen Sink Remodel",
    description:
      "Embarking on a kitchen sink remodel is an exciting journey that goes beyond mere functionality to redefine the heart of the home.",
  },
  {
    imageSrc: s2,
    title: "Concrete Kitchen Sink",
    description:
      "A concrete kitchen sink seamlessly blends functionality with contemporary design, making it a popular choice for modern kitchens.",
  },
  {
    imageSrc: s3,
    title: "Marble Kitchen Sink",
    description:
      "A marble kitchen sink adds a touch of timeless elegance and sophistication to any culinary space.",
  },
  {
    imageSrc: s4,
    title: "Concrete Kitchen Floor",
    description:
      "A concrete kitchen floor is a contemporary and versatile choice that brings a touch of industrial chic to any home.",
  },
  {
    imageSrc: s5,
    title: "Polished Concrete Kitchen Floor",
    description:
      "A polished concrete kitchen floor offers a sleek and contemporary aesthetic, seamlessly blending style with functionality.",
  },
  {
    imageSrc: s6,
    title: "Concrete Kitchen Cabinets",
    description:
      "Concrete kitchen cabinets bring a unique and modern aesthetic to contemporary home design.",
  },
  {
    imageSrc: s7,
    title: "Marble Kitchen Floors",
    description:
      "The marble kitchen floor exudes timeless elegance and luxury, transforming any culinary space into a masterpiece of sophistication.",
  },
  {
    imageSrc: s8,
    title: "Luxury Black Marble Kitchen",
    description:
      "A luxury black marble kitchen epitomizes sophistication and modern elegance.",
  },
  {
    imageSrc: s9,
    title: "Pink Marble Kitchen",
    description:
      "A pink marble kitchen exudes elegance and sophistication, transforming the heart of the home into a luxurious culinary haven.",
  },
  {
    imageSrc: s10,
    title: "White Marble Kitchen Flooring",
    description:
      "The white marble kitchen floor adds an air of timeless elegance and sophistication to any culinary space.",
  },
];

const KitchenRemodelingServices = () => {
  return (
    <div className="bg-[#FFFAEE]">
      <div className="container">
      <div className="common__padding__top">
        <div className="flex flex-col justify-center items-center">
        <HeadingIcon text={headingIconText.kitchenRemodelingServices__IconTxt}/>
          <h2 className="lg:leading-10 lg:text-4xl text-lg md:py-2 lg:py-4 text-center">
          Best Kitchen Remodeling Services in Brooklyn
          </h2>
          <p className="font-normal lg:text-base md:text-sm text-center">
          As a reputable company, RH Construction USA Inc. prioritizes customer satisfaction, focusing on transparent communication and attention to detail throughout the entire process of kitchen remodeling in Brooklyn. Our commitment to excellence is evident in the use of premium materials, meticulous planning, and adherence to timelines. Various kitchen renovation services are offered by our company:
          </p>
        </div>


        {/* ================= View Swiper =========== */}
        <div className="mt-4">
          <Swiper
            spaceBetween={17}
            slidesPerView={2}
            // modules={[Scrollbar]}
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
            // scrollbar={{ draggable: true }}
            // Add your Swiper props here
          >
            {slideContents.map((slide, index) => (
              <SwiperSlide key={index} className={`text-center py-4 !h-auto !md:h-full`}>
                <div className="w-full !h-full card mb-2">
                  <Image
                    src={slide.imageSrc}
                    width={175}
                    height={118}
                    alt="mask"
                    className="w-full h-1/2 mb-[6px] rounded-md"
                  />
                  <div className="text-center py-2 px-1">
                    <h4 className="text-lg font-bold">{slide.title}</h4>
                    <p className="text-lg font-normal leading-[16px] my-[8px] text-black">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons/>
          </Swiper>
          ;
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default KitchenRemodelingServices;
