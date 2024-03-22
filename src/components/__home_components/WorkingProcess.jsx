import mask1 from "@/components/__home_components/Images/Mask1.png";
import mask2 from "@/components/__home_components/Images/Mask2.png";
import mask3 from "@/components/__home_components/Images/Mask3.png";
import mask4 from "@/components/__home_components/Images/Mask4.png";
import working from "@/components/__home_components/Images/Working.png";
import Image from "next/image";
const WorkingProcess = () => {
  return (
    <div className="container">
    <div className="md:py-6 lg:py-[55px]">
      <div>
        <Image
          src={working}
          width={146}
          height={18.02}
          alt="about"
          className="my-2"
        />
        <h2 className="lg:leading-10 lg:text-4xl text-lg md:py-2 lg:py-4">
          WORKING PROCESS OF OUR CONSTRUCTION COMPANY IN BROOKLYN
        </h2>
        <p className="font-semibold lg:text-base md:text-sm">
          Certainly! Here's an overview of the working process of our
          construction company in Brooklyn:
        </p>
      </div>

      {/* =============== Image card ============== */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2 lg:gap-3 text-center lg:py-10 md:py-4">
        <div className="w-full card-sd section-bg rounded-md">
          <Image
            src={mask1}
            width={221}
            height={148}
            alt=""
            className="w-full"
          />
          <div className="text-center md:py-2 lg:py-3">
            <h4 className="lg:text-base md:text-sm py-2">Project Planning and Design</h4>
            <p className="lg:text-sm md:text-xs">
              We begin by meeting with clients to understand their needs, goals,
              and budget constraints.
            </p>
          </div>
        </div>
        <div className="w-full card-sd section-bg rounded-md">
          <Image
            src={mask2}
            width={221}
            height={148}
            alt=""
            className="w-full rounded-md"
          />
          <div className="text-center md:py-2 lg:py-3">
            <h4 className="lg:text-base md:text-sm py-2">
              Procurement of Materials & Resources
            </h4>
            <p className="lg:text-sm md:text-xs text-black">
              We source high-quality materials and engage skilled laborers and
              subcontractors necessary for the project.
            </p>
          </div>
        </div>
        <div className="w-full card-sd section-bg rounded-md">
          <Image
            src={mask3}
            width={221}
            height={148}
            alt=""
            className="w-full rounded-md"
          />
          <div className="text-center md:py-2 lg:py-3">
            <h4 className="lg:text-base md:text-sm py-2">Quality Control and Assurance</h4>
            <p className="lg:text-sm md:text-xs text-black">
              Throughout the construction phase, we conduct regular inspections
              and quality control checks to ensure.
            </p>
          </div>
        </div>
        <div className="w-full card-sd section-bg rounded-md">
          <Image
            src={mask4}
            width={221}
            height={148}
            alt=""
            className="w-full rounded-md"
          />
          <div className="text-center md:py-2 lg:py-3">
            <h4 className="lg:text-base md:text-sm py-2">Client Communication and Updates</h4>
            <p className="lg:text-sm md:text-xs text-black">
              We maintain open lines of communication with clients, providing
              regular updates on the progress of their projects.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WorkingProcess;
