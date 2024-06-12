
import Image from "next/image";
import "./TurnKeys.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import key1 from "../../../../public/assets/images/key1.png";
import key2 from "../../../../public/assets/images/key2.png";
import key3 from "../../../../public/assets/images/key3.png";
import key4 from "../../../../public/assets/images/key4.png";
import key5 from "../../../../public/assets/images/key5.png";
import key6 from "../../../../public/assets/images/key6.png";
import key7 from "../../../../public/assets/images/key7.png";
import key8 from "../../../../public/assets/images/key8.png";
import key9 from "../../../../public/assets/images/key9.png";

const keyData = [
  {
    id : 1, 
    title : "Comprehensive bathroom remodeling solutions",
    img : key1
  },
  {
    id : 2, 
    title : "Experienced team of contractors and designers",
    img : key2
  },
  {
    id : 3, 
    title : "Customized designs tailored to client preferences",
    img : key3
  },
  {
    id : 4, 
    title : "High-quality materials and fixtures used",
    img : key4
  },
  {
    id : 5, 
    title : "Efficient project manage for timely completion",
    img : key5
  },
  {
    id : 6, 
    title : "Budget-friendly options available",
    img : key6
  },
  {
    id : 7, 
    title : "Expertise in maximizing space and functionality",
    img : key7
  },
  {
    id : 8, 
    title : "Eco-friendly and sustainable design choices",
    img : key8
  },
  {
    id : 9, 
    title : "Customer satisfaction guaranteed",
    img : key9
  },
]

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

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-[14px]">
  {keyData?.map((key) => (
    <div key={key.id} className="cart__bg">
      <Image src={key.img} alt="key image" width={48} height={48} className="w-[48px] h-[48px] mx-auto border-2 border-black rounded-full p-2"/>
      <h6 className="text-center text-base font-bold">{key.title}</h6>
    </div>
  ))}
</div>

            
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