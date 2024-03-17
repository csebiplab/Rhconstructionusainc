import equip from "@/components/__home_components/Images/equip.png";
import tools from "@/components/__home_components/Images/tools.png";
import Image from "next/image";
const Tools = () => {
    return (
   <div className="custom-container">
         <div className="md:flex lg:px-[61px] justify-between py-12 gap-10">
        
        <div className="">
          <Image
            src={tools}
            width={190}
            height={18.02}
            alt="tools"
            className="my-2"
          />
          <h2 className="leading-10 mb-1 py-4 lg:text-4xl text-lg">
          HEAVING ALL KINDS OF BUILDING TOOLS & <br/> EQUIPMENTS
          </h2>
          <p className="max-w-lg xl:max-w-5xl mx-auto text-black mt-4">
          RH Construction USA Inc. offers a comprehensive range of building tools and equipment tailored to meet the diverse needs of your project. Whether you're embarking on a small-scale renovation or overseeing a large construction endeavor, we have you covered with top-of-the-line tools and machinery. Our inventory encompasses everything from power drills and saws to heavy-duty excavators and cranes, ensuring that you have access to the right equipment to get the job done efficiently and effectively
      
          </p>
          <p className="max-w-lg xl:max-w-5xl mx-auto mt-4">
          With our construction company, you can trust in the quality and reliability of our tools and equipment, sourced from reputable manufacturers renowned for their durability and performance. We understand the importance of having the right tools at your disposal to streamline construction processes and maximize productivity. From excavation to finishing touches, our diverse selection of building tools and equipment empowers you to tackle any project with confidence, knowing that you have the support of a trusted partner every step of the way.
          </p>
          
        </div>
        <div>
          <Image src={equip} width={670} height={699} alt="equip" />
        </div>
      </div>
   </div>
    );
};

export default Tools;