import Image from "next/image";
import React from "react";
import band1 from "@/components/__home_components/Images/band1.png";
import band2 from "@/components/__home_components/Images/band2.png";
import band3 from "@/components/__home_components/Images/band3.png";
import band4 from "@/components/__home_components/Images/band4.png";
import band5 from "@/components/__home_components/Images/band5.png";
import band6 from "@/components/__home_components/Images/band6.png";
import band7 from "@/components/__home_components/Images/band7.png";

const Brand = () => {
  return (
    <div className="brands pt-10 grid grid-cols-7">
      <div className="brand w-[220px] h-[174px] border-[1px] border-[#EAEAEA] rounded-[15px] px-2 py-[14px] text-center">
        <Image
          src={band1}
          width={170}
          height={95}
          alt=""
          className="mb-[10px] mx-auto"
        />
        <h3 className="text-center  text-base leading-[21.1px]">
          R H CONSTRUCTION responds to texts.
        </h3>
      </div>
      <div className="brand w-[220px] h-[174px] border-[1px] border-[#EAEAEA] rounded-[15px] px-2 py-[14px] text-center">
        <Image
          src={band2}
          width={95}
          height={95}
          alt=""
          className="mb-[10px] mx-auto"
        />
        <h3 className="text-center  text-base leading-[21.1px]">
          The Construction company I have ever seen.
        </h3>
      </div>
      <div className="brand w-[220px] h-[174px] border-[1px] border-[#EAEAEA] rounded-[15px] px-2 py-[14px] text-center">
        <Image
          src={band3}
          width={95}
          height={95}
          alt=""
          className="mb-[10px] mx-auto"
        />
        <h3 className="text-center  text-base leading-[21.1px]">
          We hired R H CONSTRUCTION
        </h3>
      </div>
      <div className="brand w-[220px] h-[174px] border-[1px] border-[#EAEAEA] rounded-[15px] px-2 py-[14px] text-center">
        <Image
          src={band4}
          width={95}
          height={95}
          alt=""
          className="mb-[10px] mx-auto"
        />
        <h3 className="text-center  text-base leading-[21.1px]">
          Maricelas R H CONSTRUCTION
        </h3>
      </div>
      <div className="brand w-[220px] h-[174px] border-[1px] border-[#EAEAEA] rounded-[15px] px-2 py-[14px] text-center">
        <Image
          src={band5}
          width={95}
          height={95}
          alt=""
          className="mb-[10px] mx-auto"
        />
        <h3 className="text-center  text-base leading-[21.1px]">
          We never used a Construction service
        </h3>
      </div>
      <div className="brand w-[220px] h-[174px] border-[1px] border-[#EAEAEA] rounded-[15px] px-2 py-[14px] text-center">
        <Image
          src={band6}
          width={143}
          height={95}
          alt=""
          className="mb-[10px] mx-auto"
        />
        <h3 className="text-center  text-base leading-[21.1px]">
          What a pleasure it was working with R H
        </h3>
      </div>
      <div className="brand w-[220px] h-[174px] border-[1px] border-[#EAEAEA] rounded-[15px] px-2 py-[14px] text-center">
        <Image
          src={band7}
          width={79}
          height={48}
          alt=""
          className="mb-[10px] mx-auto py-6"
        />
        <h3 className="text-center  text-base leading-[21.1px]">
          I always receive excellent service.
        </h3>
      </div>
    </div>
  );
};

export default Brand;
