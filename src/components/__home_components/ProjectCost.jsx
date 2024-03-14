import cost from "@/components/__home_components/Images/cost.png";
import Image from "next/image";
const ProjectCost = () => {
    return (
        <div>
            
        <div className="md:flex px-8 justify-between py-8 md:py-16 md:gap-16">
        
        <div>
        <Image
            src={cost}
            width={116}
            height={18.02}
            alt="tools"
            className="my-2"
          />
          <h2 className="leading-10 mb-1 py-4">
          HOW MUCH DOES A <br/> CONSTRUCTION PROJECT COST?
          </h2>
         
                
        </div>
        <div>
        <p className="max-w-lg xl:max-w-5xl mx-auto text-black mt-4 md:mt-12">
        The cost of a construction project can vary widely depending on <br/> various factors such as the size, complexity, <br/> location, materials used, labor costs, and any additional <br/> requirements or unforeseen circumstances. <br/>Here are some key points to consider when estimating<br/> the cost of a construction project:
      
          </p>
        </div>
      </div>

    //   ======================= Images Card ==================//
        </div>
    );
};

export default ProjectCost;