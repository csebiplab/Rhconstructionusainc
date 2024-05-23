"use client";

import { useState } from "react";

const filterButtonValues = {
  BEFORE: "Before",
  PROJECT_TIME: "Project Time",
  AFTER: "After",
};

const ProjectImages = ({ projectPictures }) => {
  const [period, setPeriod] = useState(filterButtonValues.BEFORE);

  const filterButtonHandler = async (value) => {
    setPeriod(value);
  };

  const filteredProjectPics = projectPictures?.filter((project) => {
    return project?.projectPeriod === period;
  });

  const { urls } = filteredProjectPics[0] ?? {};

  return (
    <div>
      <div className="flex justify-center mb-16">
        <div className="flex justify-center">
          {Object.values(filterButtonValues).map((value, i) => (
            <button
              key={i}
              onClick={() => filterButtonHandler(value)}
              className={`${
                period === value ? "filter__btn__active" : "filter__btn"
              } py-2`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {urls?.length === 0 ? (
        <p className="text-5xl text-center font-bold">No Image Found!!!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 project__parent p-7">
            {urls?.map(({ name = "", url = "" }, index) => (
              <div key={index} className="w-full rounded-md">
                <img src={url} alt={name} className="!h-72 rounded-md" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImages;
