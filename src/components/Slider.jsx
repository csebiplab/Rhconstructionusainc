"use client";
// Import Swiper React components
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default ({ children }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      loop
      autoplay={{
        disableOnInteraction:false,
        pauseOnMouseEnter:false,
        delay:3000,
      }}
      navigation={{
        
      }}

      modules={[Navigation, Autoplay, EffectFade]}
    >
      {children}
    </Swiper>
  );
};
