
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const StunningDesign = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.stunningDesign__HeadingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
            Stunning Designs for  
 
             <br className="hidden 2xl:block"/>{" "}
              <span className="text-primary-50">Exceptional Home Remodeling</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center pt-[10px]">
            At our Brooklyn home remodeling company, our home renovator believes that stunning designs are the heart of every successful home renovation. Our talented designers work closely with clients to understand their preferences and lifestyles, creating spaces that not only meet but exceed expectations. Whether you're looking for a modern, sleek makeover or a classic, timeless design, our experts have the creativity and expertise to bring your ideas to life.
            </p>
            <p className="text-lg font-normal md:text-start text-center">
            What sets our company apart is our unwavering commitment to excellence. We take pride in delivering exceptional home renovations that not only enhance the aesthetic appeal of your living space but also add value to your property. With a focus on quality craftsmanship and attention to detail, our team ensures that every project is executed to perfection. Trust us for a home transformation that goes beyond expectations, combining streamlined processes, stunning designs, and exceptional results.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/brooklyn_Home/Stunning Design.png"
                width={810}
                height={513}
                alt="Stunning Design image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StunningDesign;