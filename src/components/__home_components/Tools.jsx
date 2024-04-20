import tool from "@/components/__home_components/Images/tool.png";
import tool1 from "@/components/__home_components/Images/tool1.png";
import tool2 from "@/components/__home_components/Images/tool2.png";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";
import SmallHeadingWithIcon from "../ui/SmallHeadingWithIcon";
const Tools = () => {
  return (
    <div className="py-9 md:py-10 lg:py-12 5xl:py-[120px] container">
      <div className="md:flex gap-2 lg:gap-3 xl:gap-8 5xl:gap-[78px]">
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="flex justify-center md:block">
            <SmallHeadingWithIcon
              smallHeadingText={smHeadingTexts.toolsNEquip}
            />
          </div>
          <h1 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start">
            HEAVING ALL KINDS OF BUILDING TOOLS & EQUIPMENTS
          </h1>
          <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start">
            RH Construction USA Inc. offers a comprehensive range of building
            tools and equipment tailored to meet the diverse needs of your
            project. Whether you're embarking on a small-scale renovation or
            overseeing a large construction endeavor, we have you covered with
            top-of-the-line tools and machinery. Our inventory encompasses
            everything from power drills and saws to heavy-duty excavators and
            cranes, ensuring that you have access to the right equipment to get
            the job done efficiently and effectively
          </p>
          <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start mt-2 md:mt-3">
            With our construction company, you can trust in the quality and
            reliability of our tools and equipment, sourced from reputable
            manufacturers renowned for their durability and performance. We
            understand the importance of having the right tools at your disposal
            to streamline construction processes and maximize productivity. From
            excavation to finishing touches, our diverse selection of building
            tools and equipment empowers you to tackle any project with
            confidence, knowing that you have the support of a trusted partner
            every step of the way.
          </p>
        </div>

        {/* ======== Images Section ========= */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="lg:flex gap-4">
          <div className="hidden lg:block">
          <Image
            src={tool1}
            width={308}
            height={273}
            alt="tool1"
            className="rounded-lg border-2"
          />
          </div>
          <div className="hidden lg:block">
          <Image
            src={tool2}
            width={310}
            height={261}
            alt="tool2"
            className=""
          />
          </div>
          

          </div>
          
          <Image
            src={tool}
            width={632}
            height={645}
            alt="equip"
            className="w-full h-[245px] md:h-auto lg:h-[496px] mt-5 rounded-lg"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Tools;
