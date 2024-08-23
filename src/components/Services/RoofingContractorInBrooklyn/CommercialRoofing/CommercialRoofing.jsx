
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const CommercialRoofing = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.commercialRoofing__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Commercial Roofing Contractors 
   
             <br className="hidden md:block"/>
              <span className="text-primary-50"> in Brooklyn</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. stands out as a premier choice for commercial roofing contractors in Brooklyn. We offer specialized roofing solutions designed to meet the demands of various commercial properties, including office buildings, and industrial facilities. Our services encompass everything from new roof installations and replacements to repairs and routine maintenance. At RH Construction USA, we are committed to delivering exceptional service with minimal downtime ensuring your business operations continue smoothly. Our experienced team provides thorough inspections and customized solutions tailored to your property's specific needs, helping to prevent costly disruptions and extend the lifespan of your roof. Choose us for reliable, professional, and comprehensive commercial roofing services in Brooklyn, and experience the difference that quality craftsmanship and dedicated customer care can make.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Commercial Roofing.png"
                width={810}
                height={582}
                alt="Commercial Roofing image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialRoofing;