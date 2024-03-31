import google from "@/components/__home_components/Images/google.png";
import review from "@/components/__home_components/Images/review.png";
import reviewLogo from "@/components/__home_components/Images/reviewLogo.png";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const Review = () => {
  return (
    <div className="section-bg">
      <div className="container">
        <div className="md:py-6 lg:py-[55px]">
          <div className="text-center">
            <Image
              src={reviewLogo}
              width={95}
              height={18.02}
              alt="reviewLogo"
              className="my-2 mx-auto"
            />
            <h2 className="lg:leading-10 lg:text-4xl text-lg md:py-2 lg:py-4">
              WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
            </h2>
          </div>
          {/* =================== Card Section =============== */}
          <div>
            <div className="grid grid-cols-1 lg:px-6 md:px-3 md:grid-cols-4 lg:gap-3 md:gap-2 text-center lg:py-10 md:py-5">
              <div className="w-full card-sd rounded-md bg-white">
                <Image
                  src={google}
                  width={89.92}
                  height={51}
                  alt="google"
                  className="my-2 ml-3"
                />
                <Image
                  src={review}
                  width={120.63}
                  height={17.28}
                  alt="google"
                  className="my-2 ml-3"
                />
                <div className="text-start md:p-2 lg:p-3">
                  <p className="lg:text-sm md:text-xs text-black lg:leading-6">
                    They Are Professional and do great job cleaning the house!!!
                    I Locked myself out of my house the other day and they were
                    the only ones with a key. They were kind enough to drive
                    over to unlock their door. That speaks volumes!!! They
                    really care about their clients.
                  </p>
                  <h6 className="font-semibold lg:text-sm md:text-xs py-1">
                    Lisa Silva
                  </h6>
                  <p className="text-secondary lg:text-sm md:text-xs">
                    North York
                  </p>
                </div>
              </div>
              <div className="w-full card-sd rounded-md bg-white">
                <Image
                  src={google}
                  width={89.92}
                  height={51}
                  alt="google"
                  className="my-2 ml-3"
                />
                <Image
                  src={review}
                  width={120.63}
                  height={17.28}
                  alt="google"
                  className="my-2 ml-3"
                />
                <div className="text-start md:p-2 lg:p-3">
                  <p className="lg:text-sm md:text-xs text-black lg:leading-6">
                    They Are Professional and do great job cleaning the house!!!
                    I Locked myself out of my house the other day and they were
                    the only ones with a key. They were kind enough to drive
                    over to unlock their door. That speaks volumes!!! They
                    really care about their clients.
                  </p>
                  <h6 className="font-semibold py-1 lg:text-sm md:text-xs">
                    Lisa Silva
                  </h6>
                  <p className="text-secondary lg:text-sm md:text-xs">
                    North York
                  </p>
                </div>
              </div>
              <div className="w-full card-sd rounded-md bg-white">
                <Image
                  src={google}
                  width={89.92}
                  height={51}
                  alt="google"
                  className="my-2 ml-3"
                />
                <Image
                  src={review}
                  width={120.63}
                  height={17.28}
                  alt="google"
                  className="my-2 ml-3"
                />
                <div className="text-start md:p-2 lg:p-3">
                  <p className="lg:text-sm md:text-xs text-black lg:leading-6">
                    They Are Professional and do great job cleaning the house!!!
                    I Locked myself out of my house the other day and they were
                    the only ones with a key. They were kind enough to drive
                    over to unlock their door. That speaks volumes!!! They
                    really care about their clients.
                  </p>
                  <h6 className="font-semibold py-1 lg:text-sm md:text-xs">
                    Lisa Silva
                  </h6>
                  <p className="text-secondary lg:text-sm md:text-xs">
                    North York
                  </p>
                </div>
              </div>
              <div className="w-full card-sd rounded-md bg-white">
                <Image
                  src={google}
                  width={89.92}
                  height={51}
                  alt="google"
                  className="my-2 ml-3"
                />
                <Image
                  src={review}
                  width={120.63}
                  height={17.28}
                  alt="google"
                  className="my-2 ml-3"
                />
                <div className="text-start md:p-2 lg:p-3">
                  <p className="lg:text-sm md:text-xs text-black lg:leading-6">
                    They Are Professional and do great job cleaning the house!!!
                    I Locked myself out of my house the other day and they were
                    the only ones with a key. They were kind enough to drive
                    over to unlock their door. That speaks volumes!!! They
                    really care about their clients.
                  </p>
                  <h6 className="font-semibold py-1 lg:text-sm md:text-xs">
                    Lisa Silva
                  </h6>
                  <p className="text-secondary lg:text-sm md:text-xs">
                    North York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======================== Button ================= */}
          <div className="flex lg:gap-8 md:gap-3 items-center justify-center lg:py-6 md:py-3">
            {/* ========= first line ======== */}
            <div className="lg:w-[330px] md:w-[220px] h-0.5 bg-black hidden md:block"></div>
            <div className="flex lg:gap-5 md:gap-3">
              <button className="p-3 rounded-full border-2 hover:text-white hover:bg-black">
                <FaChevronLeft />
              </button>
              <button className="text-white hover:text-black hover:bg-white border-2 p-3 bg-black rounded-full">
                <FaChevronRight />
              </button>
            </div>
            {/* =============== second line ============= */}
            <div className="lg:w-[330px] md:w-[220px] h-0.5 bg-black hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
