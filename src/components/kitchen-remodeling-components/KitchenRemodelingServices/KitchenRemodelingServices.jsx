import mask1 from "@/components/__home_components/Images/Mask1.png";
import mask2 from "@/components/__home_components/Images/Mask2.png";
import mask3 from "@/components/__home_components/Images/Mask3.png";
import mask4 from "@/components/__home_components/Images/Mask4.png";
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

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 4,
  },
};

const slideContents = [
  {
    imageSrc: mask1,
    title: "Project Planning and Design",
    description:
      "We begin by meeting with clients to understand their needs, goals, and budget constraints.",
  },
  {
    imageSrc: mask2,
    title: "Procurement of Materials & Resources",
    description:
      "We source high-quality materials and engage skilled laborers and subcontractors necessary for the project.",
  },
  {
    imageSrc: mask3,
    title: "Quality Control and Assurance",
    description:
      "Throughout the construction phase, we conduct regular inspections and quality control checks to ensure.",
  },
  {
    imageSrc: mask4,
    title: "Client Communication and Updates",
    description:
      "We maintain open lines of communication with clients, providing regular updates on the progress of their projects.",
  },
  {
    imageSrc: mask2,
    title: "Procurement of Materials & Resources",
    description:
      "We source high-quality materials and engage skilled laborers and subcontractors necessary for the project.",
  },
  {
    imageSrc: mask3,
    title: "Quality Control and Assurance",
    description:
      "Throughout the construction phase, we conduct regular inspections and quality control checks to ensure.",
  },
  {
    imageSrc: mask4,
    title: "Client Communication and Updates",
    description:
      "We maintain open lines of communication with clients, providing regular updates on the progress of their projects.",
  },
];

const KitchenRemodelingServices = () => {
  return (
    <div className="container">
      <div className="">
        <div>
        <HeadingIcon text={headingIconText.kitchenRemodelingServices__IconTxt}/>
          <h2 className="lg:leading-10 lg:text-4xl text-lg md:py-2 lg:py-4">
            WORKING PROCESS OF OUR CONSTRUCTION COMPANY IN BROOKLYN
          </h2>
          <p className="font-semibold lg:text-base md:text-sm">
            Certainly! Here's an overview of the working process of our
            construction company in Brooklyn:
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
              <SwiperSlide key={index} className={`text-center py-4`}>
                <div className="w-full h-[290px] card-sd section-bg rounded-md mb-2">
                  <Image
                    src={slide.imageSrc}
                    width={175}
                    height={118}
                    alt="mask"
                    className="w-full h-1/2 mb-[6px] rounded-md"
                  />
                  <div className="text-center py-2 px-1">
                    <h4 className="text-xs">{slide.title}</h4>
                    <p className="text-[9px] leading-[16px] my-[8px] text-black">
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
  );
};

export default KitchenRemodelingServices;
