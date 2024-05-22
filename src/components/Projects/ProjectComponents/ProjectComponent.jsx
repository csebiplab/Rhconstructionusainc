// "use client";

// import { useState } from "react";
// import "./ProjectComponent.css";

// const filterButtonValues = {
//   ALL: "All",
//   INTERIOR: "Interior",
//   EXTERIOR: "Exterior",
// };

// const ProjectsComponent = ({ projects }) => {
//   const [projectType, setProjectType] = useState(filterButtonValues.ALL);

//   const filterButtonHandler = async (value) => {
//     setProjectType(value);
//   };

//   const filteredProjects = projects?.map((project) => {
//     if (
//       projectType !== filterButtonValues.ALL &&
//       project?.projectType === projectType
//     ) {
//       return project;
//     }
//     return project;
//   });

//   console.log(filteredProjects, "filter project");

//   return (
//     <section className="min-h-screen container">
//       <div className="flex justify-center">
//         <div className="flex justify-center gap-2">
//           {Object.values(filterButtonValues).map((value, i) => (
//             <button
//               key={i}
//               onClick={() => filterButtonHandler(value)}
//               className={`${
//                 projectType === value ? "filter__btn__active" : "filter__btn"
//               } py-2`}
//             >
//               {value}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsComponent;

"use client";

import { useState } from "react";
import "./ProjectComponent.css";

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

  //   console.log(filteredProjects, "filtered projects");

  return (
    <section className="min-h-screen container">
      <div className="flex justify-center">
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
      <div>
        {/* Render filtered projects here */}
        {filteredProjects.map(
          ({ projectCat = "cat", projectCatHeading = "head" }, index) => (
            <div key={index}>
              {/* Customize this section as per your project structure */}
              <h3>{projectCat}</h3>
              <p>{projectCatHeading}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProjectsComponent;
