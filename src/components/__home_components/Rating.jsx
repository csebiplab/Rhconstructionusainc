import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import vector from "@/components/__home_components/Images/Vector.png";
import Progress from "@/components/__home_components/Images/Section.png";
import Achieve from "@/components/__home_components/Images/Achieve.png";

const Rating = () => {
  let stars = 5;
  const ratingStar = Array.from({ length: 5 }, (star, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <FaStar className="text-orange-700" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-orange-700"></FaStarHalfAlt>
        ) : (
          <AiOutlineStar className="text-orange-700"></AiOutlineStar>
        )}
      </span>
    );
  });
  return (
    <div>
      <div className="border-2 md:w-10/12 w-full mx-auto p-6 rounded-md ">
        <h3 className="py-4 font-bold text-2xl">Rating </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 px-8 justify-center items-center gap-6">
          {/* ============ fixed rating ========== */}
          <div>
            <div className="w-[60px] h-[60px] border-gray-300 border-2 rounded-full mb-2 flex items-center justify-center">
              <h3 className="text-base text-[#FAA500] mx-auto">4.9</h3>
            </div>
            <div className="flex items-center gap-1">{ratingStar}</div>
            <h3 className="font-semibold text-sm py-1">61 Verified Reviews*</h3>
          </div>

          {/* =================== Rating Progress bar ================ */}
          <div>
            <img src={Progress.src} />
          </div>

          {/* ============= Highly Rated ============ */}
          <div>
            <div>
              <div className="flex">
                <h4 className="text-[#000] font-bold mb-3">Highly rated for</h4>
                <img src={vector.src} className="w-[22px] h-[24px] ms-3" />
              </div>
              <div className="flex justify-center">
                <h5 className="me-4 border-2 bg-[#EAEAEA] font-semibold text-[#000] text-sm px-2">
                  Quality
                </h5>
                <h5 className="border-2 bg-[#EAEAEA] font-semibold text-[#000] text-sm px-2">
                  Value
                </h5>
              </div>
              <h5 className="border-2 bg-[#EAEAEA] text-[#000] font-semibold text-sm px-2 text-center mt-2 w-8/12 mx-auto">
                Customer Service
              </h5>
            </div>
          </div>
        </div>
        <p className="py-6">
          *Reviews imported from Google have not been individually verified by
          HomeAdvisor.
        </p>
      </div>
      <div>
        {/* ================== AchieveMent =============== */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-10/12 w-full mx-auto py-8 justify-center items-center">
          <div className="w-4/12">
            <div className="border-2 rounded-md p-4 text-center">
              <h3 className="text-2xl">98%</h3>
              <p>Recommended</p>
            </div>
            <div className="border-2 rounded-md p-4 text-center w-3/12">
              <h3 className="text-2xl">4</h3>
              <p>Years In Business</p>
            </div>
          </div>
          <div className="w-8/12">
            <img src={Achieve.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
