import about from "@/components/__home_components/Images/about.png";
import company from "@/components/__home_components/Images/company.png";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <div className="section-bg py-[34px] 5xl:py-[57px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 lg:gap-3 xl:gap-8 5xl:gap-[78px]">
          <div className="md:col-span-4 order-2 md:order-1">
            <div className="flex justify-center md:block">
              <Image
                src={about}
                width={101}
                height={18.02}
                alt="about"
                className="my-2"
              />
            </div>
            <h1 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start">
              ABOUT OUR GENERAL CONTRACTOR COMPANY
            </h1>
            <p className="md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start">
              Since 2009, RH Construction USA Inc. has been dedicated to
              delivering excellence in construction services, boasting over 15
              years of expertise in home renovations, bathroom and kitchen
              remodeling, roofing repair, and various construction projects. As
              a locally owned and operated company based in Brooklyn, our
              commitment to quality craftsmanship, innovation, and client
              satisfaction sets us apart. With a skilled team prioritizing
              efficiency and precision, we transform visions into realities,
              ensuring every detail is perfected. Whether it's residential,
              commercial, or industrial construction, RH Construction USA Inc.
              is poised to exceed expectations with our quick, reliable, and
              professional touch, leaving our clients as our next happy
              customers.
            </p>

            <div className="w-full flex justify-center md:block">
              <div className="flex items-center text-center mt-5 mb-[33px] gap-3 sm:gap-6 lg:gap-8">
                <div>
                  <Button className="rounded-md bg-primary hover:bg-gray-900 text-black hover:text-white md:text-sm lg:text-lg font-semibold tracking-wider capitalize flex items-center gap-2">
                    <span>Request A Quote</span>
                    <span>
                      <FaChevronRight />
                    </span>
                  </Button>
                </div>
                <h3 className="lg:text-2xl md:text-sm">Or</h3>
                <div className="flex items-center gap-3">
                  <BsTelephoneForwardFill />
                  <span className="text-base lg:text-xl font-semibold text-black">
                    +1 (646) 683-4612
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2">
            <Image
              src={company}
              width={608}
              height={550}
              alt="company"
              className="w-full h-full md:w-[608px] md:h-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
