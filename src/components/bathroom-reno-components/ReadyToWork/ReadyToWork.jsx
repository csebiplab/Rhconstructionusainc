
import Image from "next/image";
import Link from "next/link";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const ReadyToWork = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-4 flex items-center ">
            <div className="">
              <Image
                src="/assets/images/ready-to-work.png"
                width={940}
                height={580}
                alt="ready to work image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.readyToWork__IconTxt}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Award Winning Bathroom Renovation Contractors <br />
              <span className="text-primary">
              in Brooklyn
              </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">Welcome to a better bathroom remodeling experience.  Ready To Start work with General Contractors in Toronto</p>
            <div className="flex justify-center md:justify-start pt-[35px]">
              <button
                type="submit"
                className="rounded-md bg-primary px-6 lg:px-10 py-2 text-lg font-medium flex justify-center items-center"
              >
                <span className="mr-2">
                <Link href="tel:(416) 994-4597" className="text-white">Get Your Free Estimated</Link>
                </span>
              </button>
            </div>
            <p className="text-black text-2xl font-bold leading-normal mt-4 text-center md:text-left">
            or Call Us: <span className="text-primary"><Link href="tel:(416) 994-4597">(646) 683-4612</Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToWork;