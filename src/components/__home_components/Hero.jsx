import { Button } from "@material-tailwind/react";
import { FaChevronRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <>
      <div
        className="hero-section"
      >
        <div className="md:flex items-center relative">
          <div className="w-full md:w-7/12">
            <div className="md:px-8">
            <h1 className="leading-10 text-[2rem]">
            General Constructor
                <br />
                Brooklyn
        
              </h1>
              <p className="text-sm mb-5 leading-6 mt-4 text-black">
              Top-Rated general constructor in Brooklyn, delivering exceptional <br/> construction & renovation services with expertise and integrity
              </p>
              <div>
              <Button className="rounded-md bg-primary hover:bg-gray-900 text-black hover:text-white text-lg font-semibold tracking-wider capitalize flex items-center gap-2">
                <span>Get an Estimate </span><span><FaChevronRight /></span>
            </Button>
            
              </div>
            </div>
          </div>
          <img src="/assets/images/Group 73.png"
            alt="" 
            className="w-[224] h-[152px] absolute -bottom-[48px] left-0 rotate-0"/>
          <div className="w-full md:w-5/12 relative">
            <img
            src="/assets/images/Group 21.png"
            alt="" 
            className="w-full h-full object-cover mb-0"
            />
            <img src="/assets/images/Group 73.png"
            alt="" 
            className="w-[224] h-[152px] absolute -bottom-[48px] right-0 rotate-180"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
