import right from "@/components/__home_components/Images/right.png";
import worker from "@/components/__home_components/Images/worker.png";
import Image from "next/image";
const Right = () => {
    return (
     <div className="container">
         <div className="md:flex md:py-6 lg:py-[55px] lg:gap-10 md:gap-3">
      <div className="">
        <Image
          src={right}
          width={199}
          height={18.02}
          alt="right"
          className="my-2"
        />
        <h2 className="lg:leading-10 lg:text-4xl text-lg md:py-2 lg:py-4">
        CHOOSING THE RIGHT GENERAL CONTRACTOR IN BROOKLYN
        </h2>
        <p className="max-w-lg xl:max-w-5xl lg:text-xl md:text-sm mx-auto text-black lg:mt-4 md:mt-1">
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