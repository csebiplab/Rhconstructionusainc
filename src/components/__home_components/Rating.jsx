import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

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
      <div className="border-2 md:w-8/12 w-full mx-auto p-6 rounded-md ">
        <h3 className="py-4 font-bold text-2xl">Rating </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 px-8">
          {/* ============ fixed rating ========== */}
          <div>
            <div className="w-[60px] h-[60px] border-gray-300 border-2 rounded-full mb-2 ">
              <h3 className="text-base text-orange-600 mx-auto flex items-center justify-center">
                4.9
              </h3>
            </div>
            <div className="flex items-center gap-1">{ratingStar}</div>
            <h3 className="font-semibold text-sm py-1">61 Verified Reviews*</h3>
          </div>

          {/* =================== Rating Progress bar ================ */}
          <div>
            <h3>Rating Progress</h3>
          </div>

          {/* ============= Highly Rated ============ */}
          <div>
            <div>
              <h4 className="text-[#000] font-bold mb-3">Highly rated for</h4>
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
    </div>
  );
};

export default Rating;
