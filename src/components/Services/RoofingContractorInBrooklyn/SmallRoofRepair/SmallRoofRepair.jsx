
import Image from "next/image";
import Link from "next/link";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const SmallRoofRepair = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-4 flex items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Small Roof Repair.png"
                width={810}
                height={582}
                alt="Small Roof Repair image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.smallRoofRepair__headingIconText}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Small Roof Repair 
              <span className="text-primary"> Contractors</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">RH Construction USA Inc. provides expert services as small roof repair contractors, specializing in addressing minor roofing issues efficiently and effectively. Whether it's fixing leaks, or repairing damaged shingles, our experienced team is equipped to handle various small-scale repairs with precision. We understand that even small roof problems can lead to significant issues if not addressed promptly. That's why we offer quick and reliable repairs to ensure your roof remains in excellent condition and continues to protect your property. Our approach includes thorough inspections to identify the root cause of the problem and provide lasting solutions. With a focus on customer satisfaction, RH Construction delivers dependable repair services that restore your roof's integrity and functionality.</p>
            <div className="flex justify-center md:justify-start pt-[15px]">
              <button
                type="submit"
                className="rounded-md bg-primary px-6 lg:px-10 py-2 text-lg font-medium flex justify-center items-center"
              >
                <span className="mr-2">
                <Link href="tel:(646) 683-4612" className="text-black">Get Your Free Estimated</Link>
                </span>
              </button>
            </div>
            <p className="text-black text-2xl font-bold leading-normal mt-4 text-center md:text-left">
            or Call Us: <span className="text-primary"><Link href="tel:(646) 683-4612">(646) 683-4612</Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallRoofRepair;