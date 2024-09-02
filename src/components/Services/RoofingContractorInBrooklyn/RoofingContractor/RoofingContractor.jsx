
import Image from "next/image";
import Link from "next/link";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const RoofingContractor = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-4 flex items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/RoofingContractor1.png"
                width={940}
                height={580}
                alt="Roofing Contractors1 image"
                className="w-[940px] h-[400px] md:h-[580px] "
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.roofingContractor__headingIconText}/>
            </div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
            #1 Roofing Contractor 
            <br />
              <span className="text-primary">
              Brooklyn, NY 
              </span>
            </h2>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">As the #1 roofing contractor in Brooklyn, NY, RH Construction USA Inc. is dedicated to providing superior roofing services for residential and commercial properties. Our expert team is well-versed in all aspects of roofing, from installation and repairs to routine maintenance, ensuring that every project is completed with precision and care. We use only the highest quality materials and the latest industry techniques to deliver results that not only meet but exceed client expectations. Whether you need a simple repair, a full roof replacement, or an inspection, our skilled professionals are committed to delivering top-notch service with a focus on durability and longevity. At RH Construction USA Inc., customer satisfaction is our top priority. We understand that your roof is a critical component of your property's protection, and we take every step to ensure it withstands the test of time and weather.</p>
            <div className="flex justify-center md:justify-start pt-[15px]">
              <button
                type="submit"
                className="rounded-md bg-primary px-6 lg:px-10 py-2 text-lg font-medium flex justify-center items-center"
              >
                <span className="mr-2">
                <Link href="tel:(646) 683-4612" className="text-black">Get Your Free Estimated</Link>
                </span>
              </button>
            </div>
            <p className="text-black text-2xl font-bold leading-normal mt-4 text-center md:text-left">
            or Call Us: <span className="text-primary"><Link href="tel:(646) 683-4612">(646) 683-4612</Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofingContractor;