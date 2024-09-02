
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const RoofRepairSpecialists = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 ">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.roofRepairSpecialists__headingIconText}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Brooklyn 
  
             <br className="hidden md:block"/>
              <span className="text-primary-50">Roof Repair Specialists</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. stands out as the premier roof repair specialist in Brooklyn, NY, dedicated to providing top-tier service and exceptional craftsmanship. We handle all types of roofing issues, from minor repairs and routine maintenance to major damage restoration, using high-quality materials and advanced techniques to deliver lasting results. Our thorough inspections and tailored solutions address your specific needs, ensuring that your home remains safe, secure, and protected from the elements. At our Brooklyn roof repair company, we prioritize customer satisfaction, transparent communication, and reliable service, making your roofing experience smooth and stress-free. Trust us to keep your roof in excellent condition and enhance the durability and value of your home. Choose our Brooklyn roof repair company for expert roof repair that you can depend on.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/Roof Repair Specialists.png"
                width={810}
                height={600}
                alt="Roof Repair Specialists image"
                className="w-[810px] h-[400px] md:h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofRepairSpecialists;