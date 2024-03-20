import inspector from "@/components/__home_components/Images/inspectors.png";
import trust from "@/components/__home_components/Images/trust.png";
import Image from "next/image";
const TrustUs = () => {
  return (
    <div className="custom-container">
      <div className="md:flex items-center">
        <div className="md:w-[55%]">
          <Image
            src={inspector}
            width={1012}
            height={772}
            layout="responsive"
            alt="inspector"
            className="w-full flex-shrink-0"
          />
        </div>
        <div className="md:w-[45%]">
          <div className="flex w-full lg:my-2">
            <div className="w-full md:-ml-[80px] rounded-[15px] bg-white lg:p-4 md:p-2 my-class">
              <Image
                src={trust}
                width={96}
                height={18.02}
                alt="trust"
                className="my-2"
              />
              <h2 className="lg:leading-10 mb-1 py-2 text-base md:text-lg lg:text-3xl">
                TRUSTED GENERAL CONTRACTOR IN BROOKLYN
              </h2>
              <p className="max-w-lg xl:max-w-5xl lg:text-lg md:text-sm  text-black my-3">
                Since 2009, RH Construction USA Inc. has been dedicated to
                delivering excellence in construction services, boasting over 15
                years of expertise in home renovations, bathroom and kitchen
                remodeling, roofing repair, and various construction projects.
                As a locally owned and operated company based in Brooklyn, our
                commitment to quality craftsmanship, innovation, and client
                satisfaction sets us apart. With a skilled team prioritizing
                efficiency and precision, we transform visions into realities,
                ensuring every detail is perfected. Whether it's residential,
                commercial, or industrial construction, RH Construction USA Inc.
                is poised to exceed expectations with our quick, reliable, and
                professional touch, leaving our clients as our next happy
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
