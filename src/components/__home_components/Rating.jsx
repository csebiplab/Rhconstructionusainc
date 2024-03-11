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
        <h3 className="py-4">Rating </h3>
        <div>
          <h3 className="text-md text-orange-600 mb-2 w-20 h-20 border-gray-300 border-2 rounded-full mx-auto leading-20 text-center">
            4.9
          </h3>
          <div className="flex items-center gap-1">{ratingStar}</div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
