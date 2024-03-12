import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import vector from "@/components/__home_components/Images/Vector.png";
import Achieve from "@/components/__home_components/Images/Achieve.png";
import img1 from "@/components/__home_components/Images/img1.png";
import img2 from "@/components/__home_components/Images/img2.png";
import img3 from "@/components/__home_components/Images/img3.png";
import img4 from "@/components/__home_components/Images/img4.png";
import img5 from "@/components/__home_components/Images/img5.png";
import img6 from "@/components/__home_components/Images/img6.png";
import img7 from "@/components/__home_components/Images/img7.png";
import RatingProgressBar from "./RatingProgressBar";
import Image from "next/image";

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
      <div className="border-2 md:w-[980px] w-full mx-auto p-6 rounded-md ">
        <h3 className="py-4 font-bold text-2xl">Rating </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 px-8 justify-center items-center gap-6">
          {/* ============ fixed rating ========== */}
          <div>
            <div className="w-[60px] h-[60px] border-gray-300 border-2 rounded-full mb-2 flex items-center justify-center">
              <h3 className="text-base text-orange-700 mx-auto">4.9</h3>
            </div>
            <div className="flex items-center gap-1">{ratingStar}</div>
            <h3 className="font-semibold text-sm py-1">61 Verified Reviews*</h3>
          </div>

          {/* =================== Rating Progress bar ================ */}
          <div>
            <RatingProgressBar />
          </div>

          {/* ============= Highly Rated ============ */}

          <div>
            <div className="flex">
              <h4 className="text-[#000] font-bold mb-5">Highly rated for</h4>
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

        <p className="py-6">
          *Reviews imported from Google have not been individually verified by
          HomeAdvisor.
        </p>
      </div>
      {/* ================== AchieveMent =============== */}
      <div className="w-[980px] mx-auto">
        <div className="flex gap-2 mt-4">
          <div className="w-[180px] h-[147.98px] my-class rounded-[8px] pt-[31.25px] text-center">
            <h2 className="text-[38px] font-bold leading-[47.25px] mb-[5px]">
              98%
            </h2>
            <p className="text-lg font-bold leading-[22.5px]">Recommended</p>
          </div>
          <div className="w-[180px] h-[147.98px] my-class rounded-[8px] pt-[31.25px] text-center">
            <h2 className="text-[38px] font-bold leading-[47.25px] mb-[5px]">
              4
            </h2>
            <p className="text-lg font-bold leading-[22.5px]">
              Years In Business
            </p>
          </div>
          <div className="w-[604px] h-[147.98px] my-class rounded-[8px] px-[22.5px] pt-2">
            <h3 className="text-lg font-bold leading-[27px] mb-[5px]">
              Achievements
            </h3>
            <Image src={Achieve} width={559} height={82.98} alt="" />
          </div>
        </div>
      </div>

      {/* ================== Company Section ============= */}
      <div className="w-[1684px] mx-auto px-4">
        <div className="grid md:grid-cols-7 grid-cols-3 mt-4 gap-0">
          <div className="w-[215px] h-[174px]">
            <Image
              src={img1}
              width={190}
              height={147}
              className="rounded-[15px]  border-[1px] pb-3"
              alt=""
            />
          </div>

          <div className="w-[215px] h-[174px]">
            <Image
              src={img2}
              width={190}
              height={147}
              className="rounded-[15px]  border-[1px] pb-3"
              alt=""
            />
          </div>
          <div className="w-[215px] h-[174px]">
            <Image
              src={img3}
              width={190}
              height={147}
              className="rounded-[15px]  border-[1px] pb-3"
              alt=""
            />
          </div>
          <div className="w-[215px] h-[174px]">
            <Image
              src={img4}
              width={190}
              height={147}
              className="rounded-[15px]  border-[1px] pb-3"
              alt=""
            />
          </div>
          <div className="w-[215px] h-[174px]">
            <Image
              src={img5}
              width={190}
              height={147}
              className="rounded-[15px]  border-[1px] pb-3"
              alt=""
            />
          </div>
          <div className="w-[190px] h-[147px] rounded-[15px]  border-[1px]">
            <Image
              src={img6}
              width={100}
              height={85}
              className="mx-auto"
              alt=""
            />
            <p className="text-center">
              What a pleasure it was working with Maricelaâ s
            </p>
          </div>
          <div className="w-[190px] h-[147px] rounded-[15px]  border-[1px]">
            <Image
              src={img7}
              width={60}
              height={40}
              className="mx-auto mt-3"
              alt=""
            />
            <p className="text-center">I always receive excellent service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
