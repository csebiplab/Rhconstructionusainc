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
    <div>
      <Swiper
          // spaceBetween={21}
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
          <SwiperSlide className={`text-center py-4 px-4`}>
          <div className="brand w-[115px] h-[95px]  border-[1px] band rounded-[15px] px-1 text-center">
            <div>
              <Image
                src={band1}
                width={110}
                height={95}
                alt=""
                className="md:w-3/4 mt-2 mx-auto"
              />
            </div>
            <p className="text-center text-xs">
              R H CONSTRUCTION responds to texts.
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 px-4`}>
          <div className="brand w-[115px] h-[95px]  border-[1px] band rounded-[15px] px-1 text-center">
            <Image
              src={band2}
              width={110}
              height={95}
              alt=""
              className="lg:mb-[10px] md:w-3/4 md:mb-[1px] mt-3  mx-auto"
            />
            <p className="text-center text-xs md:mt-2 lg:mt-4 lg:text-sm md:leading-[21.1px] ">
              The Construction company I ever seen.
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 px-4`}>
          <div className="brand w-[115px] h-[95px]  border-[1px] band rounded-[15px] px-1 text-center">
          <Image
            src={band3}
            width={110}
            height={95}
            alt=""
            className="lg:mb-[10px] md:mt-3 md:mb-[5px] mx-auto"
          />
          <p className="text-center text-xs lg:mt-3 lg:text-sm leading-[21.1px]">
            We hired RH CONSTRUCTION
          </p>
        </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 px-4`}>
          <div className="brand w-[115px] h-[95px]  border-[1px] band rounded-[15px] px-1 text-center">
          <Image
            src={band4}
            width={80}
            height={70}
            alt=""
            className="lg:mb-[10px] md:mb-[2px] mx-auto"
          />
          <p className="text-center lg:mt-2 text-xs lg:text-sm  leading-[21.1px] overflow-hidden">
            Maricelas R H CONSTRUCTION
          </p>
        </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 px-4`}>
          <div className="brand w-[115px] h-[95px]  border-[1px] band rounded-[15px] px-1 text-center">
          <Image
            src={band5}
            width={110}
            height={90}
            alt=""
            className="lg:mb-[10px] lg:mt-8 md:mt-6 mt-5 mx-auto"
          />
          <p className="text-center md:mt-6  mt-2 text-xs lg:text-sm leading-[21.1px]">
            We never used a Construction service
          </p>
        </div>
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4 px-4`}>
          <div className="brand w-[115px] h-[95px]  border-[1px] band rounded-[15px] px-1 text-center">
          <Image
            src={band6}
            width={110}
            height={90}
            alt=""
            className="lg:mb-[10px] md:mb-[5px] md:mt-3 lg:mt-1 mx-auto"
          />
          <p className="text-center text-xs  lg:text-sm leading-[21.1px]">
            What a pleasure it was working with R H
          </p>
        </div> 
          </SwiperSlide>
          <SwiperSlide className={`text-center py-4`}>
          <div className="brand w-[115px] h-[95px] border-[1px] band rounded-[15px] px-1 text-center">
          <Image
            src={band7}
            width={60}
            height={48}
            alt=""
            className="mt-3 md:w-1/2"
          />
          <p className="text-center lg:mt-4 md:mt-3 text-xs lg:text-sm leading-[21.1px]">
            I always receive excellent service.
          </p>
        </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default BrandSwiper;
