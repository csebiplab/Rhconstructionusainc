
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const MetalRoofing = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.metalRoofing__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Metal Roofing Installation  
             <br className="hidden md:block"/>
              <span className="text-primary-50"> Contractors</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA specializes in metal roofing installation, providing top-tier solutions for both residential and commercial properties. Our contractors are skilled in installing a range of metal roofing systems, including standing seam, metal shingles, and corrugated panels. Metal roofing is known for its resilience, and low maintenance requirements, making it an excellent choice for various building types. Our team ensures that every installation is carried out with meticulous attention to detail and adherence to industry standards. From initial consultation and design to final installation, our team of contractors works closely with you to ensure your metal roof meets your expectations and budget.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Metal Roofing.png"
                width={677}
                height={530}
                alt="Metal Roofing image"
                className="w-[677px] h-[310px] md:h-[530px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalRoofing;