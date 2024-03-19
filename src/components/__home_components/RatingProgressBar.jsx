
const RatingProgressBar = () => {
  const ratings = [3,3,1,7,141];
  const totalRatings = ratings.reduce((acc, curr) => acc + curr, 0);

  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const ratingCount = ratings[index] || 0;
    const percentage = (ratingCount / totalRatings) * 100;

    return (
      <div key={index} className="flex items-center justify-around gap-1 w-full h-6">
        <div className="w-2/12 flex items-center gap-2">
          <span>{index + 1}</span>
          <img
            className="w-4 h-4"
            src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
            alt=""
          />
        </div>
        <div className="w-8/12 bg-gray-200 rounded-[2px]">
          <div
            className={`h-4 bg-[#FFC700] rounded-[2px]`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="w-1/12 text-end">{ratingCount}</span>
      </div>
    );
  });

  return <div className="w-full">{ratingStar.reverse()}</div>;
};

export default RatingProgressBar;
