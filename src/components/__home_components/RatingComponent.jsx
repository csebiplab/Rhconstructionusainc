"use client";
import vector from "@/components/__home_components/Images/Vector.png";
import Achievement from "./Achievement";
import Brand from "./Brand";
import Rating from "./Rating";
import RatingProgressBar from "./RatingProgressBar";
const RatingComponent = () => {
    return (
        <div className="lg:py-[15px] py-4">
        <div className="lg:w-[87.95%] md:w-full mx-auto">
          <div className="lg:w-[980px] md:w-full mx-auto container">
            <div className="rating lg:p-6 md:p-4 rounded-[8px]">
              <h2 className="lg:text-2xl md:text-lg lg:leading-[36px] mb-3">Ratings</h2>
              <div className="flex justify-between lg:gap-5 md:gap-3">
                <div className="md:w-[260px]">
                  <div>
                    <div className="lg:w-[60px] md:w-[35px] md:h-[35px] lg:h-[60px] mx-auto text-[#FAA500] lg:text-lg md:text-base font-bold text-center lg:leading-[60px] md:leading-[30px] border-[2px] border-[#DBDBDB] rounded-full">
                      4.9
                    </div>
                    <Rating/>
                    <p className="text-sm font-bold leading-[21px] text-[#1B1B1B] mt-1 text-center">
                      61 Verified Reviews*
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute top-[17px] h-[72px] w-[2px] bg-[#DBDBDB] mr-3"></span>
                </div>
                <div className="w-[390px]">
                  <RatingProgressBar />
                </div>
                <div className="relative">
                  <span className="absolute top-[17px] h-[72px] w-[2px] bg-[#DBDBDB]"></span>
                </div>
                <div className="w-[260px]">
                  <div>
                    <div className="flex">
                      <h4 className="text-[#000] lg:text-lg md:text-base font-bold lg:mb-5 md:mb-2">
                        Highly rated for
                      </h4>
                      <img
                        src={vector.src}
                        className="w-[22px] h-[24px] ms-3"
                      />
                    </div>
                    <div className="flex justify-center">
                      <h5 className="me-4 border-2 bg-[#EAEAEA] font-semibold text-[#000] text-sm px-2">
                        Quality
                      </h5>
                      <h5 className="border-2 bg-[#EAEAEA] font-semibold text-[#000] text-sm px-2">
                        Value
                      </h5>
                    </div>
                    <h5 className="border-2 bg-[#EAEAEA] text-[#000] font-semibold text-sm px-2 text-center mt-2 md:w-9/12 lg:w-8/12 mx-auto">
                      Customer Service
                    </h5>
                  </div>
                </div>
              </div>
              <p className="text-[12px] font-medium leading-[16px] text-[#666666] mt-[15px]">
                *Reviews imported from Google have not been individually
                verified by HomeAdvisor.
              </p>
            </div>

            <Achievement />
          </div>
          
        </div>
        <Brand />
      </div>
    );
};

export default RatingComponent;