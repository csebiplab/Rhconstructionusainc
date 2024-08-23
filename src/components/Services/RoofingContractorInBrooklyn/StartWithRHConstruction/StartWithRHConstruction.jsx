
import Image from "next/image";
import Link from "next/link";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const StartWithRHConstruction = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-4 flex items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Start With RH Construction.png"
                width={940}
                height={580}
                alt="Start With RH Construction image"
                className="w-[940px] h-[400px] md:h-[580px]"
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.startWithRhConstruction__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Start With RH Construction  
            <br className="hidden md:block"/>
              <span className="text-primary"> USA Inc</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">RH is your premier choice for roofing contractors in Brooklyn, NY, offering unparalleled expertise and quality in all roofing services. Specializing in both residential and commercial projects, we deliver top-notch roofing solutions that ensure durability and longevity. Our experienced team is dedicated to using <Link className="text-primary hover:underline" href="https://en.wikipedia.org/wiki/High_grading">high-grade materials</Link> and advanced techniques to provide reliable installations, repairs, and maintenance. We focus on meticulous craftsmanship and personalized service to meet your specific needs. Which ensures that your roof remains in excellent condition and enhances the value of your property. From complete roof replacements to routine inspections, RH Construction USA is committed to delivering exceptional results and customer satisfaction. Choose us for enduring roofing solutions that provide both protection and aesthetic appeal for your home or business.</p>
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

export default StartWithRHConstruction;