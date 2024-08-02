
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const AffordableHome = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.affordableServices__HeadingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
            Affordable Home Repair Services 
 
             <br className="hidden 2xl:block"/>{" "}
              <span className="text-primary-50">In Brooklyn</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            If you're in search of affordable and reliable home repair services in Brooklyn, look no further than RH Construction USA Inc. Our commitment to excellence and customer satisfaction sets us apart in the competitive world of home repair. At our company, we understand the importance of a well-maintained home, and we take pride in offering cost-effective solutions tailored to your needs. Our experienced technicians are equipped with the skills and knowledge to tackle a wide range of repairs, ensuring that your home remains a safe and comfortable haven for you and your family. With our home remodeling company, you can trust that your home repair needs in Brooklyn will be handled with the utmost care and professionalism, leaving you with peace of mind and a home that's in tip-top shape.

            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/brooklyn_Home/Affordable Services.png"
                width={810}
                height={513}
                alt="About Bathroom Renovation image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffordableHome;