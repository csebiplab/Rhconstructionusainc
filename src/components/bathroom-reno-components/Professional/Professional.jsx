
import Image from "next/image";
import "./Professional.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import { BsDot } from "react-icons/bs";

const trustedLine1 = [
    {
        id : 1,
        para : "Concrete Bathroom Floor"
    },
    {
        id : 2,
        para : "Concrete Bathroom Floor"
    },
    {
        id : 3,
        para : "Concrete Bathroom Walls"
    },
    
]
const trustedLine2 = [
    {
        id : 1,
        para : "Concrete Bathroom Vanity top"
    },
    {
        id : 2,
        para : "Concrete Bathroom Sinks"
    },
]
const trustedLine3 = [
    {
        id : 1,
        para : "Marble Bathroom Floor"
    },
    {
        id : 2,
        para : "Modern Marble Bathroom"
    },
    {
        id : 3,
        para : "Marble Bathroom Sink"
    },
    {
        id : 4,
        para : "Luxury Marble Bathroom"
    },
]
const trustedLine4 = [
    {
        id : 1,
        para : "Marble Bathroom Countertops"
    },
    {
        id : 2,
        para : "Black Marble Bathroom"
    },
    {
        id : 3,
        para : "Marble Bathroom Vanity"
    }
]

const Professional = () => {
  return (
    <div>
      <div className="bg___color container common__padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Professional.png"
                width={680}
                height={495}
                alt="Professional image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.professional__IconTxt}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            Professional Bathroom <br/> Remodeling Services 
                <br />
              <span className="text-[#FB9401]">in Brooklyn </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            As a leading construction company in Brooklyn, our company brings years of experience and a team of skilled professionals to every project, ensuring high-quality craftsmanship and timely completion. Some bathroom renovation services that our company offers

            </p>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            <span className="font-bold">Concrete Bathroom:</span> A concrete bathroom is a bathroom where various elements such as floors, walls, countertops, and even sinks are made primarily or entirely out of concrete.

            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-1 xl:gap-2 2xl:gap-3 3xl:gap-[14px] 4xl:gap-4 5xl:gap-[18px] pb-[15px]">
            <div>
                {
                    trustedLine1?.map((trust)=>{
                        return <ul key={trust.id}>
                            <li className="flex justify-center lg:justify-start items-center text-lg font-bold text-center md:text-left text-black pt-[10px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[13px] 4xl:pt-[14px] 5xl:pt-[15px]"><BsDot/>{trust.para}</li>
                        </ul>
                    })
                }
            </div>
            <div>
                {
                    trustedLine2?.map((trust)=>{
                        return <ul key={trust.id}>
                            <li className="flex justify-center lg:justify-start items-center text-lg font-bold text-center md:text-left text-black pt-[10px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[13px] 4xl:pt-[14px] 5xl:pt-[15px]"><BsDot/>{trust.para}</li>
                        </ul>
                    })
                }
            </div>
            </div>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            <span className="font-bold">Marble Bathroom:</span>  A marble bathroom exudes elegance and luxury, boasting a timeless aesthetic that captivates with its sophistication. The opulent allure of marble, with its intricate veins and polished surface.

            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-1 xl:gap-2 2xl:gap-3 3xl:gap-[14px] 4xl:gap-4 5xl:gap-[18px] pb-[15px]">
            <div>
                {
                    trustedLine3?.map((trust)=>{
                        return <ul key={trust.id}>
                            <li className="flex justify-center lg:justify-start items-center text-lg font-bold text-center md:text-left text-black pt-[10px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[13px] 4xl:pt-[14px] 5xl:pt-[15px]"><BsDot/>{trust.para}</li>
                        </ul>
                    })
                }
            </div>
            <div>
                {
                    trustedLine4?.map((trust)=>{
                        return <ul key={trust.id}>
                            <li className="flex justify-center lg:justify-start items-center text-lg font-bold text-center md:text-left text-black pt-[10px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[13px] 4xl:pt-[14px] 5xl:pt-[15px]"><BsDot/>{trust.para}</li>
                        </ul>
                    })
                }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;