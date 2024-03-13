import Image from "next/image";
import React from "react";
import working from "@/components/__home_components/Images/Working.png";

const WorkingProcess = () => {
  return (
    <div>
      <div>
        <Image
          src={working}
          width={101}
          height={18.02}
          alt="about"
          className="my-2"
          layout="responsive"
        />
        <h2 className="leading-10 mb-1 py-4">
          WORKING PROCESS OF OUR CONSTRUCTION COMPANY IN BROOKLYN
        </h2>
        <p className="font-semibold">
          Certainly! Here's an overview of the working process of our
          construction company in Brooklyn:
        </p>
      </div>
    </div>
  );
};

export default WorkingProcess;
