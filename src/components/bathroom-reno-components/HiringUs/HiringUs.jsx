"use client";

import Image from "next/image";

import hiring1 from "../../../../public/assets/images/hiring1.png";
import hiring2 from "../../../../public/assets/images/hiring2.png";
import hiring3 from "../../../../public/assets/images/hiring3.png";
import hiring4 from "../../../../public/assets/images/hiring4.png";
import hiring5 from "../../../../public/assets/images/hiring5.png";
import hiring6 from "../../../../public/assets/images/hiring6.png";
import hiring7 from "../../../../public/assets/images/hiring7.png";
import hiring8 from "../../../../public/assets/images/hiring8.png";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const workingData = [
  {
    imgSrc: hiring1,
    title: "Customized Consultations",
    description: `Our contractors initiate the process with personalized consultations, understanding your specific needs, preferences, and budget constraints. This ensures that the bath renewal.`,
  },
  {
    imgSrc: hiring2,
    title: "Innovative Design Solutions",
    description: `Our bathroom renovation company prides itself on offering innovative design solutions for bath renewals. we specialize in transforming ordinary bathrooms.`,
  },
  {
    imgSrc: hiring3,
    title: "Transparent Project Planning",
    description: `We believe in transparent communication. Our contractors provide detailed project plans, outlining the timeline, milestones, and cost estimates.`,
  },
  {
    imgSrc: hiring4,
    title: "Quality Craftsmanship",
    description: `At our bathroom remodeling company, we prioritize quality craftsmanship. From tile installation to plumbing, every aspect of the bath renewal is executed with precision.`,
  },
  {
    imgSrc: hiring5,
    title: "Sustainable Practices",
    description: `Environmental responsibility is integral to our work philosophy. Our contractors incorporate sustainable practices, such as eco-friendly materials and energy-efficient.`,
  },
  {
    imgSrc: hiring6,
    title: "Client Collaboration",
    description: `We value collaboration with our clients. This collaborative approach sets us apart, fostering a sense of partnership between our team and the client.`,
  },
  {
    imgSrc: hiring7,
    title: "Thorough Project Manage",
    description: `Our contractors are adept at project management, overseeing every phase of the bath renewal. From procurement to installation, they ensure that the project stays.`,
  },
  {
    imgSrc: hiring8,
    title: "Post-Completion Support",
    description: `We are committed to client satisfaction even after the project is complete. Our contractors provide post-completion support, addressing any concerns or adjustments needed.`,
  },
];


const HiringUs = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[90px] 3xl:py-[100px] 4xl:py-[110px] 5xl:py-[120px]">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.hiringUs__IconTxt}/>
            </div>

            <h5 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal text-center font-medium">
            How Our Bath Renew 
              <span className="text-primary"> Contractors Work</span>
            </h5>
          </div>

          <div className="grid gird-cols-1 lg:grid-cols-3 gap-12">
            {workingData.map((slide, index) => (
              <div
                key={index}
                className={`relative text-center py-4 lg:py-6 lg:px-12 image transition-all duration-0 ease-in-out`}
              >
                <div className="">
                  <Image
                    src={slide.imgSrc}
                    width={129}
                    height={129}
                    alt="working"
                    className="w-[129px] h-[129px] mx-auto"
                  />

                  <div className="text-center">
                    <h6 className="text-[25px] py-2 text-black">
                      {slide.title}
                    </h6>
                    <p className="text-lg text-center mt-2 mb-3  text-black leading-[24px] md:leading-6">
                      {slide.description}
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