
import Image from "next/image";
import "./AestheticKitchen.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const AestheticKitchen = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p  common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.aestheticKitchen__IconTxt}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Remodel Your 

            <br />{" "}
              <span className="text-primary"> Dream Aesthetic Kitchen </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Our kitchen renovators of RH Construction USA Inc. bring your dream aesthetic kitchen to life with our expert remodeling services. Imagine stepping into a culinary haven where modern sophistication meets timeless elegance. Our skilled team at our kitchen remodeling in Brooklyn company is committed to transforming your kitchen into a masterpiece of functionality and style. From luxurious countertops to sleek cabinetry, we pay meticulous attention to detail, ensuring every element complements your vision. With our company, your dream kitchen is not just a design concept; it's a tangible reality where beauty and utility coexist harmoniously. Trust us to redefine your culinary space and elevate it to a new standard of sophistication.
            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/kitchen/Aesthetic Kitchen.png"
                width={810}
                height={470}
                alt="Aesthetic Kitchen image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AestheticKitchen;