import elevate from "@/components/__home_components/Images/elevate.png";
import project from "@/components/__home_components/Images/project.png";
import Image from "next/image";
const ProjectElevate = () => {
    return (
        <div>
      <div className="md:flex items-center px-8">
        <div>
          <Image
            src={elevate}
            width={1016}
            height={772}
            layout="responsive"
            alt="elevate"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <div className="items-center md:-ml-[80px] rounded-[15px] bg-white p-4 my-class">
              <Image
                src={project}
                width={144}
                height={18.02}
                alt="trust"
                className="my-2"
              />
              <h2 className="leading-10 mb-1 py-2">
              ELEVATE YOUR CONSTRUCTION PROJECTS WITH RH <br/>CONSTRUCTION USA INC
              </h2>
              <p className="max-w-lg xl:max-w-5xl mx-auto text-black mt-3 mb-2">
              Elevate your construction projects to new heights with RH Construction USA Inc., one of the best construction companies in Brooklyn. Renowned for its unwavering commitment to excellence, our company brings a wealth of experience and expertise to every project undertaken. From residential developments to commercial ventures, the company's dedication to quality craftsmanship and innovative solutions ensures that each endeavor is executed with precision and professionalism. With a team of skilled professionals and a reputation for delivering projects on time and within budget, our construction company stands as a reliable partner for those seeking to elevate the standard of their construction endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProjectElevate;