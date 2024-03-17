import google from "@/components/__home_components/Images/google.png";
import review from "@/components/__home_components/Images/review.png";
import reviewLogo from "@/components/__home_components/Images/reviewLogo.png";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const Review = () => {
    return (
       <div className="section-bg">
        <div className="custom-container">
         <div className="md:py-16 py-6 lg:px-[61px]">
            <div className="text-center">
            <Image
            src={reviewLogo}
            width={95}
            height={18.02}
            alt="reviewLogo"
            className="my-2 mx-auto"
          />
          <h2 className="leading-10 mb-1 py-4 lg:text-4xl text-lg">
          WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
          </h2>
            </div>
            {/* =================== Card Section =============== */}
            <div>
            <div className="grid grid-cols-1 px-6 md:grid-cols-4 gap-3 text-center md:py-10 py-6">
              
              <div className="w-full card-sd rounded-sm bg-white">
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
                <div className="text-start p-3">
                  <p className="text-sm text-black leading-6">
                  They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients. 
                  </p>
                  <h6 className="font-semibold py-1">Lisa Silva</h6>
      <p className="text-secondary text-sm">North York</p>
                </div>
              </div>
              <div className="w-full card-sd rounded-sm bg-white">
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
                <div className="text-start p-3">
                  <p className="text-sm text-black leading-6">
                  They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients. 
                  </p>
                  <h6 className="font-semibold py-1">Lisa Silva</h6>
      <p className="text-secondary text-sm">North York</p>
                </div>
              </div>
              <div className="w-full card-sd rounded-sm bg-white">
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
                <div className="text-start p-3">
                  <p className="text-sm text-black leading-6">
                  They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients. 
                  </p>
                  <h6 className="font-semibold py-1">Lisa Silva</h6>
      <p className="text-secondary text-sm">North York</p>
                </div>
              </div>
              <div className="w-full card-sd rounded-sm bg-white">
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
                <div className="text-start p-3">
                  <p className="text-sm text-black leading-6">
                  They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients. 
                  </p>
                  <h6 className="font-semibold py-1">Lisa Silva</h6>
      <p className="text-secondary text-sm">North York</p>
                </div>
              </div>
             
            </div>
            </div>
           

            {/* ======================== Button ================= */}
            <div className="flex gap-8 items-center justify-center py-5">
                {/* ========= first line ======== */}
                <div className="w-[330px] h-0.5 bg-black hidden md:block">

                </div>
                <div className="flex gap-5">

                    <button className="p-3 rounded-full border-2 hover:text-white hover:bg-black"><FaChevronLeft /></button>
                    <button className="text-white hover:text-black hover:bg-white border-2 p-3 bg-black rounded-full"><FaChevronRight /></button>

                </div>
                {/* =============== second line ============= */}
                <div className="w-[330px] h-0.5 bg-black hidden md:block">

                </div>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Review;