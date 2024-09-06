
import Image from "next/image";
import "./BathroomRemodeling.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const BathroomRemodeling = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p  common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.bathroomRemodeling__IconTxt}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Start With Our 
            <br />{" "}
              <span className="text-primary"> Bathroom Remodeling Services</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Our expert team is dedicated to transforming your outdated or impractical bathroom into a luxurious oasis tailored to your needs and style preferences. From modern minimalist designs to timeless classics, we specialize in delivering high-quality craftsmanship and innovative solutions. Let us take the stress out of remodeling as we guide you through every step of the process, from initial consultation to final installation. Say goodbye to your old bathroom and hello to a space that reflects your personality and enhances your daily routine. Experience the ultimate in comfort, functionality, and aesthetics with our bathroom remodeling services in Brooklyn.
            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/bathroom-remodeling.png"
                width={810}
                height={433}
                alt="bathroom-remodeling image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathroomRemodeling;