import { smHeadingTexts } from "@/constants/smHeadingTexts";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SmallHeadingWithIcon from "../ui/SmallHeadingWithIcon";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 5,
  },
  
};

const locations = [
  {
    title: "Brooklyn",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193746.99686626304!2d-74.11015801519653!3d40.645386882912746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%USA!5e0!3m2!1sen!2sbd!4v1710652730916!5m2!1sen!2sbd",
  },
  {
    title: "Queens",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282591.6426865487!2d-74.04841253213657!3d40.68744007354902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sQueens%2C%20NY%2C%USA!5e0!3m2!1sen!2sbd!4v1710652963610!5m2!1sen!2sbd",
  },
  // ... add other locations here
  {
    title: "Staten Island",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193980.89432907896!2d-74.31197899122276!3d40.564748848637244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY%2C%USA!5e0!3m2!1sen!2sbd!4v1710653173307!5m2!1sen!2sbd",
  },
  {
    title: "Manhattan",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193296.64126751295!2d-74.08426630631556!3d40.80027958810262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710653064960!5m2!1sen!2sbd",
  },
  {
    title: "Bronx",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193146.52505702147!2d-74.0060943983724!3d40.85180194863987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sBronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710653132257!5m2!1sen!2sbd",
  },
  // ... add other locations here
  {
    title: "Staten Island",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193980.89432907896!2d-74.31197899122276!3d40.564748848637244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY%2C%USA!5e0!3m2!1sen!2sbd!4v1710653173307!5m2!1sen!2sbd",
  },
  {
    title: "Brooklyn",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193746.99686626304!2d-74.11015801519653!3d40.645386882912746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%USA!5e0!3m2!1sen!2sbd!4v1710652730916!5m2!1sen!2sbd",
  },
  {
    title: "Queens",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282591.6426865487!2d-74.04841253213657!3d40.68744007354902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sQueens%2C%20NY%2C%USA!5e0!3m2!1sen!2sbd!4v1710652963610!5m2!1sen!2sbd",
  },
];

const LocationMap = () => {
  return (
    <div>
      <div className="custom-container">
        <div className="py-[30px] lg:py-[120px] 5xl:py-[168px]">
          <div className="mx-auto flex flex-col items-center justify-center ">
            <SmallHeadingWithIcon smallHeadingText={smHeadingTexts.area} />

            <div>
              <h6 className="lg:leading-10 lg:text-4xl text-lg py-2 lg:py-4">
                SERVICE AREA IN RH CONSTRUCTION USA INC
              </h6>
            </div>
          </div>
          
          <Swiper
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
            spaceBetween={74}
          >
            {locations.map((location, index) => (
              <SwiperSlide key={index} className={`px-[90px] md:px-0`}>
                <div
                className={`${
                  (index + 2) % 2 === 0 ? "lg:-mt-10 md:-mt-5" : ""
                }`}
              >
                <div className="w-full shadow-md p-0 mt-[45px] lg:mt-[65px] ">
                  <iframe
                  
                    src={location.iframeSrc}
                    height="325"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <p className="lg:text-base text-center text-sm py-4 px-3 lg:px-10 bg-yellow-700 ">
                    {location?.title}
                  </p>
                </div>
              </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
