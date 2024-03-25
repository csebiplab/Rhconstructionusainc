import title from "@/components/__home_components/Images/title.png";
import work from "@/components/__home_components/Images/work.png";
import work1 from "@/components/__home_components/Images/work1.png";
import work2 from "@/components/__home_components/Images/work2.png";
import work3 from "@/components/__home_components/Images/work3.png";
import Image from "next/image";

const RhconstructionSection = () => {
  return (
    <div className="py-9 md:py-10 lg:py-12 5xl:py-[120px] container">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 lg:gap-10 xl:gap-12 3xl:gap-x-16 5xl:gap-x-20">
        <div className="md:col-span-2">
          <Image
            src={work}
            width={608}
            height={608}
            alt="rh"
            layout="responsive"
            className="w-full h-full md:w-[608px] md:h-[608px] mx-auto"
          />
        </div>
        <div className="mt-[26px] md:mt-0 md:col-span-3">
          <Image
            src={title}
            width={298}
            height={18}
            className="lg:m-0 md:m-auto"
            alt="RH Construction"
          />
          <h1 className="lg:leading-10 mb-1 mt-2 md:mt-0 lg:py-4 text-lg lg:text-4xl text-start">
            R H Construction USA, Inc.
          </h1>
          <p className="lg:text-[16px] md:text-xs xs:text-[12px] text-black mx-auto text-start mt-[10px] md:mt-3 lg:mt-3 text-[12px] leading-[208%] lg:leading-[250%]">
            RH Construction USA Inc. stands out as one of the leading
            construction companies in Brooklyn, embodying a commitment to
            excellence and innovation in the industry. With a proven track
            record of successfully delivering a diverse range of construction
            projects, the general contractor of our construction company has
            earned a stellar reputation for its dedication to quality
            craftsmanship and timely completion.
          </p>

          {/* ============== Image Card =============== */}
          <div className="grid grid-cols-3 gap-3 lg:gap-3 text-center pt-5 lg:pt-6">
            <div className="w-full card-sd rounded-[9x]">
              <Image
                src={work1}
                width={221}
                height={148}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Highly trained Staff
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-black">
                  We hire only highly trained staff for best results.
                </p>
              </div>
            </div>
            <div className="w-full card-sd rounded-[9x]">
              <Image
                src={work2}
                width={221}
                height={148}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Competitive Pricing
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-black">
                  We quote the best price possible in the industry.
                </p>
              </div>
            </div>
            <div className="w-full card-sd rounded-[9x]">
              <Image
                src={work3}
                width={221}
                height={148}
                alt=""
                className="w-full"
              />
              <div className="text-center py-3">
                <h4 className="lg:text-base md:text-sm py-1 md:py-2 text-[12px]">
                  Satisfaction Guaranteed
                </h4>
                <p className="lg:text-sm md:text-xs text-[8px] md:px-1 text-black">
                  100% Customer satisfaction is our sole motto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhconstructionSection;
