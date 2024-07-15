"use client";

import google from "@/components/__home_components/Images/google.png";
import review from "@/components/__home_components/Images/review.png";
import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { allGoogleReviws } from "@/utils/allGoogleReviw";

import "./ReviewSlider.css";
// import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 3,
    },
};



const AllGoogleReviws = () => {
    return (
        <div className="section-bg">
            <div className="container">
                <div className="py-6 lg:py-[55px]">
                    <div className="text-center">
                        <div className="flex justify-center items-center">
                            <SmallHeadingWithIcon smallHeadingText={smHeadingTexts.review} />
                        </div>
                        <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[12px] xl:mt-[15px] xl:mb-[25px] text-center">
                            Here's what to expect when you hire us
                        </h2>
                    </div>
                    {/* =================== Card Section =============== */}
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
                        allowTouchMove={true}
                        breakpoints={breakpoints}
                    >
                        {allGoogleReviws.map(({ text, name, ratings }, i) => (
                            <SwiperSlide
                                key={i}
                                className={`text-center py-4 lg:py-10 md:pr-[21px] !h-full`}
                            >
                                <div className="w-[370px] h-full card-sd p-[14px] bg-[#fff] md:mx-0 mx-auto">
                                    <Image
                                        src={google}
                                        width={89.92}
                                        height={51}
                                        alt="google"
                                        className="mb-2"
                                    />
                                    <Image
                                        src={review}
                                        width={83}
                                        height={12}
                                        alt="google"
                                        className=""
                                    />

                                    <div className="text-start">
                                        <p className="text-sm mt-4  text-black leading-[22px] md:leading-6">
                                            {text}
                                        </p>
                                        <h6 className="font-semibold text-sm mt-3">
                                            {name}
                                        </h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* <SwiperNavButtons /> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AllGoogleReviws;
