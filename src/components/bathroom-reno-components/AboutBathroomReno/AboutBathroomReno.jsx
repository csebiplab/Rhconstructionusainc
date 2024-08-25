
import Image from "next/image";
import "./AboutBathroomReno.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const AboutBathroomReno = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.aboutBathroom__IconTxt}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            About Our Bathroom Renovators 
              <span className="text-primary"> in Brooklyn</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. specializes in top-notch bathroom remodeling services in Brooklyn. From modern design concepts to classic renovations, we cater to diverse styles and preferences. Our experienced professionals work closely with clients to understand their vision, ensuring each project reflects their unique tastes and lifestyles. With a focus on quality craftsmanship and timely completion, our bathroom remodeling company is a trusted partner in delivering exceptional bathroom remodeling experiences throughout Brooklyn.
            </p>
          </div>
          <div className="order-1 md:col-span-4 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/AboutBathroomReno.png"
                width={810}
                height={510}
                alt="About Bathroom Renovation image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBathroomReno;