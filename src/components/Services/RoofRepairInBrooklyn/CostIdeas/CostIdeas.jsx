"use client";

import Image from "next/image";


import ci1 from "../../../../../public/assets/roof_repair/ci1.png";
import ci2 from "../../../../../public/assets/roof_repair/ci2.png";
import ci3 from "../../../../../public/assets/roof_repair/ci3.png";
import ci4 from "../../../../../public/assets/roof_repair/ci4.png";
import ci5 from "../../../../../public/assets/roof_repair/ci5.png";
import ci6 from "../../../../../public/assets/roof_repair/ci6.png";
import ci7 from "../../../../../public/assets/roof_repair/ci7.png";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const HiringData = [
  {
    imgSrc: ci1,
    title: "Type of Repair",
    description: `Costs vary based on the type of repair needed, such as shingle replacement, leak sealing, or structural fixes. Minor repairs are typically less expensive.`,
  },
  {
    imgSrc: ci2,
    title: "Roof Type",
    description: `The material and design of your roof play a significant role in cost. Asphalt shingles, metal roofs, and tile roofs each have different price points for repairs. `,
  },
  {
    imgSrc: ci3,
    title: "The extent of Damage",
    description: `The severity of the damage impacts the cost. Small leaks or missing shingles are less expensive to repair compared to significant structural issues`,
  },
  {
    imgSrc: ci4,
    title: "Labor and Materials",
    description: `Costs include both labor and materials. High-quality materials and experienced labor may increase the price but often ensure better durability`,
  },
  {
    imgSrc: ci5,
    title: "Location",
    description: `Local labor rates and the cost of materials in your area can affect the overall cost. Urban areas like Brooklyn may have higher rates compared to rural`,
  },
  {
    imgSrc: ci6,
    title: "Emergency Repairs",
    description: `Urgent or emergency repairs typically come with higher costs due to the need for immediate attention and potentially higher labor rates.`,
  },
  {
    imgSrc: ci7,
    title: "Additional Services",
    description: `Any additional services such as gutter repairs, insulation work, or complete roof inspections may add to the total cost.`,
  }
];


const CostIdeas = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="common__padding__top">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.costIdeas__headingIconText}/>
            </div>

            <h5 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center">
            Roof Repair  <span className="text-primary-50">Cost Ideas</span>
            </h5>
          </div>

          <div className="grid gird-cols-1 lg:grid-cols-3  gap-10">
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

export default CostIdeas;