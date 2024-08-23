
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const AboutOur = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.aboutOurRoofRepair__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            About Our  
              <span className="text-primary-50"> Roof Repair Company</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            At RH Construction USA Inc., we are dedicated to delivering top-notch roof repair services in Brooklyn, NY. With years of experience in the industry, our skilled team is committed to ensuring the longevity and durability of your roof. We use only the highest-quality materials and cutting-edge techniques to address issues promptly and effectively. Whether you're dealing with leaks, damage from storms, or general wear and tear, our experts provide thorough inspections and tailored solutions to meet your specific needs. Customer satisfaction is our top priority, and we pride ourselves on transparent communication, reliable service, and exceptional craftsmanship. Our commitment to excellence extends beyond just repairs; we aim to build lasting relationships with our clients through trust and integrity. We understand the importance of a well-maintained roof in safeguarding your home and family, which is why we work diligently to ensure every job is completed to the highest standards. Trust our roof repair company to protect your home with our professional and dependable roof repair services.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/About Our Roof Repair.png"
                width={810}
                height={600}
                alt="About Our Roof Repair image"
                className="w-[430px] md:w-[810px] h-[313px] md:h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOur;