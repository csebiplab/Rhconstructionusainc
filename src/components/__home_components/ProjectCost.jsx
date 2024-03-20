import cost from "@/components/__home_components/Images/cost.png";
import cost1 from "@/components/__home_components/Images/cost1.png";
import cost2 from "@/components/__home_components/Images/cost2.png";
import cost3 from "@/components/__home_components/Images/cost3.png";
import cost4 from "@/components/__home_components/Images/cost4.png";
import cost5 from "@/components/__home_components/Images/cost5.png";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const ProjectCost = () => {
    return (
        <div className="section-bg">
          <div className="custom-container">
            
            <div className="md:flex md:px-4 lg:px-[61px] justify-between md:py-6 lg:py-16 lg:gap-16">
            
            <div>
            <Image
                src={cost}
                width={116}
                height={18.02}
                alt="tools"
                className="my-2"
              />
              <h2 className="lg:leading-10 lg:text-4xl text-lg md:py-2 lg:py-4">
              HOW MUCH DOES A CONSTRUCTION PROJECT COST?
              </h2>
             
                    
            </div>
            <div>
            <p className="max-w-lg xl:max-w-5xl lg:text-xl md:text-sm mx-auto text-black lg:mt-4 md:mt-1">
            The cost of a construction project can vary widely depending on <br/> various factors such as the size, complexity, location, materials used,<br/>labor costs, and any additional requirements or unforeseen circumstances. <br/>Here are some key points to consider when estimating<br/> the cost of a construction project:
          
              </p>
            </div>
          </div>
    
        {/* //   ======================= Images Card ==================// */}
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-2 lg:gap-3 px-4 text-center lg:py-10 md:py-4">
                  <div className="lg:-mt-10 md:-mt-6">
                  <div className="w-full card-sd rounded-md">
                    <Image
                      src={cost1}
                      width={318}
                      height={238}
                      alt=""
                      className="w-full"
                    />
                    
                      <h5 className="lg:text-base md:text-sm py-2">Scope of Work</h5>
                      
                    
                  </div>
                  </div>
                  <div>
                  <div className="w-full card-sd rounded-md">
                    <Image
                      src={cost2}
                      width={318}
                      height={238}
                      alt=""
                      className="w-full"
                    />
                    
                      <h5 className="lg:text-base md:text-sm py-2">Materials</h5>
                      
                    
                  </div>
                  </div>
                  <div className="lg:-mt-10 md:-mt-6">
                  <div className="w-full card-sd rounded-md">
                    <Image
                      src={cost3}
                      width={318}
                      height={238}
                      alt=""
                      className="w-full"
                    />
                    
                      <h5 className="lg:text-base md:text-sm py-2">Labor Costs</h5>
                      
                    
                  </div>
                  </div>
                  <div >
                  <div className="w-full card-sd rounded-md">
                    <Image
                      src={cost4}
                      width={318}
                      height={238}
                      alt=""
                      className="w-full"
                    />
                    
                      <h5 className="lg:text-base md:text-sm py-2">Equipment and Machinery</h5>
                      
                    
                  </div>
                  </div>
                  <div className="lg:-mt-10 md:-mt-6">
                  <div className="w-full card-sd rounded-md">
                    <Image
                      src={cost5}
                      width={318}
                      height={238}
                      alt=""
                      className="w-full"
                    />
                    
                      <h5 className="lg:text-base md:text-sm py-2">Permits and Regulations</h5>
                      
                    
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
    );
};

export default ProjectCost;