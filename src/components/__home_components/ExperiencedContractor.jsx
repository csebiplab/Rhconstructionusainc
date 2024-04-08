import constructor from "@/components/__home_components/Images/constructor.png";
import exp from "@/components/__home_components/Images/exp.png";
import Image from "next/image";

const ExperiencedContractor = () => {
  return (
    <div className="section-bg">
      <div className="py-9 md:py-10 lg:py-12 5xl:py-[120px] container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 lg:gap-10 xl:gap-12 3xl:gap-x-16 5xl:gap-x-20">
          <div className="md:col-span-2">
            <Image
              src={constructor}
              width={807}
              height={608}
              className="md:w-full lg:w-[807px] lg:h-[608px]"
              alt="constructor"
            />
          </div>
          <div className="mt-[26px] md:mt-0 md:col-span-3">
            <div className="flex justify-center md:block">
              <Image
                src={exp}
                width={190}
                height={19.02}
                alt="about"
                className="my-2"
              />
            </div>
            <h1 className="lg:leading-10 mb-1 mt-2 md:mt-0 lg:py-4 text-lg lg:text-4xl md:text-start text-center">
              EXPERIENCED BROOKLYN GENERAL CONTRACTOR
            </h1>
            <p className="md:text-[16px] text-black mx-auto text-start mt-[10px] md:mt-3 text-[12px] leading-[208%] lg:leading-[250%]">
              With years of expertise and a solid educational background, our
              Brooklyn-based general contracting firm stands out as a reliable
              partner for your construction projects. Our team comprises
              seasoned professionals who bring a wealth of knowledge and
              hands-on experience to every job site. From residential
              renovations to commercial builds, we have successfully delivered
              projects of varying scales, earning a reputation for excellence
              and integrity within the community
            </p>
            <p className="md:text-[16px] text-black mx-auto text-start mt-[10px] md:mt-3 text-[12px] leading-[208%] lg:leading-[250%]">
              At our core, we prioritize client satisfaction by combining our
              technical prowess with clear communication and meticulous
              attention to detail. Our commitment to staying abreast of industry
              advancements ensures that we employ the latest techniques and
              technologies to optimize project efficiency and quality. Whether
              you're envisioning a modern urban renovation or a timeless
              architectural masterpiece, our well-experienced and educated team
              is dedicated to bringing your vision to life with precision and
              professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencedContractor;
