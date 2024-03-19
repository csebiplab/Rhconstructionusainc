import { Button } from "@material-tailwind/react";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[58%]">
            <div className="md:ml-[6.3542%]">
              <h1 className="leading-10 text-[2rem] lg:text-6xl">
                General Constructor
                <br />
                Brooklyn
              </h1>
              <p className="text-sm lg:text-base mb-5 leading-6 mt-4 text-black">
                Top-Rated general constructor in Brooklyn, delivering
                exceptional <br /> construction & renovation services with
                expertise and integrity
              </p>
              <div className="mb-4 md:mb-0">
                <Button className="rounded-md bg-primary hover:bg-gray-900 text-black hover:text-white text-md lg:text-lg font-semibold tracking-wider capitalize flex items-center gap-2">
                  <span>Get an Estimate </span>
                  <span>
                    <FaChevronRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <img src="/assets/images/Group 73.png"
            alt="" 
            className="md:w-[3%] md:h-[25%] absolute -bottom-[8%] left-0 rotate-0"/>
          <div className="hero-right relative">
            <Image
              width={820}
              height={825}
              src="/assets/images/Group 21.png"
              alt=""
              className="hero-main-image mb-0"
            />
            <img
              src="/assets/images/Group 73.png"
              alt=""
              className="md:w-[7%] md:h-[25%] absolute -bottom-[8%] right-0 rotate-180"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
