
import Image from "next/image";
import Link from "next/link";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const ReadyToWorkWithUs = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/Ready to Work with us.png"
                width={810}
                height={561}
                alt="Ready to Work with us image"
                className="w-[810px] h-[295px] md:h-[561px]"
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.readyToWorkWithUs__headingIconText}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Start Your 
               <span className="text-primary"> Project With Us</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">Start your project with us and experience top-notch roof repair services from a team of skilled professionals dedicated to quality and customer satisfaction. We offer expert solutions, clear communication, and reliable results to ensure your roofing needs are met efficiently and effectively. Reach out today to begin your project and protect your home with confidence. From initial consultation and detailed inspections to prompt repairs and final quality checks, we ensure a seamless and stress-free experience. We are committed to delivering exceptional craftsmanship and lasting results, tailored to your specific roofing needs. Let us handle your project with professionalism and expertise, providing you with peace of mind and a roof you can depend on. Contact us today to get started and see the difference our dedicated service can make.</p>
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

export default ReadyToWorkWithUs;