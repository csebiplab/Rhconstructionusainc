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
        <div className="grid md:grid-cols-3 grid-cols-1">
          {/* ============ fixed rating ========== */}
          <div>
            <div className="w-[60px] h-[60px] border-gray-300 border-2 rounded-full mb-2">
              <h3 className="text-sm text-orange-600 mx-auto leading-12">
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
              <h4 className="text-[#000] font-bold">Highly rated for</h4>
              <div className="flex">
                <h5>Quality</h5>
                <h5>Value</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
