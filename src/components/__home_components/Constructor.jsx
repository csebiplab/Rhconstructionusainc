import cons from "@/components/__home_components/Images/const.png";
import pp1 from "@/components/__home_components/Images/pp1.png";
import pp2 from "@/components/__home_components/Images/pp2.png";
import pp3 from "@/components/__home_components/Images/pp3.png";
import Image from "next/image";
const Constructor = () => {
    return (
        <div className="md:py-16 py-6 px-8">
            <div className="text-center">
            <Image
            src={cons}
            width={115}
            height={18.02}
            alt="cons"
            className="my-2 mx-auto"
          />
          <h2 className="leading-10 mb-1 py-4">
          WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
          </h2>
            </div>
            {/* =================== Card Section =============== */}
            <div>
            <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-20 text-center py-10">
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                  src={pp1}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto"
                  
                />
                <div className="text-center">
                  <h4 className="text-base py-2">Reputation and Experience</h4>
                  <p className="text-sm text-black p-2">
                  Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.
                  </p>
                </div>
              </div>
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                  src={pp2}
                  width={100}
                  height={95}
                  alt=""
                  className="mx-auto"
                  
                />
                <div className="text-center">
                  <h4 className="text-base py-3">Specialization and Expertise</h4>
                  <p className="text-sm text-black p-2">
                  Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project. Assess whether the contractor specializes.
                  </p>
                </div>
              </div>
              <div className="w-full shadow-md p-0 rounded-sm mx-auto">
                <Image
                 src={pp3}
                 width={100}
                 height={95}
                 alt=""
                 className="mx-auto"
                
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
        </div>
    );
};

export default Constructor;