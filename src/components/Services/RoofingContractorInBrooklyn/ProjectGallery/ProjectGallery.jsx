
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const galImgs = [
  "/assets/roofing_contractor/gallery1.png",
  "/assets/roofing_contractor/gallery2.png",
  "/assets/roofing_contractor/gallery3.png",
  "/assets/roofing_contractor/gallery4.png",
  "/assets/roofing_contractor/gallery5.png",
  "/assets/roofing_contractor/gallery6.png",
  "/assets/roofing_contractor/gallery7.png",
  "/assets/roofing_contractor/gallery8.png",
  "/assets/roofing_contractor/gallery9.png"
];

const galImgs2 = [
  "/assets/roofing_contractor/gallery9.png",
  "/assets/roofing_contractor/gallery8.png",
  "/assets/roofing_contractor/gallery7.png",
  "/assets/roofing_contractor/gallery6.png",
  "/assets/roofing_contractor/gallery5.png",
  "/assets/roofing_contractor/gallery4.png",
  "/assets/roofing_contractor/gallery3.png",
  "/assets/roofing_contractor/gallery2.png",
  "/assets/roofing_contractor/gallery1.png"
];

const ProjectGallery = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <div className="bg___color">
      <div className="custom-container common__padding__top">
        <div className="pb-2">
          <div className="flex flex-col justify-center items-center">
            <HeadingIcon text={headingIconText.gallery__IconTxt}/>
            <div>
              <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
              Our Roofing Contractor<br className="block md:hidden"/>
                <span className="text-primary"> Gallery of Past Projects</span>
              </h3>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs.slice(0, showAll ? galImgs.length : 4).map((imgUrl, idx) => (
                <div key={idx} className="m-2 px-0 md:px-6">
                  <Image
                    width={370}
                    height={250}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </div>
              ))}
            </div>
            {!showAll && (
              <div className="text-center mt-4 px-10">
                <button
                  onClick={handleLoadMore}
                  className="flex items-center justify-center gap-2 w-full text-lg font-bold px-4 py-2 bg-primary text-black rounded"
                >
                  Load More <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
  <path d="M1.38997 0.4375L0 1.67633L4.22005 5.4375L0 9.19867L1.38997 10.4375L7 5.4375L1.38997 0.4375Z" fill="black"/>
</svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
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
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs.map((imgUrl, idx) => (
                <SwiperSlide key={idx} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
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
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs2.map((imgUrl, i) => (
                <SwiperSlide key={i} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
