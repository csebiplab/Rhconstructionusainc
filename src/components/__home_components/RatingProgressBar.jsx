import Image from "next/image";

const RatingProgressBar = () => {
  const ratings = [3, 3, 1, 7, 141];
  const totalRatings = ratings.reduce((acc, curr) => acc + curr, 0);

  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const ratingCount = ratings[index] || 0;
    const percentage = (ratingCount / totalRatings) * 100;

    return (
      <div
        key={index}
        className="flex items-center justify-around md:gap-1 gap-[15px] w-full md:h-6 h-[11px] md:mb-[0px] mb-[15px]"
      >
        <div className="md:w-2/12 w-[7%] flex items-center md:gap-2 gap-1">
          <span className="md:text text-[10px]">{index + 1}</span>
          <Image
            width={16}
            height={16}
            className="md:w-4 w-[11px]  md:h-4 h-[11px]"
            src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
            alt="icon"
          />
        </div>
        <div className="md:w-8/12 w-[90%] bg-gray-200 rounded-[2px]">
          <div
            className={`md:h-4 h-[9px] bg-[#FFC700] rounded-[2px]`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="md:w-1/12 w-[3%] text-end text-[10px]">
          {ratingCount}
        </span>
      </div>
    );
  });

  return <div className="w-full">{ratingStar.reverse()}</div>;
};

export default RatingProgressBar;
