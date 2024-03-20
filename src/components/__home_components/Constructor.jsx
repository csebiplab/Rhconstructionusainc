import cons from "@/components/__home_components/Images/const.png";
import pp1 from "@/components/__home_components/Images/pp1.png";
import pp2 from "@/components/__home_components/Images/pp2.png";
import pp3 from "@/components/__home_components/Images/pp3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import Image from "next/image";
const Constructor = () => {
    return (
       <div className="section-bg">
        <div className="custom-container">
         <div className="lg:py-16 md:py-6 lg:px-[61] md:px-4">
            <div className="text-center">
            <Image
            src={cons}
            width={115}
            height={18.02}
            alt="cons"
            className="my-2 mx-auto"
          />
          <h2 className="lg:leading-10 lg:text-4xl md:text-lg md:py-2 lg:py-4">
          WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
          </h2>
            </div>
            {/* =================== Card Section =============== */}
            <div>
            <div className="grid grid-cols-1 md:px-3 lg:px-6 md:grid-cols-3 md:gap-4 lg:gap-20 text-center md:py-4 lg:py-10">
              <div className="w-full card-sd rounded-sm bg-white">
                <Image
                  src={pp1}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto md:mt-3 lg:mt-6"
                  
                />
                <div className="text-center">
                  <h4 className="lg:text-base md:text-sm py-2">Reputation and Experience</h4>
                  <p className="lg:text-sm md:text-xs text-black md:p-1 lg:p-2">
                  Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.
                  </p>
                </div>
              </div>
              <div className="w-full card-sd rounded-sm bg-white">
                <Image
                  src={pp2}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto md:mt-3 lg:mt-6"
                  
                />
                <div className="text-center">
                  <h4 className="lg:text-base md:text-sm py-2">Specialization and Expertise</h4>
                  <p className="lg:text-sm md:text-xs text-black md:p-1 lg:p-2">
                  Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project. Assess whether the contractor specializes.
                  </p>
                </div>
              </div>
              <div className="w-full card-sd rounded-sm bg-white">
                <Image
                 src={pp3}
                 width={100}
                 height={95}
                 alt=""
                 className="mx-auto md:mt-3 lg:mt-6"
                
                />
                <div className="text-center py-3">
                  <h4 className="lg:text-base md:text-sm py-2">Communication and Transparency</h4>
                  <p className="lg:text-sm md:text-xs text-black md:p-1 lg:p-2">
                  Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges. Regular updates and clear channels of communication will help prevent misunderstandings.
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* ======================== Button ================= */}
            <div className="flex lg:gap-8 md:gap-3 items-center justify-center lg:py-6 md:py-3">
                    {/* ========= first line ======== */}
                    <div className="lg:w-[330px] md:w-[220px] h-0.5 bg-black hidden md:block">
    
                    </div>
                    <div className="flex lg:gap-5 md:gap-3">
    
                        <button className="p-3 rounded-full border-2 hover:text-white hover:bg-black"><FaChevronLeft /></button>
                        <button className="text-white hover:text-black hover:bg-white border-2 p-3 bg-black rounded-full"><FaChevronRight /></button>
    
                    </div>
                    {/* =============== second line ============= */}
                    <div className="lg:w-[330px] md:w-[220px] h-0.5 bg-black hidden md:block">
    
                    </div>
                </div>
        </div>
       </div>
       </div>
    );
};

export default Constructor;