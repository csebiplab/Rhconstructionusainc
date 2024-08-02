
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const TrustUs = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.trusUs__HeadingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
            Brooklyn Home Renovators  
 
             <br className="hidden 2xl:block"/>{" "}
              <span className="text-primary-50">You Can Trust!</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Trust our expert home renovators in Brooklyn for all your home renovation and remodeling needs. Our team is skilled in transforming spaces to suit your style and needs. Whether you're looking to update your kitchen, renovate your bathroom, or transform your entire home, our team of skilled home renovators is here to help. From concept to completion, we'll work closely with you to bring your vision to life, providing expert guidance and quality craftsmanship every step of the way. Let us help you create the home you've always wanted with our Brooklyn home remodeling services.

            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/brooklyn_Home/Trust Us.png"
                width={810}
                height={513}
                alt="Trust us image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;