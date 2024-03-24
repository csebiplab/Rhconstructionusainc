import Image from "next/image";

const Rating = () => {
  let stars = 5;
  const ratingStar = Array.from({ length: 5 }, (star, i) => {

    return (
      <span key={i}>
        {stars >= i + 1 && (
          <Image
          src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
          width={20}
          height={19}
          alt=""
          className="md:w-[20px] md:h-[19px] w-[9.84px] h-[9.34px]"
        />
        )} 
      </span>
    );
  });
  return <div className="flex gap-1 justify-center md:mt-1">{ratingStar}</div>;
};

export default Rating;

