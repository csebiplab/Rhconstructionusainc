
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const SteelRoof = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.steelRoof__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Professional Steel Roof   
             <br className="hidden md:block"/>
              <span className="text-primary-50">Contractors</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH is your go-to choice for professional steel roof contractors, offering expert installation and repair services for steel roofing systems. Our team is highly skilled in working with steel roofs, known for their strength, durability, and modern aesthetic. We provide comprehensive solutions tailored to your needs, whether it's a new steel roof installation, replacement, or repair. Our use of high-quality steel materials and cutting-edge techniques ensures a roof that can withstand harsh weather conditions and maintain its appearance over time. Our goal is to deliver a steel roofing system that not only enhances the protection and value of your property but also aligns with your vision. Choose RH Construction USA Inc. for reliable, professional steel roofing services and experience superior craftsmanship and exceptional results.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Steel Roof.png"
                width={677}
                height={600}
                alt="Steel Roof image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteelRoof;