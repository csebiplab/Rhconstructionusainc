import inspector from "@/components/__home_components/Images/inspectors.png";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";
import SmallHeadingWithIcon from "../ui/SmallHeadingWithIcon";
const TrustUs = () => {
  return (
    <div className="custom-container">
      <div className="md:flex items-center md:py-6 lg:py-[55px]">
        <div className="md:w-[55%]">
          <Image
            src={inspector}
            width={1012}
            height={772}
            // layout="responsive"
            alt="inspector"
            className="w-full flex-shrink-0"
          />
        </div>
        <div className="md:w-[45%] w-full">
          <div className="flex w-full md:py-0 lg:my-2">
            <div className="w-full md:-ml-[80px] -ml-0 rounded-[15px] bg-white lg:p-4 md:p-2 my-class md:text-start text-center">
              <div className="flex justify-center md:block xs:pt-[18px] md:pt-0">
                <SmallHeadingWithIcon
                  smallHeadingText={smHeadingTexts.trustUs}
                />
              </div>
              <h2 className="lg:leading-10 py-2 text-[18px] leading-normal md:text-lg lg:text-3xl">
                TRUSTED GENERAL CONTRACTOR IN BROOKLYN
              </h2>
              <p className="md:text-base text-[12px] leading-[170%] lg:leading-[175%] text-center md:text-start  text-black my-2 md:pb-0 pb-3 px-2 md:px-0">
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
