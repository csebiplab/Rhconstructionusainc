"use client";

import {
  getYears,
  projectPeriods,
  projectType,
  serviceWithCompanyName,
  servicesDropDown,
} from "@/constants/projectDetails.dropdownValue";
import "./ProjectDetailsForm.css";
import { HRSvg } from "./HRSvg";
import { useState } from "react";

const ProjectDetailsForm = () => {
  const [year, setYear] = useState("");
  const years = getYears();

  return (
    <div className="parent__projectDetails px-16 py-8">
      <div>
        <form>
          <div className="mb-9">
            <h5 className="service__info mb-4">Service Information</h5>
            <HRSvg />
            <div className="mt-6 flex gap-10">
              <div className="w-full">
                <label className="input__label mb-[10px] block w-full">
                  Service
                </label>
                <select className="dropdown__input block px-7 py-5 w-full">
                  <option value="" defaultValue="">
                    Select Service Name
                  </option>
                  {servicesDropDown.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="input__label mb-[10px] block">
                  Company Name With Service
                </label>
                <select className="dropdown__input block px-7 py-5 w-full">
                  <option value="" defaultValue="">
                    Select Company Name With Service
                  </option>
                  {serviceWithCompanyName.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="input__label mb-[10px] block">
                  Project Type
                </label>
                <select className="dropdown__input block px-7 py-5 w-full">
                  <option value="" defaultValue="">
                    Select Project Type
                  </option>
                  {projectType.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mb-9">
            <h5 className="service__info mb-4">Project Information</h5>
            <HRSvg />
            <div className="mt-6 flex gap-10">
              <div className="w-full">
                <label className="input__label mb-[10px] block w-full">
                  Project Name
                </label>
                <input
                  type="text"
                  className="dropdown__input block px-7 py-[18px] w-full"
                  placeholder="Enter Project Name"
                />
              </div>
              <div className="w-full">
                <label className="input__label mb-[10px] block w-full">
                  Picture
                </label>
                <label className="dropdown__input w-full flex justify-between items-center px-7 py-3">
                  <span className="text-lg">Select a file</span>
                  <span className="text-base choose__file px-8 py-2">
                    Upload Picture
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="mt-3">
              <p>Uploaded Project Image:</p>
              <img src="" alt="img" className="h-[300px] w-[300px]" />
            </div>
          </div>
          <div className="mb-9">
            <h5 className="service__info mb-4">Project Basic Info</h5>
            <HRSvg />
            <div>
              <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-10">
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    Clients Name
                  </label>
                  <input
                    type="text"
                    className="dropdown__input block px-7 py-[18px] w-full"
                    placeholder="Enter Clients Name"
                  />
                </div>
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    City
                  </label>
                  <input
                    type="text"
                    className="dropdown__input block px-7 py-[18px] w-full"
                    placeholder="Enter Client City"
                  />
                </div>
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    Budget
                  </label>
                  <input
                    type="text"
                    className="dropdown__input block px-7 py-[18px] w-full"
                    placeholder="Enter your Budget"
                  />
                </div>
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    Complete Year
                  </label>
                  <select
                    className="dropdown__input block px-7 py-[18px] w-full mt-2"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Complete Year
                    </option>
                    {years.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-9 mb-6">
                <HRSvg />
              </div>
              <div className="grid grid-cols-12 items-center gap-y-6 gap-x-10 w-full mb-12">
                <div className="w-full col-span-4">
                  <label className="input__label mb-[10px] block w-full">
                    Project Period
                  </label>
                  <select
                    className="dropdown__input block px-7 py-[18px] w-full mt-2"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Project Period
                    </option>
                    {projectPeriods.map(({ label, value }, i) => (
                      <option key={i} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full col-span-5">
                  <label className="input__label mb-[10px] block w-full">
                    Picture
                  </label>
                  <label className="dropdown__input w-full flex justify-between items-center px-7 py-2">
                    <span className="text-lg">Select a file</span>
                    <span className="text-base choose__file px-8 py-2">
                      Upload Picture
                    </span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <div className="w-full col-span-3 plus__upload">
                  <label className="mb-[10px] flex items-center mt-8  gap-2 w-full cursor-pointer">
                    <img
                      src="/assets/icons/addmore.png"
                      alt="add more"
                      className="w-10 h-10 rounded-full upload__img"
                    />
                    <span className="text-lg upload__text">Select a file</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="preview__container">
                <div className="flex gap-y-8 gap-x-[58px]">
                  <div className="flex items-center justify-center w-[270px] border-2 border-r-dark-50">
                    <div>
                      <p>Project Period</p>
                      <b className="text-start text-base">Before</b>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-5 py-10">
                    <img src="" alt="img" className="h-[112px] w-[160px]" />
                    <img src="" alt="img" className="h-[112px] w-[160px]" />
                    <img src="" alt="img" className="h-[112px] w-[160px]" />
                    <img src="" alt="img" className="h-[112px] w-[160px]" />
                    <img src="" alt="img" className="h-[112px] w-[160px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
