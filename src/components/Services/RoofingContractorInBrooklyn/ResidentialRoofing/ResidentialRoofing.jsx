
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const ResidentialRoofing = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.residentialRoofing__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Residential Roofing Contractor  
             <br className="hidden md:block"/>
              <span className="text-primary-50">Brooklyn</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. is your trusted residential roofing contractor in Brooklyn. We specialize in providing top-notch roofing solutions tailored to the unique needs of homeowners. Our services include expert installation, repair, and maintenance, ensuring your roof is both durable and aesthetically pleasing. With a commitment to high-quality materials and craftsmanship, we ensure your home is protected from the elements. Our experienced team works diligently to deliver exceptional results, all while prioritizing customer satisfaction and timely service. At RH, we understand that your home is your significant investment, and your roof is its first line of defense. That’s why we focus on delivering outstanding residential roofing services that combine quality, reliability, and efficiency. Our expert contractors are adept at handling all types of residential roofing projects, from minor repairs to complete roof replacements.
            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Residential Roofing.png"
                width={810}
                height={541}
                alt="Residential Roofing image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialRoofing;