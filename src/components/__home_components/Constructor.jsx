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
         <div className="md:py-16 py-6 lg:px-[61]">
            <div className="text-center">
            <Image
            src={cons}
            width={115}
            height={18.02}
            alt="cons"
            className="my-2 mx-auto"
          />
          <h2 className="leading-10 lg:text-4xl text-lg mb-1 py-4">
          WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
          </h2>
            </div>
            {/* =================== Card Section =============== */}
            <div>
            <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-5 lg:gap-20 text-center py-10">
              <div className="w-full card-sd rounded-sm bg-white">
                <Image
                  src={pp1}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto mt-6"
                  
                />
                <div className="text-center">
                  <h4 className="text-base py-2">Reputation and Experience</h4>
                  <p className="text-sm text-black p-2">
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
                  className="mx-auto mt-6"
                  
                />
                <div className="text-center">
                  <h4 className="text-base py-3">Specialization and Expertise</h4>
                  <p className="text-sm text-black p-2">
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
                 className="mx-auto mt-6"
                
                />
                <div className="text-center py-3">
                  <h4 className="text-base py-2">Communication and Transparency</h4>
                  <p className="text-sm text-black p-2">
                  Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges. Regular updates and clear channels of communication will help prevent misunderstandings.
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* ======================== Button ================= */}
            <div className="flex gap-8 items-center justify-center py-5">
                {/* ========= first line ======== */}
                <div className="w-[330px] h-0.5 bg-black hidden md:block">

                </div>
                <div className="flex gap-5">

                    <button className="p-3 rounded-full border-2 hover:text-white hover:bg-black"><FaChevronLeft /></button>
                    <button className="text-white hover:text-black hover:bg-white border-2 p-3 bg-black rounded-full"><FaChevronRight /></button>

                </div>
                {/* =============== second line ============= */}
                <div className="w-[330px] h-0.5 bg-black hidden md:block">

                </div>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Constructor;