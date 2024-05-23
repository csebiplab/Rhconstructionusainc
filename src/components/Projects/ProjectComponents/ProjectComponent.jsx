"use client";

import { useState } from "react";
import "./ProjectComponent.css";
import Link from "next/link";

const filterButtonValues = {
  ALL: "All",
  INTERIOR: "Interior",
  EXTERIOR: "Exterior",
};

const ProjectsComponent = ({ projects }) => {
  const [projectType, setProjectType] = useState(filterButtonValues.ALL);

  const filterButtonHandler = async (value) => {
    setProjectType(value);
  };

  const filteredProjects = projects?.filter((project) => {
    if (projectType === filterButtonValues.ALL) {
      return true;
    }
    return project?.projectType === projectType;
  });

  return (
    <section className="container">
      <div className="flex justify-center mb-16">
        <div className="flex justify-center gap-2">
          {Object.values(filterButtonValues).map((value, i) => (
            <button
              key={i}
              onClick={() => filterButtonHandler(value)}
              className={`${
                projectType === value ? "filter__btn__active" : "filter__btn"
              } py-2`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects?.length === 0 ? (
        <p className="text-5xl text-center font-bold">No Data Found!!!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 project__parent p-7">
            {filteredProjects.map(
              (
                {
                  projectCat = "cat",
                  projectCatHeading = "head",
                  thumbPic = { name: "", url: "" },
                },
                index
              ) => (
                <Link
                  href={`our-projects/${projectCat}`}
                  key={index}
                  className="relative w-full border border-red-500 rounded-md"
                >
                  <img
                    src={thumbPic?.url}
                    alt={thumbPic?.name}
                    className="!h-72 rounded-md"
                  />
                  <div className="absolute bottom-3 px-3 w-full">
                    <h6 className="project__type project__typeTxt w-2/3 p-2">
                      {projectCat}
                    </h6>
                    <div className="img__compnayHeading flex items-center justify-between py-4 px-2">
                      <h5 className="project__typeAnCompnayTxt">
                        {projectCatHeading}
                      </h5>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M18 2L18 16C18 17.1 17.1 18 16 18L2 18C0.9 18 0 17.1 0 16L0 2C0 0.9 0.9 0 2 0L16 0C17.1 0 18 0.9 18 2ZM13 5.2H5.9L8 7.3L4.2 11.2L7 14L10.9 10.2L13 12.3L13 5.2Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectsComponent;
