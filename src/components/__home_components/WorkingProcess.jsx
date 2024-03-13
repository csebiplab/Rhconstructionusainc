import Image from "next/image";
import React from "react";
import working from "@/components/__home_components/Images/Working.png";
import mask1 from "@/components/__home_components/Images/Mask1.png";
import mask2 from "@/components/__home_components/Images/Mask2.png";
import mask3 from "@/components/__home_components/Images/Mask3.png";
import mask4 from "@/components/__home_components/Images/Mask4.png";
const WorkingProcess = () => {
  return (
    <div className="md:py-16 py-8 px-8">
      <div>
        <Image
          src={working}
          width={146}
          height={18.02}
          alt="about"
          className="my-2"
        />
        <h2 className="leading-10 mb-1 py-4">
          WORKING PROCESS OF OUR CONSTRUCTION COMPANY IN BROOKLYN
        </h2>
        <p className="font-semibold">
          Certainly! Here's an overview of the working process of our
          construction company in Brooklyn:
        </p>
      </div>

      {/* =============== Image card ============== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center py-10">
        <div className="w-full shadow-md p-0 rounded-sm">
          <Image
            src={mask1}
            width={400}
            height={240}
            alt=""
            className="w-full"
          />
          <div className="text-center py-3">
            <h4 className="text-base py-2">Highly trained Staff</h4>
            <p className="text-sm text-secondary">
              We hire only highly trained staff <br /> for best results.
            </p>
          </div>
        </div>
        <div className="w-full shadow-md p-0 rounded-sm">
          <Image
            src={mask2}
            width={221}
            height={148}
            alt=""
            className="w-full"
          />
          <div className="text-center py-3">
            <h4 className="text-base py-2">Competitive Pricing</h4>
            <p className="text-sm text-secondary">
              We quote the best price possible <br /> in the industry..
            </p>
          </div>
        </div>
        <div className="w-full shadow-md p-0 rounded-sm">
          <Image
            src={mask3}
            width={221}
            height={148}
            alt=""
            className="w-full"
          />
          <div className="text-center py-3">
            <h4 className="text-base py-2">Satisfaction Guaranteed</h4>
            <p className="text-sm text-secondary">
              100% Customer satisfaction is <br /> our sole motto.
            </p>
          </div>
        </div>
        <div className="w-full shadow-md p-0 rounded-sm">
          <Image
            src={mask4}
            width={221}
            height={148}
            alt=""
            className="w-full"
          />
          <div className="text-center py-3">
            <h4 className="text-base py-2">Satisfaction Guaranteed</h4>
            <p className="text-sm text-secondary">
              100% Customer satisfaction is <br /> our sole motto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
