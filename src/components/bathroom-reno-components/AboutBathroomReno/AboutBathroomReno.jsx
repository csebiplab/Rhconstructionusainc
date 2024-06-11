// import HeadingIcon from "@/components/ui/HeadingIcon";
// import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./AboutBathroomReno.css";

const AboutBathroomReno = () => {
  return (
    <div>
      <div className="full__section_r_p common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              {/* <HeadingIcon
                text={headingIconText.installationCompany__IconTxt}
              /> */}
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-[35px] font-bold text-black md:text-start text-center">
              Stucco Installation Company <br />{" "}
              <span className="text-primary"> in Toronto</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
              Our stucco installation company offers expert craftsmanship and
              quality service tailored to your needs. With years of experience,
              we specialize in applying durable and aesthetically pleasing
              stucco finishes to homes and businesses across the Toronto area.
              Whether you're renovating, building new, or simply want to refresh
              your property's look, our team is committed to delivering
              exceptional results. From traditional to modern designs, we work
              closely with clients to bring their vision to life, ensuring
              satisfaction with every project. Our skilled professionals
              prioritize attention to detail, using premium materials and proven
              techniques to achieve lasting beauty and protection for your
              property.
            </p>
          </div>
          <div className="order-1 md:col-span-4 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/AboutBathroomReno.png"
                width={964}
                height={532}
                alt="InstallationCompany image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBathroomReno;