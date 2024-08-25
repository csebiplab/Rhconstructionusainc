import mask1 from "@/components/__home_components/Images/Mask1.png";
import mask2 from "@/components/__home_components/Images/Mask2.png";
import mask3 from "@/components/__home_components/Images/Mask3.png";
import mask4 from "@/components/__home_components/Images/Mask4.png";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SmallHeadingWithIcon from "../ui/SmallHeadingWithIcon";

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 0,
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
];

const WorkingProcess = () => {
  return (
    <div className="container">
      <div className="common__padding__top">
        <div>
          <SmallHeadingWithIcon
            smallHeadingText={smHeadingTexts.workingProcess}
          />
          <h3 className="lg:leading-10 lg:text-4xl text-lg md:py-2 lg:py-4">
            WORKING PROCESS OF OUR CONSTRUCTION COMPANY IN BROOKLYN
          </h3>
          <p className="font-semibold lg:text-base md:text-sm">
            Certainly! Here's an overview of the working process of our
            construction company in Brooklyn:
          </p>
        </div>

        {/* =============== Image card for desktop ============== */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2 lg:gap-3 text-center lg:py-10 md:py-4">
            <div className="w-full card-sd section-bg rounded-md">
              <Image
                src={mask1}
                width={221}
                height={148}
                alt="mask"
                className="w-full"
              />
              <div className="text-center md:py-2 lg:py-3">
                <p className="lg:text-base md:text-sm py-2 font-bold">
                  Project Planning and Design
                </p>
                <p className="lg:text-sm md:text-xs">
                  We begin by meeting with clients to understand their needs,
                  goals, and budget constraints.
                </p>
              </div>
            </div>
            <div className="w-full card-sd section-bg rounded-md">
              <Image
                src={mask2}
                width={221}
                height={148}
                alt="mask"
                className="w-full rounded-md"
              />
              <div className="text-center md:py-2 lg:py-3">
                <p className="lg:text-base md:text-sm py-2 font-bold">
                  Procurement of Materials & Resources
                </p>
                <p className="lg:text-sm md:text-xs text-black">
                  We source high-quality materials and engage skilled laborers
                  and subcontractors necessary for the project.
                </p>
              </div>
            </div>
            <div className="w-full card-sd section-bg rounded-md">
              <Image
                src={mask3}
                width={221}
                height={148}
                alt="mask"
                className="w-full rounded-md"
              />
              <div className="text-center md:py-2 lg:py-3">
                <p className="lg:text-base md:text-sm py-2 font-bold">
                  Quality Control and Assurance
                </p>
                <p className="lg:text-sm md:text-xs text-black">
                  Throughout the construction phase, we conduct regular
                  inspections and quality control checks to ensure.
                </p>
              </div>
            </div>
            <div className="w-full card-sd section-bg rounded-md">
              <Image
                src={mask4}
                width={221}
                height={148}
                alt="mask"
                className="w-full rounded-md"
              />
              <div className="text-center md:py-2 lg:py-3">
                <p className="lg:text-base md:text-sm py-2 font-bold">
                  Client Communication and Updates
                </p>
                <p className="lg:text-sm md:text-xs text-black">
                  We maintain open lines of communication with clients,
                  providing regular updates on the progress of their projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Mobile View Swiper =========== */}
        <div className="block md:hidden mt-4">
          <Swiper
            spaceBetween={17}
            slidesPerView={2}
            modules={[Scrollbar]}
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
            scrollbar={{ draggable: true }}
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
                    <p className="text-xs font-bold">{slide.title}</p>
                    <p className="text-[9px] leading-[16px] my-[8px] text-black">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          ;
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
