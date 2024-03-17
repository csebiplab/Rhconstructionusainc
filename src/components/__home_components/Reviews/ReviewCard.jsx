import google from "@/components/__home_components/Images/google.png";
import reviewLogo from "@/components/__home_components/Images/reviewLogo.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function ReviewCard() {
  return (
   <div>
    <div>
    <div className="text-center">
            <Image
            src={reviewLogo}
            width={115}
            height={18.02}
            alt="cons"
            className="my-2 mx-auto"
          />
          <h2 className="leading-10 mb-1 py-4">
          Here’s what to expect when you hire us
          </h2>
            </div>
    </div>
   {/* =================== Review Card ============== */}
   <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-20 text-center py-10">
   <div className="max-w-sm primaryBgColor shadow-2xl px-6 py-8 rounded-md">
    <Image
            src={google}
            width={89.92}
            height={51}
            alt="google"
            className="my-2 mx-auto"
          />
          <Image
            src={google}
            width={120.63}
            height={17.28}
            alt="google"
            className="my-2 mx-auto"
          />
      <div className="flex gap-x-1">
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
        <FaStar className="w-4 h-4 text-yellow-400" />
      </div>
      <p className="font-normal mt-4">
       
They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. They were kind enough to drive over to unlock their door. That speaks volumes!!! They really care about their clients. 
      </p>
    </div>
   </div>
   </div>
  );
}