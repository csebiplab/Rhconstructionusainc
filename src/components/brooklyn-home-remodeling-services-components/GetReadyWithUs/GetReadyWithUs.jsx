
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const GetReadyWithUs = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.getReadyWithUs__HeadingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
            Ready To Start Your 
             <br className="hidden 2xl:block"/>{" "}
              <span className="text-primary-50">
              Home Remodeling in Brooklyn?  </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center pt-[10px]">
            It's an exciting journey where the familiar transforms into the extraordinary, and every room becomes a canvas awaiting your personal touch. Ready to start your home remodeling in Brooklyn with our experienced home renovator? Picture the possibilities as walls are repainted, floors come to life with new textures, and spaces are redefined to suit your evolving lifestyle. Whether it's a small update or a complete overhaul, this endeavor is a testament to your commitment to making your home a true reflection of your tastes and aspirations. So, gather your ideas, engage your creativity, and let the transformation begin - turning your house into a haven that not only shelters but also speaks volumes about who you are. Get ready to witness the magic unfold as your vision merges seamlessly with the bricks and mortar of your cherished abode.

            </p>
          </div>
          <div className="order-1 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/brooklyn_Home/Get Ready with us.png"
                width={810}
                height={621}
                alt="Get Ready With Us image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReadyWithUs;