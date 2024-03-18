import achievement from "@/components/__home_components/Images/Achieve.png";
import Image from "next/image";

const Achievement = () => {
  return (
    <>
     <div className="custom-container">
     <div className="flex gap-2 md:mt-3 lg:mt-4">
        <div className="lg:w-[180px] lg:h-[147.98px] my-class rounded-[8px] pt-[31.25px] text-center">
          <h2 className="lg:text-[38px] md:text-lg font-bold lg:leading-[47.25px] md:leading-[30px] mb-[5px] ">
            96%
          </h2>
          <p className="lg:text-lg md:text-sm font-bold md:leading-[18px] lg:leading-[22.5px]">Recommended</p>
        </div>
        <div className="w-[180px] h-[147.98px] my-class rounded-[8px] pt-[31.25px] text-center">
          <h2 className="lg:text-[38px] font-bold text-lg lg:leading-[47.25px] mb-[5px]">
            15
          </h2>
          <p className="lg:text-lg text-sm font-bold leading-[22.5px]">
            Years In Business
          </p>
        </div>
        <div className="lg:w-[604px] lg:h-[147.98px] my-class rounded-[8px] px-[22.5px] pt-2">
          <h3 className="text-base lg:text-lg font-bold leading-[27px] mb-[5px]">
            Achievements
          </h3>
          <Image src={achievement} width={559} height={82.98} alt="" className="md:w-[400px] md:h-[60px]" />
        </div>
      </div>
     </div>
    </>
  );
};

export default Achievement;
