"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";

import GalImg1 from "../../../public/assets/galleries/gl1.jpg";
import GalImg10 from "../../../public/assets/galleries/gl10.jpg";
import GalImg11 from "../../../public/assets/galleries/gl11.jpg";
import GalImg12 from "../../../public/assets/galleries/gl12.jpg";
import GalImg13 from "../../../public/assets/galleries/gl13.jpg";
import GalImg14 from "../../../public/assets/galleries/gl14.jpg";
import GalImg15 from "../../../public/assets/galleries/gl15.jpg";
import GalImg16 from "../../../public/assets/galleries/gl16.jpg";
import GalImg17 from "../../../public/assets/galleries/gl17.jpg";
import GalImg18 from "../../../public/assets/galleries/gl18.jpg";
import GalImg19 from "../../../public/assets/galleries/gl19.jpg";
import GalImg2 from "../../../public/assets/galleries/gl2.jpg";
import GalImg20 from "../../../public/assets/galleries/gl20.jpg";
import GalImg21 from "../../../public/assets/galleries/gl21.jpg";
import GalImg22 from "../../../public/assets/galleries/gl22.jpg";
import GalImg23 from "../../../public/assets/galleries/gl23.jpg";
import GalImg24 from "../../../public/assets/galleries/gl24.jpg";
import GalImg25 from "../../../public/assets/galleries/gl25.jpg";
import GalImg26 from "../../../public/assets/galleries/gl26.jpg";
import GalImg27 from "../../../public/assets/galleries/gl27.jpg";
import GalImg28 from "../../../public/assets/galleries/gl28.jpg";
import GalImg29 from "../../../public/assets/galleries/gl29.jpg";
import GalImg3 from "../../../public/assets/galleries/gl3.jpg";
import GalImg30 from "../../../public/assets/galleries/gl30.jpg";
import GalImg31 from "../../../public/assets/galleries/gl31.jpg";
import GalImg32 from "../../../public/assets/galleries/gl32.jpg";
import GalImg33 from "../../../public/assets/galleries/gl33.jpg";
import GalImg34 from "../../../public/assets/galleries/gl34.jpg";
import GalImg4 from "../../../public/assets/galleries/gl4.jpg";
import GalImg5 from "../../../public/assets/galleries/gl5.jpg";
import GalImg6 from "../../../public/assets/galleries/gl6.jpg";
import GalImg7 from "../../../public/assets/galleries/gl7.jpg";
import GalImg8 from "../../../public/assets/galleries/gl8.jpg";
import GalImg9 from "../../../public/assets/galleries/gl9.jpg";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

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
  GalImg10,
  GalImg11,
  GalImg12,
  GalImg13,
  GalImg14,
  GalImg15,
  GalImg16,
  GalImg17,
];

const galImgs2 = [
  GalImg18,
  GalImg19,
  GalImg20,
  GalImg21,
  GalImg22,
  GalImg23,
  GalImg24,
  GalImg25,
  GalImg26,
  GalImg27,
  GalImg28,
  GalImg29,
  GalImg30,
  GalImg31,
  GalImg32,
  GalImg33,
  GalImg34,
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
          // slidesPerView={5}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            750: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            950: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {galImgs.map((imgUrl, i) => (
            <SwiperSlide key={i} className="m-2">
              <Image
                // width={400}
                // height={400}

                // className="w-auto h-52 mx-8 select-none"
                className="object-contain w-auto h-auto mx-auto"
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
            reverseDirection: false,
          }}
          // slidesPerView={5}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            750: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            950: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {galImgs2.map((imgUrl, i) => (
            <SwiperSlide key={i} className="m-2 ">
              <Image
                // width={400}
                // height={400}
                // className="w-auto h-52 mx-8 select-none"
                className="object-contain w-auto h-auto mx-auto "
                src={imgUrl}
                alt="gallery"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
