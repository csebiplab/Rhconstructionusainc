import about from "@/components/__home_components/Images/about.png";
import company from "@/components/__home_components/Images/company.png";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
const AboutUs = () => {
  return (
   <div className="section-bg">
     <div className="custom-container ">
      <div className="md:flex lg:px-[61px] justify-between py-6 md:py-16 gap-10">
      <div className="">
        <Image
          src={about}
          width={101}
          height={18.02}
          alt="about"
          className="my-2"
        />
        <h2 className="leading-10 mb-1 lg:text-4xl text-lg md:py-2 lg:py-4">
          ABOUT OUR GENERAL CONTRACTOR COMPANY
        </h2>
        <p className="max-w-lg xl:max-w-5xl lg:text-xl md:text-sm mx-auto text-black lg:mt-4 md:mt-1">
          Since 2009, RH Construction USA Inc. has been dedicated to delivering
          excellence in construction services, boasting over 15 years of
          expertise in home renovations, bathroom and kitchen remodeling,
          roofing repair, and various construction projects. As a locally owned
          and operated company based in Brooklyn, our commitment to quality
          craftsmanship, innovation, and client satisfaction sets us apart. With
          a skilled team prioritizing efficiency and precision, we transform
          visions into realities, ensuring every detail is perfected. Whether
          it's residential, commercial, or industrial construction, RH
          Construction USA Inc. is poised to exceed expectations with our quick,
          reliable, and professional touch, leaving our clients as our next
          happy customers.
        </p>
        <div className="flex md:py-3 lg:py-8 items-center flex-wrap md:mt-1 lg:mt-4 gap-8">
          <div>
            <Button className="rounded-md bg-primary hover:bg-gray-900 text-black hover:text-white md:text-sm lg:text-lg font-semibold tracking-wider capitalize flex items-center gap-2">
               <span>Request A Quote</span><span><FaChevronRight /></span>
            </Button>
          </div>
          <h3>Or</h3>
          <div className="flex items-center gap-3">
            <BsTelephoneForwardFill />
            <span className="lg:text-xl  font-semibold text-black">
              +1 (646) 683-4612
            </span>
          </div>

          {/* {constant.hotline} */}
        </div>
      </div>
      <div>
        <Image src={company} width={608} height={550} alt="company" />
      </div>
    </div>
    </div>
   </div>
  );
};

export default AboutUs;
