
import Image from "next/image";
import Link from "next/link";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const RoofingRepairCompany = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/RoofingRepairCompany.png"
                width={680}
                height={540}
                alt="RoofingRepairCompany image"
                className="w-[680px] h-[330px] md:h-[540px]"
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.roofingRepairCompany__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Best Roofing Repair  
            <br />
              <span className="text-primary">
              Company 
              </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">When it comes to top-quality roof repair, RH Construction USA Inc. is the best roofing repair company in Brooklyn, NY. Our reputation for excellence is built on a foundation of skilled craftsmanship, reliable service, and unmatched professionalism. With years of experience in the industry, our team of experts is adept at handling all types of roofing issues, from minor leaks and damaged shingles to extensive storm damage and structural repairs. We use only premium materials and advanced techniques to ensure durable, long-lasting results.</p>
            <div className="flex justify-center md:justify-start pt-[15px]">
              <button
                type="submit"
                className="rounded-md bg-primary px-6 lg:px-10 py-2 text-lg font-medium flex justify-center items-center"
              >
                <span className="mr-2">
                <Link href="tel:(646) 683-4612" className="flex items-center gap-2  text-black">Learn More <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
  <path d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z" fill="black"/>
</svg></Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofingRepairCompany;