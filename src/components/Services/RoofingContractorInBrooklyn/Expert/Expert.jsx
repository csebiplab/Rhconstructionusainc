
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const Expert = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.expert__headingIconText}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Expert Roofing Contractors 
             <br className="hidden md:block"/>
              <span className="text-primary-50"> Brooklyn</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. is home to expert roofing contractors in Brooklyn, offering comprehensive roofing solutions for residential and commercial properties. With extensive industry experience, our team specializes in all aspects of roofing, including installation, repair, maintenance, and inspections. We pride ourselves on delivering high-quality workmanship using the best materials and cutting-edge techniques to ensure long-lasting and reliable results. Whether you need a minor repair or a complete roof replacement, our skilled contractors are committed to providing exceptional service tailored to your specific needs. Choose RH Construction USA Inc. for expert roofing services in Brooklyn, where quality and customer satisfaction come first.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Expert.png"
                width={810}
                height={550}
                alt="Expert image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;