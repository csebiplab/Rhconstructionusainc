
import Image from "next/image";
import "./TurnKeys.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";



const TurnKeys = () => {
  return (
    <div className="bg___color">
      <div className="full__section_r_p common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.turnKeys__IconTxt}/>
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-[35px] font-bold text-black md:text-start text-center">
            Turn Keys to Our 
             <br />{" "}
              <span className="text-primary"> Bathroom Remodeling Services</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            With our turnkey approach, we handle every aspect of your bathroom renovation project, ensuring a seamless and stress-free experience for you.
            </p>
            
          </div>
          <div className="order-1 md:col-span-4 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Turn_Keys.png"
                width={964}
                height={532}
                alt="Turn_Keys image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnKeys;