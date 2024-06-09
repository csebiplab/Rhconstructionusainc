import "./CategoryWiseProject.css";
import ProjectImages from "./ProjectImages";

const SingleProject = ({ singleproject }) => {
  const {
    projectName,
    // clientName,
    // city,
    // budget,
    // completedYear,
    projectPictures,
  } = singleproject ?? {};

  return (
    <div className="container">
      <div>
        <div>
          <h3 className="projectName__singleShow text-center">{projectName}</h3>
          {/* <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-9 mb-14">
            <div className="client__detail py-3 flex justify-center">
              <div>
                <p className="text-center client__detailTitle">Clients</p>
                <p className="text-center mt-1 client__detailTitleValue">
                  {clientName}
                </p>
              </div>
            </div>
            <div className="client__detail py-3 flex justify-center">
              <div>
                <p className="text-center client__detailTitle">City</p>
                <p className="text-center mt-1 client__detailTitleValue">
                  {city}
                </p>
              </div>
            </div>
            <div className="client__detail py-3 flex justify-center">
              <div>
                <p className="text-center client__detailTitle">Budget</p>
                <p className="text-center mt-1 client__detailTitleValue">
                  {budget}
                </p>
              </div>
            </div>
            <div className="client__detail py-3 flex justify-center">
              <div>
                <p className="text-center client__detailTitle">
                  Year Completed
                </p>
                <p className="text-center mt-1 client__detailTitleValue">
                  {completedYear}
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="mt-8">
          <ProjectImages projectPictures={projectPictures} />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
