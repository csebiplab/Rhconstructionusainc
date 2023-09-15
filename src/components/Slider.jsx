"use client";
// Import Swiper React components
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
// Import Swiper styles
import { MdOutlineNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { GrFormPrevious } from "react-icons/gr";

export default ({ children, spaceBetween=0, slidesPerView=1,navigation=true, ...rest }) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={3}
      effect="fade"
      loop
      autoplay={{
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        delay: 3000,
      }}
      navigation={navigation}
      modules={[Navigation, Autoplay, EffectFade]}
      {...rest}
    >
      {children}
    </Swiper>
  );
};
