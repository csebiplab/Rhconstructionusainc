
import Image from "next/image";
import "./Expert.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const Expert = () => {
  return (
    <div>
      <div className="bg___color container common__padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Expert.png"
                width={680}
                height={495}
                alt="expert image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.expert__IconTxt}/>
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-black md:text-start text-center">
            Expert Bathroom Remodelers in Brooklyn <br />{" "}
              <span className="text-[#FB9401]">in Brooklyn </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. boasts an expert team of bathroom repair specialists, with precision and efficiency dedicated to delivering top-notch bathroom remodeling services in Brooklyn. With 15 years of experience in the industry, our skilled remodelers understand the intricacies of bathroom repair, from fixing leaks and plumbing issues to addressing tile and grout problems. From plumbing fixes to tile replacements, we prioritize delivering solutions that stand the test of time. Our repairman takes pride in our commitment to excellence, ensuring that each bathroom repair job is completed to the highest standards. With a focus on customer satisfaction, we strive to exceed expectations, making us the go-to choice for all your bathroom repair needs in Brooklyn.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;