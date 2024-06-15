"use client";

import Image from "next/image";

import hiring1 from "../../../../public/assets/kitchen/hiring1.png";
import hiring2 from "../../../../public/assets/kitchen/hiring2.png";
import hiring3 from "../../../../public/assets/kitchen/hiring3.png";
import hiring4 from "../../../../public/assets/kitchen/hiring4.png";
import hiring5 from "../../../../public/assets/kitchen/hiring5.png";
import hiring6 from "../../../../public/assets/kitchen/hiring6.png";
import hiring7 from "../../../../public/assets/kitchen/hiring7.png";
import hiring8 from "../../../../public/assets/kitchen/hiring8.png";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const workingData = [
  {
    imgSrc: hiring1,
    title: "Initial Consultation",
    description: `Meet with the homeowners to discuss their vision, requirements, and budget for the kitchen remodelling project. Assess the existing kitchen space, including layout, plumbing, electrical systems, and structural considerations.`,
  },
  {
    imgSrc: hiring2,
    title: "Design Phase",
    description: `Collaborate with the homeowners to create a detailed kitchen design that incorporates their preferences, style, and functional needs. Select materials, finishes, and color schemes in line with the design concept.`,
  },
  {
    imgSrc: hiring3,
    title: "Permitting & Approvals",
    description: `Determine and acquire the necessary permits for the remodeling project, ensuring compliance with local building codes and regulations. Obtain any required approvals from homeowners' associations or other relevant entities.`,
  },
  {
    imgSrc: hiring4,
    title: "Demolition & Site Prepare",
    description: `Safely remove existing fixtures, cabinets, appliances, and flooring. Prepare the site for construction, addressing any structural issues and ensuring a clean and safe work environment.`,
  },
  {
    imgSrc: hiring5,
    title: "Rough-In Work",
    description: `Address plumbing and electrical requirements, making necessary adjustments or installations to accommodate the new kitchen layout. Confirm that all rough-in work meets building codes and standards.`,
  },
  {
    imgSrc: hiring6,
    title: "Cabinet & Appliance Install",
    description: `Install new kitchen cabinets, ensuring proper alignment and functionality. Place and secure appliances, incorporating them seamlessly into the design.`,
  },
  {
    imgSrc: hiring7,
    title: "Countertop & Flooring Install",
    description: `Install chosen countertops, such as granite, quartz, or marble, paying careful attention to precision and aesthetics. Lay and finish flooring materials, whether it be tile, hardwood, or another selected option.`,
  },
  {
    imgSrc: hiring8,
    title: "Quality Checks",
    description: `Conduct thorough inspections to verify that all work meets quality standards and safety requirements. Address any issues or deficiencies promptly.`,
  },
];


const WorkingProcess = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="common__padding__top">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.workingProcess__IconTxt}/>
            </div>

            <h5 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center">
            Working Process of Our <span className="text-primary">Outdoor Kitchen Builders</span>
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
                    <h6 className="text-[25px] font-bold py-2 text-black">
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

export default WorkingProcess;