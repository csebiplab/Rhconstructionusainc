import right from "@/components/__home_components/Images/right.png";
import worker from "@/components/__home_components/Images/worker.png";
import Image from "next/image";
const Right = () => {
    return (
     <div className="py-9 md:py-10 lg:py-12 5xl:py-[120px] container">
         <div className="grid grid-cols-1 md:grid-cols-7 gap-2 lg:gap-3 xl:gap-8 5xl:gap-[78px]">
      <div className="md:col-span-4 order-2 md:order-1">
        <div className="flex justify-center md:block">
        <Image
          src={right}
          width={199}
          height={18.02}
          alt="right"
          className="md:mt-3 md:mb-2 mb-1 mt-[24px]"
        />
        </div>
        <h2 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start">
        CHOOSING THE RIGHT GENERAL CONTRACTOR IN BROOKLYN
        </h2>
        <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start">
        Choosing the right general contractor from all construction companies in Brooklyn is a crucial step in ensuring the success of your construction project. RH Construction USA Inc., a prominent player in the industry, stands out as a reliable choice for discerning clients. With a proven track record of delivering high-quality construction services in Brooklyn, we bring a wealth of experience and expertise to the table. Our commitment to excellence is evident in our attention to detail, timely project completion, and customer satisfaction. When searching for a general contractor in Brooklyn, our company emerges as a reliable partner dedicated to turning your construction dreams into reality.
        </p>
        
      </div>
      <div className="md:col-span-3 order-1 md:order-2">
        <Image src={worker} width={608} height={550} alt="worker" />
      </div>
    </div>
     </div>
    );
};

export default Right;