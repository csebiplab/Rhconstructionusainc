
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const Affordable = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.affordable__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Affordable   
             <br className="hidden md:block"/>
              <span className="text-primary-50">Roof Repair Brooklyn</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. is your trusted partner for affordable roof repair in Brooklyn, NY, offering top-quality solutions that won't break the bank. We understand that roof repairs can be a significant investment, which is why we are committed to providing exceptional service at competitive prices. Our team of experienced professionals brings expertise and attention to detail to every project, ensuring that your roof receives the care it needs without compromising on quality. We handle a wide range of roofing issues, from minor leaks and damaged shingles to more extensive repairs and maintenance. By using high-quality materials and the latest techniques, we ensure long-lasting results that protect your home and enhance its durability. Our transparent pricing and clear communication mean there are no hidden costs or surprises, and we work closely with you to find solutions that fit your budget.
            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/Affordable.png"
                width={810}
                height={490}
                alt="Affordable image"
                className="w-[810px] h-[490px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;