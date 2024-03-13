
const Hero = () => {
  return (
    <>
      <div
        className="hero-section"
      >
        <div className="md:flex items-center relative">
          <div className="w-full md:w-7/12">
            <div className="">
            <h1 className="leading-10 text-[2rem]">
                About Our General Contractor Company
                <br />
                with
                <span className="text-white ml-2">
                  R H Construction USA Inc
                </span>
              </h1>
              <p className="text-base mb-5 leading-6 font-medium mt-4 text-white">
                Since 2009, RH Construction USA Inc. has been dedicated to
                delivering excellence in construction services, boasting over 15
                years of expertise in home renovations.
              </p>
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
