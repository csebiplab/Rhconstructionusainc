import band1 from "@/components/__home_components/Images/band1.png";
import band2 from "@/components/__home_components/Images/band2.png";
import band3 from "@/components/__home_components/Images/band3.png";
import band4 from "@/components/__home_components/Images/band4.png";
import band5 from "@/components/__home_components/Images/band5.png";
import band6 from "@/components/__home_components/Images/band6.png";
import band7 from "@/components/__home_components/Images/band7.png";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="">
      <div className="brands mt-6 grid grid-cols-7 gap-3 2xl:gap-4 4xl:gap-6">
        <div className="flex items-center justify-center">
          <div className="brand w-full md:h-[174px] rounded-[15px] px-1 md:py-[3px] py-1 text-center">
            <div>
              <Image
                src={band1}
                width={110}
                height={95}
                alt="brand1"
                className="lg:mb-[10px] md:w-3/4 md:mb-[1px] mt-2 mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="brand w-full md:h-[174px] rounded-[15px] lg:px-2 md:px-1 lg:py-[14px] md:py-[5px]  text-center p-2 md:p-0">
          <Image
            src={band2}
            width={110}
            height={95}
            alt="brand1"
            className="lg:mb-[10px] md:w-3/4 md:mb-[1px] mt-3  mx-auto"
          />
        </div>

        <div className="brand w-full md:h-[174px] rounded-[15px] lg:px-2 md:px-1 lg:py-[14px] py-[5px] text-center">
          <Image
            src={band3}
            width={110}
            height={95}
            alt="brand1"
            className="lg:mb-[10px] md:mt-3 md:mb-[5px] mx-auto"
          />
        </div>
        <div className="brand w-full md:h-[174px] rounded-[15px] lg:px-2 md:px-1 lg:py-[14px] py-[5px] md:text-start text-center">
          <Image
            src={band4}
            width={80}
            height={70}
            alt="brand1"
            className="lg:mb-[10px] md:mb-[2px] mx-auto"
          />
        </div>
        <div className="brand w-full md:h-[174px] rounded-[15px] lg:px-2 md:px-1 lg:py-[14px] md:py[5px] text-center">
          <Image
            src={band5}
            width={110}
            height={90}
            alt="brand1"
            className="lg:mb-[10px] lg:mt-8 md:mt-6 mt-5 mx-auto"
          />
        </div>
        <div className="brand w-full md:h-[174px] rounded-[15px] lg:px-2 px-1 lg:py-[14px] md:py-[5px] text-center">
          <Image
            src={band6}
            width={110}
            height={90}
            alt="brand1"
            className="lg:mb-[10px] md:mb-[5px] md:mt-3 lg:mt-1 mx-auto"
          />
        </div>

        <div className="brand band-card w-full md:h-[174px] rounded-[15px] lg:px-2 px-1 lg:py-[14px] md:py-[5px] py-3 text-center xs:mx-auto mx-0">
          <Image
            src={band7}
            width={60}
            height={48}
            alt="brand1"
            className="lg:mb-[10px] mb-[5px] mx-auto md:mt-6 mt-3 md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
