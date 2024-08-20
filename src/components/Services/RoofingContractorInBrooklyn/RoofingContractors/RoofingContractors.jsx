
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const RoofingContractors = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.roofingContractors__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Long Roofing Contractors 
  
             <br className="hidden md:block"/>
              <span className="text-primary-50">Brooklyn, NY </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. is a leading choice for long roofing contractors in Brooklyn, NY, offering extensive experience and expertise in all types of roofing projects. We specialize in providing durable, high-quality roofing solutions that stand the test of time, including installations, repairs, and maintenance. Our team is well-versed in handling residential and commercial roofing needs, using top-grade materials and advanced techniques to ensure long-lasting performance. We take pride in delivering meticulous workmanship and personalized service tailored to your specific requirements, ensuring your roof remains reliable and aesthetically pleasing. RH Construction USA Inc. is committed to excellence and customer satisfaction, from comprehensive roof replacements to routine upkeep. Trust us for dependable, long-lasting roofing solutions to protect your property and enhance its value.

            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Roofing Contractors.png"
                width={810}
                height={541}
                alt="Roofing Contractors image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofingContractors;