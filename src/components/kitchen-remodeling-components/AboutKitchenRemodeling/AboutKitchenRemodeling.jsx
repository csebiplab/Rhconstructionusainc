
import Image from "next/image";
import "./AboutKitchenRemodeling.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const AboutKitchenRemodeling = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.aboutKitchen__IconTxt}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            About Our Brooklyn 
 
             <br />{" "}
              <span className="text-primary">Kitchen Renovation Company</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Welcome to RH Construction USA Inc. the best kitchen renovation company in Brooklyn, where we transform your culinary space into a haven of functionality and style. Whether you're looking for a modern minimalist aesthetic or a cozy traditional vibe, our team of experts is dedicated to delivering exceptional results tailored to your tastes and needs. From concept to completion, we prioritize experience of communication, collaboration, and attention to detail to ensure a seamless kitchen remodeling in Brooklyn. As we embark on the journey of remodeling your kitchen, we prioritize open communication and transparency. From the initial consultation to the final touches, our kitchen renovators ensure that your dream aesthetic kitchen is a collaborative creation, reflecting your style and surpassing your expectations.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/kitchen/About.png"
                width={810}
                height={526}
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

export default AboutKitchenRemodeling;