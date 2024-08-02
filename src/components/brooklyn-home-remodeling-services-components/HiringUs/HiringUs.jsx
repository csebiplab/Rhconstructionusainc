"use client";

import Image from "next/image";

import hiring1 from "../../../../public/assets/brooklyn_Home/hiring1.png";
import hiring2 from "../../../../public/assets/brooklyn_Home/hiring2.png";
import hiring3 from "../../../../public/assets/brooklyn_Home/hiring3.png";
import hiring4 from "../../../../public/assets/brooklyn_Home/hiring4.png";
import hiring5 from "../../../../public/assets/brooklyn_Home/hiring5.png";
import hiring6 from "../../../../public/assets/brooklyn_Home/hiring6.png";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const HiringData = [
  {
    imgSrc: hiring1,
    title: "Clear Pricing",
    description: `We believe in transparency and simplicity when it comes to pricing home renovations. Our commitment is to provide clear, straightforward pricing.`,
  },
  {
    imgSrc: hiring2,
    title: "Complete Package",
    description: `We offer a comprehensive and seamless solution for home renovations, providing clients with a complete package that encompasses every aspect of the project.`,
  },
  {
    imgSrc: hiring3,
    title: "3D Rendering",
    description: `Our company seamlessly integrates cutting-edge 3D rendering technology into its home renovations, offering clients an immersive preview of their dream spaces.`,
  },
  {
    imgSrc: hiring4,
    title: "Quality Materials",
    description: `At our company, we pride ourselves on delivering home renovations that stand the test of time, and a key factor in achieving this is our unwavering commitment`,
  },
  {
    imgSrc: hiring5,
    title: "In-House Contractors",
    description: `We specialize in transforming houses into dream homes through our team of skilled home renovators and contractors. Whether it's a kitchen remodel, bathroom upgrade.`,
  },
  {
    imgSrc: hiring6,
    title: "Innovation in Every Nail",
    description: `Discuss the project timeline with the contractor and ensure they can commit to realistic deadlines. Delays can be costly and inconvenient, so clarity on scheduling`,
  }
];


const HiringUs = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="common__padding__top">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.hiringUs__HeadingIconText}/>
            </div>

            <h5 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black text-center">
            Hiring Us as Your Home Contractor -  <span className="text-primary-50">What to Expect</span>
            </h5>
          </div>

          <div className="grid gird-cols-1 lg:grid-cols-3 gap-10">
            {HiringData.map((data, index) => (
              <div
                key={index}
                className={`relative text-center py-4 lg:py-6 lg:px-12 Images transition-all duration-0 ease-in-out`}
              >
                <div className="">
                  <Image
                    src={data.imgSrc}
                    width={129}
                    height={129}
                    alt="hiring us"
                    className="w-[129px] h-[129px] mx-auto"
                  />

                  <div className="text-center pt-[15px]">
                    <h6 className="text-[25px] font-bold pb-[27px] text-black">
                      {data.title}
                    </h6>
                    <p className="text-lg text-center pb-[40px]  text-black leading-[24px] md:leading-6">
                      {data.description}
                    </p>
                    
                  </div>
                </div>
                <hr className="absolute bottom-0 left-0 right-0 border border-black" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringUs;