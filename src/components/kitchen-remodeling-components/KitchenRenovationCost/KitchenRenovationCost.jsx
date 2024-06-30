import Image from "next/image";
import "./KitchenRenovationCost.css";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const KitchenRenovationCost = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p  common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.kitchenRenovationCost__IconTxt}
              />
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
              How Much Does a
              <br />{" "}
              <span className="text-primary"> Kitchen Renovation Cost?</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
              The cost of a kitchen remodeling project can vary widely depending
              on various factors, including the scope of the renovation, the
              materials used, and the location. When working with a renovation
              company like RH Construction USA Inc., it's essential to consider
              their pricing structure and the specific requirements of your
              project. The cost of a kitchen remodeling project can vary widely
              depending on factors such as the size of the kitchen, the quality
              of materials used, and the extent of the renovation. On average,
              homeowners can expect to pay anywhere from <b>$10,000</b> to{" "}
              <b>$50,000</b> for a basic remodel, while a more high-end
              renovation can range from <b>$50,000</b> to <b>$100,000</b> or
              more.
            </p>
            <div className="flex justify-center md:justify-start">
            <Link
              href={`tel:+1 (646) 683-4612`}
              className="text-sm font-bold text-black"
            >
              <Button className="!px-[34px] !py-2 rounded-[10px] bg-primary text-black text-xs lg:text-lg font-bold capitalize flex items-center gap-x-2">
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                >
                  <path
                    d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </Link>
            </div>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/kitchen/Kitchen Renovation Cost.png"
                width={810}
                height={550}
                alt="bathroom-remodeling image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenRenovationCost;
