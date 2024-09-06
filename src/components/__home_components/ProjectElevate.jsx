import elevate from "@/components/__home_components/Images/elevate.png";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";
import SmallHeadingWithIcon from "../ui/SmallHeadingWithIcon";
const ProjectElevate = () => {
  return (
    <div className="section-bg">
      <div className="custom-container">
        <div className="md:flex items-center">
          <div className="md:w-[55%]">
            <Image
              src={elevate}
              width={807}
              height={710}
              // layout="responsive"
              alt="elevate"
              className="w-full flex-shrink-0"
            />
          </div>
          <div className="md:w-[45%] w-full">
            <div className="flex w-full lg:my-2">
              <div className="w-full md:-ml-[80px] -ml-0 rounded-[15px] bg-white lg:p-4 md:p-2 my-class">
                <div className="flex justify-center md:block xs:pt-[18px] md:pt-0">
                  <SmallHeadingWithIcon
                    smallHeadingText={smHeadingTexts.projectWithUs}
                  />
                </div>
                <h2 className="lg:leading-10 py-2 text-[18px] leading-normal md:text-lg lg:text-3xl md:text-start text-center">
                  ELEVATE YOUR CONSTRUCTION PROJECTS WITH RH CONSTRUCTION USA
                  INC
                </h2>
                <p className="text-[12px] md:text-base leading-[208%] lg:leading-[250%] text-black my-2 md:pb-0 pb-3 md:text-start text-center px-2 md:px-0">
                  Elevate your construction projects to new heights with RH
                  Construction USA Inc., one of the best construction companies
                  in Brooklyn. Renowned for its unwavering commitment to
                  excellence, our company brings a wealth of experience and
                  expertise to every project undertaken. From residential
                  developments to commercial ventures, the company's dedication
                  to quality craftsmanship and innovative solutions ensures that
                  each endeavor is executed with precision and professionalism.
                  With a team of skilled professionals and a reputation for
                  delivering projects on time and within budget, our
                  construction company stands as a reliable partner for those
                  seeking to elevate the standard of their construction
                  endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectElevate;
