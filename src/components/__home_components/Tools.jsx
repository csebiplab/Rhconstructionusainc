import equip from "@/components/__home_components/Images/equip.png";
import tools from "@/components/__home_components/Images/tools.png";
import Image from "next/image";
const Tools = () => {
    return (
   <div className="py-9 md:py-10 lg:py-12 5xl:py-[120px] container">
         <div className="grid grid-cols-1 md:grid-cols-7 gap-2 lg:gap-3 xl:gap-8 5xl:gap-[78px]">
        
        <div className="md:col-span-4 order-2 md:order-1">
          <div className="flex justify-center md:block">
          <Image
            src={tools}
            width={190}
            height={18.02}
            alt="tools"
            className="md:mt-0 mt-[26px]"
          />
          </div>
          <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start">
          HEAVING ALL KINDS OF BUILDING TOOLS & EQUIPMENTS
          </h2>
          <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start">
          RH Construction USA Inc. offers a comprehensive range of building tools and equipment tailored to meet the diverse needs of your project. Whether you're embarking on a small-scale renovation or overseeing a large construction endeavor, we have you covered with top-of-the-line tools and machinery. Our inventory encompasses everything from power drills and saws to heavy-duty excavators and cranes, ensuring that you have access to the right equipment to get the job done efficiently and effectively
      
          </p>
          <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start mt-2 md:mt-3">
          With our construction company, you can trust in the quality and reliability of our tools and equipment, sourced from reputable manufacturers renowned for their durability and performance. We understand the importance of having the right tools at your disposal to streamline construction processes and maximize productivity. From excavation to finishing touches, our diverse selection of building tools and equipment empowers you to tackle any project with confidence, knowing that you have the support of a trusted partner every step of the way.
          </p>
          
        </div>
        <div className="md:col-span-3 order-1 md:order-2">
          <Image src={equip} width={632} height={645} alt="equip" className="w-full h-full md:w-[632px] md:h-[645px]"/>
        </div>
      </div>
   </div>
    );
};

export default Tools;