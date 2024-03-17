import mask1 from "@/components/__home_components/Images/Mask1.png";
import mask2 from "@/components/__home_components/Images/Mask2.png";
import mask3 from "@/components/__home_components/Images/Mask3.png";
import mask4 from "@/components/__home_components/Images/Mask4.png";
import working from "@/components/__home_components/Images/Working.png";
import Image from "next/image";
const WorkingProcess = () => {
  return (
    <div className="custom-container">
    <div className="md:py-16 py-8 lg:px-[61px]">
      <div>
        <Image
          src={working}
          width={146}
          height={18.02}
          alt="about"
          className="my-2"
        />
        <h2 className="leading-10 lg:text-4xl text-lg mb-1 py-4">
          WORKING PROCESS OF OUR CONSTRUCTION <br /> COMPANY IN BROOKLYN
        </h2>
        <p className="font-semibold">
          Certainly! Here's an overview of the working process of our
          construction company in Brooklyn:
        </p>
      </div>

      {/* =============== Image card ============== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center py-10">
        <div className="w-full card-sd section-bg rounded-md">
          <Image
            src={mask1}
            width={221}
            height={148}
            alt=""
            className="w-full"
          />
          <div className="text-center py-3">
            <h4 className="text-base py-2">Project Planning and Design</h4>
            <p className="text-sm text-">
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
          <div className="text-center py-3">
            <h4 className="text-base py-2">
              Procurement of Materials & Resources
            </h4>
            <p className="text-sm text-black">
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
          <div className="text-center py-3">
            <h4 className="text-base py-2">Quality Control and Assurance</h4>
            <p className="text-sm text-black">
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
          <div className="text-center py-3">
            <h4 className="text-base py-2">Client Communication and Updates</h4>
            <p className="text-sm text-black">
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
