import achievement from "@/components/__home_components/Images/Achieve.png";
import Image from "next/image";

const Achievement = () => {
  return (
    <>
      <div className="custom-container">
      <div className="flex gap-2 xs:mt-5 md:mt-3 lg:mt-4">
          <div className="md:w-[180px] md:h-[147.98px] md:flex-0 my-class rounded-[8px] pt-[31.25px] text-center">
            <h2 className="lg:text-[38px] text-lg font-bold lg:leading-[47.25px] md:mb-[5px] xs:mb-0 ">
              96%
            </h2>
            <p className="lg:text-lg text-base font-bold lg:leading-[22.5px]">
              Recommended
            </p>
          </div>
          <div className="md:w-[180px] md:h-[147.98px] md:flex-0 my-class rounded-[8px] pt-[31.25px] text-center">
            <h2 className="lg:text-[38px] font-bold text-lg lg:leading-[47.25px] xs:mb-0 md:mb-[5px]">
              15
            </h2>
            <p className="lg:text-lg text-base font-bold lg:leading-[22.5px]">
              Years In Business
            </p>
          </div>
          <div className="md:w-[604px] md:h-[147.98px] my-class rounded-[8px] px-[22.5px] md:pt-2 xs:pt-5">
            <h3 className="text-base lg:text-lg font-bold lg:leading-[27px] mb-[5px]">
              Achievements
            </h3>
            <Image
              src={achievement}
              width={559}
              height={82.98}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
