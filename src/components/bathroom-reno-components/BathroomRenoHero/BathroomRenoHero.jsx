import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import "../../bathroom-reno-components/BathroomRenoHero/BathroomRenoHero.css"

const BathroomRenoHero = () => {
  return (
    <>
      <div className="hero-section custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[58%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-10 text-xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
              Bathroom Remodeling <br/> Services in Brooklyn
              </h1>
              <p className="text-sm lg:text-base mb-5 leading-6 mt-4 text-black">
              Elevate your space with expert bathroom remodeling services in <br/> Brooklyn. We've got you covered from stunning marble floors to <br/> sleek concrete countertops!
              </p>
              <div className="mb-4 md:mb-0">
                <Button className="!px-[34px] !py-4 !rounded-none bg-primary hover:bg-gray-900 text-black hover:text-white text-md lg:text-lg font-semibold capitalize flex items-center gap-x-2">
                  <span>Get an Estimate </span>
                  <span>
                    <FaChevronRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/Group 73.png"
            alt="arrow left"
            className="md:w-[3%] md:h-[25%] absolute -bottom-[8%] left-0 rotate-0 hidden md:block"
          />
          <div className="hero-right relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/assets/images/hero-section.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BathroomRenoHero;
