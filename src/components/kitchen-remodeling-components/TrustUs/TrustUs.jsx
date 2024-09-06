
import Image from "next/image";
import "./TrustUs.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const TrustUs = () => {
  return (
    <div>
      <div className="bg___color container common__padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/kitchen/Trust Us.png"
                width={680}
                height={495}
                alt="expert image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.trustUs__IconTxt}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Brooklyn Kitchen <br/> Remodeling Specialist 
            <br />{" "}
              <span className="text-primary">You Can Trust </span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Looking to transform your Brooklyn kitchen into a space that reflects your style and functionality needs? Look no further than our trusted team of specialists in kitchen remodeling in Brooklyn. With years of experience and a commitment to quality craftsmanship, we're dedicated to bringing your vision to life. From modern updates to classic designs, we'll work closely with you every step of the way to ensure your satisfaction. Trust us to deliver exceptional results that enhance both the beauty and practicality of your home. Choose our Brooklyn kitchen remodeling specialists for a transformation you can trust.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;