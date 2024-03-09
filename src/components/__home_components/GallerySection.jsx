"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";

import GalImg1 from "../../../public/assets/galleries/gl1.jpg";
import GalImg2 from "../../../public/assets/galleries/gl2.jpg";
import GalImg3 from "../../../public/assets/galleries/gl3.jpg";
import GalImg4 from "../../../public/assets/galleries/gl4.jpg";
import GalImg5 from "../../../public/assets/galleries/gl5.jpg";
import GalImg6 from "../../../public/assets/galleries/gl6.jpg";
import GalImg7 from "../../../public/assets/galleries/gl7.jpg";
import GalImg8 from "../../../public/assets/galleries/gl8.jpg";
import GalImg9 from "../../../public/assets/galleries/gl9.jpg";

// import required modules
import { Autoplay, Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const galImgs = [
  GalImg1,
  GalImg2,
  GalImg3,
  GalImg4,
  GalImg5,
  GalImg6,
  GalImg7,
  GalImg8,
  GalImg9,
];

export default function GallerySection() {
  return (
    <div>
      <h1 className={`mb-4 container font-bold`}>
        Construction Services Gallary
        <br />
        of Our Past Projects
      </h1>
      <Swiper
        className="sample-slider w-full"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          reverseDirection: true,
          stopOnLastSlide: false,
        }}
        slidesPerView={5}
        speed={4000}
        allowTouchMove={false}
      >
        {galImgs.map((imgUrl, i) => (
          <SwiperSlide key={i} className="m-2">
            <Image
              width={400}
              height={400}
              className="w-auto h-52 mx-8 select-none"
              src={imgUrl}
              alt="gallery"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="sample-slider w-full"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        slidesPerView={5}
        speed={4000}
        allowTouchMove={false}
      >
        {galImgs.map((imgUrl, i) => (
          <SwiperSlide key={i} className="m-2">
            <Image
              width={400}
              height={400}
              className="w-auto h-52 mx-8 select-none"
              src={imgUrl}
              alt="gallery"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
