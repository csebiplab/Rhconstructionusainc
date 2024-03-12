import React from "react";
import company from "@/components/__home_components/Images/company.png";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import about from "@/components/__home_components/Images/about.png";
const AboutUs = () => {
  return (
    <div className="flex px-8 justify-between py-16 gap-10">
      <div>
        <Image
          src={about}
          width={101}
          height={18.02}
          alt="about"
          className="my-2"
        />
        <h2 className="leading-10 mb-1 py-4">
          ABOUT OUR GENERAL CONTRACTOR COMPANY
        </h2>
        <p className="max-w-lg xl:max-w-5xl mx-auto text-secondary mt-4">
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
        <div className="flex py-8 items-center flex-wrap mt-4 gap-8">
          <div>
            <Button className="rounded-md bg-primary hover:bg-gray-900 text-black hover:text-white text-lg font-semibold tracking-wider capitalize">
              Request A Quote
            </Button>
          </div>
          <h3>Or</h3>
          <div className="flex items-center gap-3">
            <BsTelephoneForwardFill />
            <span className="text-lg font-semibold text-black">
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
  );
};

export default AboutUs;
