import right from "@/components/__home_components/Images/right.png";
import worker from "@/components/__home_components/Images/worker.png";
import Image from "next/image";
const Right = () => {
    return (
     <div className="custom-container">
         <div className="lg:flex lg:px-[61px] md:justify-between py-6 md:py-16 gap-10">
      <div className="">
        <Image
          src={right}
          width={199}
          height={18.02}
          alt="right"
          className="my-2"
        />
        <h2 className="leading-10 mb-1 py-4 lg:text-4xl text-lg">
        CHOOSING THE RIGHT GENERAL CONTRACTOR IN BROOKLYN
        </h2>
        <p className="max-w-lg xl:max-w-5xl mx-auto text-black mt-4">
        Choosing the right general contractor from all construction companies in Brooklyn is a crucial step in ensuring the success of your construction project. RH Construction USA Inc., a prominent player in the industry, stands out as a reliable choice for discerning clients. With a proven track record of delivering high-quality construction services in Brooklyn, we bring a wealth of experience and expertise to the table. Our commitment to excellence is evident in our attention to detail, timely project completion, and customer satisfaction. When searching for a general contractor in Brooklyn, our company emerges as a reliable partner dedicated to turning your construction dreams into reality.
        </p>
        
      </div>
      <div>
        <Image src={worker} width={608} height={550} alt="worker" />
      </div>
    </div>
     </div>
    );
};

export default Right;