"use client";
import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./RoofRepairServices.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
};

const howMuchCostData = [
  {
    id: 1,
    img: "/assets/roof_repair/rrs1.png",
    title: "Leak Repair",
    desc: "At RH Construction USA Inc., our leak repair services in Brooklyn, NY, are designed to quickly and effectively address and fix any leaks in your roofing system. Our experienced team performs thorough inspections to pinpoint the exact source of the leak, whether it's due to damaged shingles, faulty flashing, or other issues. We use high-quality materials and advanced techniques to seal and repair the affected areas, preventing further water damage and extending the lifespan of your roof. Our commitment to precision and customer satisfaction ensures that your home or business remains protected and dry.",
  },
  {
    id: 2,
    img: "/assets/roof_repair/rrs2.png",
    title: "Shingle Repair",
    desc: "RH Construction USA Inc. specializes in shingle repair in Brooklyn, NY, providing expert solutions to address issues such as damaged, missing, or deteriorated shingles. Our skilled team conducts thorough inspections to identify the extent of the damage and replace or repair shingles as needed. We use high-quality materials to ensure a durable and aesthetically pleasing finish, restoring your roof's integrity and protecting your home from the elements. With a focus on precision and customer satisfaction, our shingle repair company delivers reliable shingle repair services that enhance the longevity",
  },
  {
    id: 3,
    img: "/assets/roof_repair/rrs3.png",
    title: "Flat Roof Repair Brooklyn, NY",
    desc: "RH Construction USA Inc. specializes in flat roof repair in Brooklyn, NY, offering expert solutions for leaks, wear, and damage. Our experienced team is skilled in handling the unique challenges of flat roofing systems, using high-quality materials and advanced techniques to ensure durable, effective repairs. We conduct thorough inspections to identify underlying issues and provide tailored solutions that restore the integrity and functionality of your flat roof. Committed to excellence and customer satisfaction, we deliver reliable, affordable services to protect your home and extend the lifespan",
  },
  {
    id: 4,
    img: "/assets/roof_repair/rrs4.png",
    title: "Commercial Roof Repair",
    desc: "RH Construction USA Inc. offers expert commercial roof repair services in Brooklyn, NY, ensuring your business remains protected and operational. Our skilled team specializes in addressing a wide range of commercial roofing issues, from leaks and damage to routine maintenance and upgrades. We use high-quality materials and cutting-edge techniques to deliver durable, reliable repairs that minimize downtime and extend the lifespan of your roof. With a focus on professionalism and efficiency, we work around your schedule to provide prompt, effective solutions tailored to the specific needs of your commercial",
  },
  {
    id: 5,
    img: "/assets/roof_repair/rrs5.png",
    title: "Residential Roof Repair",
    desc: "RH Construction USA Inc. excels in residential roof repair in Brooklyn, NY, providing homeowners with top-quality solutions for a range of roofing issues. Our experienced team is adept at handling everything from minor leaks and shingle damage to major repairs and maintenance. Our residential roof repair contractors utilize premium materials and the latest techniques to ensure your roof is restored to optimal condition, enhancing its durability and protecting your home. With a focus on meticulous craftsmanship and customer satisfaction, we offer transparent communication and reliable service tailored",
  },
  {
    id: 6,
    img: "/assets/roof_repair/rrs6.png",
    title: "Metal Roof Repair",
    desc: "RH Construction USA Inc. is your go-to expert for metal roof repair in Brooklyn, NY, specializing in resolving issues such as leaks, rust, and damaged panels. Our skilled team has extensive experience with metal roofing systems, using high-quality materials and advanced techniques to provide durable and effective repairs. We thoroughly inspect your metal roof to identify any underlying problems and offer tailored solutions to restore its integrity and functionality. Committed to exceptional craftsmanship and customer satisfaction, we ensure reliable, long-lasting repairs that protect your home or business.",
  },
  {
    id: 7,
    img: "/assets/roof_repair/rrs7.png",
    title: "Garage Roof Repair",
    desc: "RH Construction USA Inc. offers specialized garage roof repair in Brooklyn, NY, providing expert solutions for leaks, damage, and wear. Our skilled team handles all types of garage roofing issues, from minor repairs to extensive fixes, using high-quality materials and advanced techniques. We conduct thorough inspections to accurately diagnose problems and deliver tailored repairs that restore your garage roof's integrity and functionality. With a focus on craftsmanship and customer satisfaction, we ensure reliable, efficient service that extends the lifespan of your roof and protects your property.",
  },
  {
    id: 8,
    img: "/assets/roof_repair/rrs8.png",
    title: "Tile Roof Repair",
    desc: "RH Construction USA Inc. provides expert tile roof repair in Brooklyn, NY, specializing in fixing cracked, damaged, or missing tiles. Our experienced team uses high-quality materials and precise techniques to restore the durability and aesthetic appeal of your tile roof. We conduct thorough inspections to identify and address issues effectively, ensuring long-lasting results. With a commitment to exceptional craftsmanship and customer satisfaction, we deliver reliable repairs that protect your home and enhance the lifespan of your roof.",
  },
  {
    id: 9,
    img: "/assets/roof_repair/rrs9.png",
    title: "Steel Roof Repair",
    desc: "RH Construction USA Inc. is your expert for steel roof repair in Brooklyn, NY, offering reliable solutions for issues like rust, leaks, and structural damage. Our experienced team uses top-quality materials and advanced techniques to address and resolve problems effectively, ensuring the longevity and durability of your steel roof. We perform comprehensive inspections to pinpoint and tackle underlying issues, delivering repairs that enhance both the functionality and appearance of your roof.",
  },
  {
    id: 10,
    img: "/assets/roof_repair/rrs10.png",
    title: "Emergency Roof Repair Brooklyn",
    desc: "RH Construction USA Inc. offers prompt emergency roof repair services in Brooklyn, NY, to address urgent roofing issues like leaks, storm damage, and structural failures. Our expert team responds quickly to assess and mitigate damage, using high-quality materials and effective techniques to provide immediate, reliable repairs. We prioritize your safety and the protection of your property, ensuring that emergency repairs are completed efficiently and thoroughly.",
  },
];

const RoofRepairServices = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[36px]">
          <div className="order-2 md:col-span-3">
            <div className="!overflow-hidden ">

              {/* ==================== swiper slider ================ */}
              <Swiper
                className=" !overflow-visible mt-[120px]"
                modules={[Autoplay]}
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
                spaceBetween={12}
              >
                {howMuchCostData?.map((data) => (
                  <SwiperSlide key={data.id} className={` bg-black !h-auto !md:h-full`}>
                    <div className="mx-[30px] px-[15px] mb-[30px] border-2 border-white h-[360px] -mt-16  cart_bg">
                      <Image
                        src={data.img}
                        alt="how much cost image"
                        width={115}
                        height={115}
                        className="-mt-12 5xl:-mt-16 w-[100px] 5xl:w-[115px] h-[100px] 5xl:h-[115px] mx-auto p-1 rounded-full border  border-primary shadow-lg bg-white"
                      />
                      <h5 className="pt-[20px] text-[25px] text-black font-bold text-center">
                        {data.title}
                      </h5>
                      <p className="text-base 5xl:text-lg pb-[30px] font-normal text-center text-black pt-[5px]">
                        {data.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="order-1 md:col-span-2">
            <div>
            <div className="flex justify-center md:justify-start">
              <HeadingIcon text={headingIconText.roofRepairServices__headingIconText}/>
              </div>

              <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">
              Roof Repair <br />  <span className="text-primary">Services We Provide</span>
              </h3>
              <p className="text-black text-lg font-normal text-center md:text-left">At RH Construction USA Inc., we offer a full range of roof repair services in Brooklyn, NY, including leak repairs, shingle replacements, flat and metal roof fixes, tile and steel roof restoration, garage roof repairs, and emergency services. Our expert team delivers prompt, reliable, and high-quality solutions to keep your roof in optimal condition and protect your home or business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofRepairServices;
