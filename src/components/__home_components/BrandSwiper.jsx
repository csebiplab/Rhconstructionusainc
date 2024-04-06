"use client";
import band1 from "@/components/__home_components/Images/band1.png";
import band2 from "@/components/__home_components/Images/band2.png";
import band3 from "@/components/__home_components/Images/band3.png";
import band4 from "@/components/__home_components/Images/band4.png";
import band5 from "@/components/__home_components/Images/band5.png";
import band6 from "@/components/__home_components/Images/band6.png";
import band7 from "@/components/__home_components/Images/band7.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import "swiper/css/virtual";
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSwiper = () => {
  return (
    <div >
      <Swiper
          spaceBetween={13}
          // slidesPerView={3}
          slidesPerView={3}
          modules={[Autoplay, Scrollbar]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            
          }}
          speed={3000}
          allowTouchMove={false}
          scrollbar={{ draggable: true }}
          
        >
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-full h-[130px] border-[1px] band rounded-[15px] text-center">
            <div>
              <Image
               src={band1}
                width={66}
                height={37}
                alt=""
                className="mt-[15px] mx-auto"
              />
            </div>
            <p className="text-center text-[10px] leading-[16px] py-3 px-2">
              R H CONSTRUCTION responds to texts.
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-full h-[130px] border-[1px] band rounded-[15px] text-center">
            <Image
              src={band2}
              width={64}
              height={33}
              alt=""
              className="mx-auto mt-[10px]"
            />
            <p className="text-center text-[10px] leading-[16px] py-3 px-2">
              The Construction company I ever seen.
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-full h-[130px] border-[1px] band rounded-[15px] text-center">
          <Image
            src={band3}
            width={62}
            height={37}
            alt=""
            className="mt-[15px] mx-auto"
          />
          <p className="text-center text-[10px] leading-[16px] py-3 px-2">
            We hired RH CONSTRUCTION
          </p>
        </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-full h-[130px] border-[1px] band rounded-[15px] text-center">
          <Image
            src={band4}
            width={40}
            height={35}
            alt=""
            className="mt-[15px] mx-auto"
          />
          <p className="text-center text-[10px] leading-[16px] py-3 px-2">
            Maricelas R H CONSTRUCTION
          </p>
        </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-full h-[130px] border-[1px] band rounded-[15px] text-center">
          <Image
            src={band5}
            width={80}
            height={70}
            alt=""
            className="mt-[18px] mx-auto"
          />
          <p className="text-center text-[10px] leading-[16px] py-3 px-2">
            We never used a Construction service
          </p>
        </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-full h-[130px] border-[1px] band rounded-[15px] text-center">
          <Image
            src={band6}
            width={65}
            height={37}
            alt=""
            className="mt-[15px] mx-auto"
          />
          <p className="text-center text-[10px] leading-[16px] py-3 px-2">
            What a pleasure it was working with R H
          </p>
        </div> 
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-full h-[130px] border-[1px] band rounded-[15px] text-center">
          <Image
            src={band7}
            width={56}
            height={35}
            alt=""
            className="mt-[15px] mx-auto"
          />
          <p className="text-center text-[10px] leading-[16px] py-3 px-2">
            I always receive excellent service.
          </p>
        </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default BrandSwiper;
