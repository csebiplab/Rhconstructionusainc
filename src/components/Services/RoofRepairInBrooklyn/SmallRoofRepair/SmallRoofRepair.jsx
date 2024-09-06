
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const SmallRoofRepair = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.smallRoofRepair__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Small Roof Repair 
              <span className="text-primary-50"> Contractors </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. specializes in small roof repairs in Brooklyn, NY, delivering precise, efficient solutions for minor issues with top-notch craftsmanship. Our skilled team tackles everything from small leaks to damaged shingles, ensuring quality repairs that protect your home without the high costs. With a focus on attention to detail and customer satisfaction, we offer reliable, affordable services to keep your roof in excellent condition. Our approach combines expert craftsmanship with personalized service, so you receive a repair solution tailored to your specific needs. We take pride in our transparent communication and strive to make the process as smooth as possible, keeping you informed and involved from start to finish. With our expertise, you can be confident that your roof will be in top shape, safeguarding your home and providing you with peace of mind.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/Small Roof Repair.png"
                width={810}
                height={490}
                alt="Small Roof Repair image"
                className="w-[810px] h-[313px] md:h-[490px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallRoofRepair;