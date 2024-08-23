
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const AboutOur = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.aboutOurRoofingContractor__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            About Our 
             <br />
              <span className="text-primary-50">Brooklyn Roofing Contractor</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. is a trusted roofing contractor in Brooklyn, specializing in high-quality roofing services for both residential and commercial properties. With years of experience, our skilled team delivers expert installation, repair, and maintenance solutions that ensure the durability and longevity of your roof. We pride ourselves on using top-grade materials and state-of-the-art techniques to meet the unique needs of each project. Whether you're dealing with a minor leak or require a complete roof replacement, RH Construction USA Inc. offers reliable, efficient, and affordable services. Our commitment to exceptional craftsmanship and customer satisfaction has made us a leading choice for roofing in Brooklyn. Trust RH Construction USA Inc. to protect your property with a roof that's built to last.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/About Our Roofing Contractor.png"
                width={810}
                height={550}
                alt="About Our Roofing Contractor image"
                className="w-[810px] h-[313px] md:h-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOur;