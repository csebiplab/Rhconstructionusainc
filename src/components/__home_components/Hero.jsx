import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className="hero-section"
      >
        <div className="flex items-center">
          <div className="w-full md:w-7/12">

          </div>
          <div className="w-full md:w-5/12">
            <img
            src="/assets/images/person.png"
            alt="" 
            className="w-full h-full object-cover mb-0"
            />
            <img src="/public/assets/images/Group"
            alt="" 
            className="w-full h-full object-cover mb-0"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
