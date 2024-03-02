import Image from "next/image";
import React from "react";
import CostDealingImg from "../../../public/assets/images/cost.jpg";

const listData = [
  {
    id: 1,
    name: "Scope of Work",
  },
  {
    id: 2,
    name: "Materials",
  },
  {
    id: 3,
    name: "Labor Costs",
  },
  {
    id: 4,
    name: "Equipment and Machinery",
  },
  {
    id: 5,
    name: "Permits and Regulations",
  },
  {
    id: 6,
    name: "Site Preparation",
  },
  {
    id: 7,
    name: "Contingency",
  },
  {
    id: 8,
    name: "Overhead and Profit",
  },
  {
    id: 9,
    name: "Market Conditions",
  },
  {
    id: 10,
    name: "Project Management",
  },
];

const CostOfConstructions = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
        <div className="w-full md:col-span-5 md:order-2">
          <div className="w-full">
            <h1 className="font-bold">
              How Much Does a Construction Project Cost?
            </h1>
          </div>
          <p className="mt-4 mb-3">
            The cost of a construction project can vary widely depending on
            various factors such as the size, complexity, location, materials
            used, labor costs, and any additional requirements or unforeseen
            circumstances. Here are some key points to consider when estimating
            the cost of a construction project:
          </p>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside marker:text-primary marker:font-extrabold marker:text-2xl">
            {listData.map(({ name, id }) => (
              <li key={id} className="font-medium">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            It's important to conduct thorough research and obtain multiple
            quotes from contractors to get an accurate estimate of the cost for
            a specific construction project. Additionally, it's advisable to
            build in some flexibility in the budget to accommodate any
            unforeseen circumstances that may arise during the construction
            process.
          </p>
        </div>
        <div className="w-full md:col-span-4 md:order-1">
          <Image
            src={CostDealingImg}
            alt="Maricela"
            width={450}
            height={300}
            loading="lazy"
            className="w-full h-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default CostOfConstructions;
