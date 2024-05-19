import {
  projectType,
  serviceWithCompanyName,
  servicesDropDown,
} from "@/constants/projectDetails.dropdownValue";
import "./ProjectDetailsForm.css";
import { HRSvg } from "./HRSvg";

const ProjectDetailsForm = () => {
  return (
    <div className="parent__projectDetails px-16 py-8">
      <div>
        <form>
          <div className="">
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
        </form>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
