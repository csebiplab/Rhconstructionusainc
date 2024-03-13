import Image from "next/image";
import React from "react";
import achievement from "@/components/__home_components/Images/Achieve.png";

const Achievement = () => {
  return (
    <>
      <div className="flex gap-2 mt-4">
        <div className="w-[180px] h-[147.98px] my-class rounded-[8px] pt-[31.25px] text-center">
          <h2 className="text-[38px] font-bold leading-[47.25px] mb-[5px]">
            98%
          </h2>
          <p className="text-lg font-bold leading-[22.5px]">Recommended</p>
        </div>
        <div className="w-[180px] h-[147.98px] my-class rounded-[8px] pt-[31.25px] text-center">
          <h2 className="text-[38px] font-bold leading-[47.25px] mb-[5px]">
            4
          </h2>
          <p className="text-lg font-bold leading-[22.5px]">
            Years In Business
          </p>
        </div>
        <div className="w-[604px] h-[147.98px] my-class rounded-[8px] px-[22.5px] pt-2">
          <h3 className="text-lg font-bold leading-[27px] mb-[5px]">
            Achievements
          </h3>
          <Image src={achievement} width={559} height={82.98} alt="" />
        </div>
      </div>
    </>
  );
};

export default Achievement;
