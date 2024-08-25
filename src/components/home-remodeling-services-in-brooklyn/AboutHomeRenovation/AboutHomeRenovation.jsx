
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const AboutHomeRenovation = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.aboutHomeRenovation__HeadingIconText}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
            About Home Renovation Contractors  
   
             <br className="hidden 2xl:block"/>{" "}
              <span className="text-primary-50">in Brooklyn</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. stands out as the premier choice for home remodeling in Brooklyn. With a stellar reputation for delivering top-notch craftsmanship and unparalleled customer satisfaction, our home renovation contractors have become synonymous with excellence in the industry. From concept to completion, our home renovator takes a personalized approach to each project, ensuring that the client's vision is brought to life with precision and care. Our team of skilled professionals is known for our attention to detail, commitment to quality, and ability to transform spaces into stunning, functional works of art. Whether it's a kitchen remodel, bathroom renovation, or a complete home makeover, our home renovation company is dedicated to exceeding expectations and making every home renovation dream a reality in the vibrant borough of Brooklyn.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/brooklyn_Home/about_home_reno.png"
                width={810}
                height={550}
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

export default AboutHomeRenovation;