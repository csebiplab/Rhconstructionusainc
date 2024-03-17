import elevate from "@/components/__home_components/Images/elevate.png";
import project from "@/components/__home_components/Images/project.png";
import Image from "next/image";
const ProjectElevate = () => {
    return (
        <div className="section-bg">
          <div className="custom-container">
      <div className="lg:flex section-bg items-center">
        <div className="lg:w-[807px]">
          <Image
            src={elevate}
            width={807}
            height={783}
            layout="responsive"
            alt="elevate"
          />
        </div>
        <div className="lg:w-[1060px]">
          <div className="flex">
            <div className="items-center md:-ml-[80px] rounded-[15px] bg-white p-5 my-class lg:mr-[80px]">
              <Image
                src={project}
                width={144}
                height={18.02}
                alt="trust"
                className="my-2"
              />
              <h2 className="lg:leading-[55px] mb-1 py-2 lg:text-4xl text-lg">
              ELEVATE YOUR CONSTRUCTION PROJECTS WITH RH CONSTRUCTION USA INC
              </h2>
              <p className="max-w-lg xl:max-w-5xl lg:text-lg mx-auto text-black my-2">
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