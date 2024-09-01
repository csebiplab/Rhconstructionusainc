
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Link from "next/link";

const Dependable = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.dependable__headingIconText}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Dependable Roofing Repair 
  
             <br className="hidden md:block"/>
              <span className="text-primary-50">Services</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            <Link className="text-primary hover:underline" rel='nofollow' target="_blank" href="http://www.rhconstructionusa.com">RH Construction</Link> USA Inc. provides dependable roofing repair services in Brooklyn, NY, ensuring your roof is in excellent condition with reliable, high-quality repairs. Our experienced team addresses all types of issues, from leaks and damaged shingles to flat and metal roof problems, using top-grade materials and advanced techniques. Committed to customer satisfaction, we offer prompt, professional service to restore your roof's integrity and protect your property. Our dependable roofing repair services are designed to address both minor and major roofing issues with precision and care. We start with a thorough inspection to accurately diagnose problems and provide tailored solutions that meet your specific needs. Whether you need emergency repairs or routine maintenance, our skilled team ensures that every repair is completed efficiently and effectively. We pride ourselves on transparent communication, keeping you informed throughout the repair process, and delivering results that enhance the durability and appearance of your roof.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/Dependable.png"
                width={810}
                height={600}
                alt="Dependable image"
                className="w-[810px] h-[350px] md:h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dependable;