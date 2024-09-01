
import Image from "next/image";
import "./ChooseUs.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const ChooseUs = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.chooseUs__IconTxt}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Choose the Best Designs For Your 
            <br />{" "}
              <span className="text-primary"> Kitchen Remodeling</span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            When embarking on a project of kitchen remodeling in Brooklyn, selecting the best designs can significantly enhance both the aesthetics and functionality of your space. Opting for a layout that maximizes efficiency while complementing your style is essential. Consider incorporating features such as ample storage solutions, durable countertops, and high-quality appliances to create a practical yet visually appealing kitchen. Additionally, selecting a cohesive color scheme and coordinating fixtures can tie the space together seamlessly. Whether you prefer a modern, minimalist design or a more traditional aesthetic, thoughtful consideration of these elements will ensure a successful kitchen renovation that meets your needs and reflects your taste.
            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/kitchen/WHy Choose Us.png"
                width={810}
                height={480}
                alt="WHy Choose Us image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;