import elevate from "@/components/__home_components/Images/elevate.png";
import project from "@/components/__home_components/Images/project.png";
import Image from "next/image";
const ProjectElevate = () => {
    return (
        <div className="section-bg">
          <div className="custom-container">
      <div className="md:flex section-bg items-center lg:px-0 md:px-4">
        <div className="md:w-[55%]">
          <Image
            src={elevate}
            width={807}
            height={710}
            layout="responsive"
            alt="elevate"
            className="w-full flex-shrink-0"
          />
        </div>
        <div className="md:w-[45%]">
          <div className="flex w-full lg:my-2">
            <div className="w-full md:-ml-[80px] rounded-[15px] bg-white lg:p-4 md:p-2 my-class">
              <Image
                src={project}
                width={144}
                height={18.02}
                alt="trust"
                className="my-3"
              />
              <h2 className="lg:leading-10 mb-1 py-2 text-base md:text-lg lg:text-3xl">
              ELEVATE YOUR CONSTRUCTION PROJECTS WITH RH CONSTRUCTION USA INC
              </h2>
              <p className="max-w-lg xl:max-w-5xl lg:text-lg md:text-sm  text-black my-3 lg:pb-3">
              Elevate your construction projects to new heights with RH Construction USA Inc., one of the best construction companies in Brooklyn. Renowned for its unwavering commitment to excellence, our company brings a wealth of experience and expertise to every project undertaken. From residential developments to commercial ventures, the company's dedication to quality craftsmanship and innovative solutions ensures that each endeavor is executed with precision and professionalism. With a team of skilled professionals and a reputation for delivering projects on time and within budget, our construction company stands as a reliable partner for those seeking to elevate the standard of their construction endeavors.
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