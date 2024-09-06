
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const BathroomRemodelingServices = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.bathroomRemodelingServices__IconTxt}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Dream Designs of <br/>
              <span className="text-primary">Bathroom Remodeling Services</span> <br/>
              in Brooklyn
            </h2>
            <p className="text-lg font-normal md:text-start text-center pt-[10px]">
            RH Construction USA Inc. brings dreams to life with its exquisite bathroom renovation design. Step into a sanctuary of luxury and functionality as our skilled team transforms your space into a haven of relaxation and style. Our expert designers work closely with clients for bathroom remodeling services in Brooklyn, ensuring every detail aligns with their vision. From custom vanities to elegant tile selections, we prioritize both aesthetics and practicality to create a bathroom that exceeds expectations.
            </p>
            <p className="text-lg font-normal md:text-start text-center pb-[10px]">
            Imagine a space where form seamlessly meets function - where carefully chosen fixtures and finishes merge effortlessly to create a cohesive and visually stunning environment. In the heart of Brooklyn, our company is synonymous with innovation in bathroom design. Our team embraces the latest trends and technology to bring you a bathroom that is as cutting-edge as it is comfortable. With a commitment to excellence and a passion for creating stunning spaces, our company is your partner in transforming your bathroom into a work of art, where design meets functionality in perfect harmony.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/BathroomRemodelingServices.png"
                width={810}
                height={700}
                alt="Bathroom Remodeling Services image"
                className="w-full h-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathroomRemodelingServices;