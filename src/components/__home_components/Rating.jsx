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
          <FaStar className="text-yellow-500"></FaStar>
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-yellow-500"></FaStarHalfAlt>
        ) : (
          <AiOutlineStar className="text-yellow-500"></AiOutlineStar>
        )}
      </span>
    );
  });
  return (
    <div>
      <div className="border-2 md:w-8/12 w-full mx-auto py-6">
        <h3>Rating </h3>
        <div>
          <h3 className="">4.9</h3>
          <div className="flex items-center gap-1">{ratingStar}</div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
