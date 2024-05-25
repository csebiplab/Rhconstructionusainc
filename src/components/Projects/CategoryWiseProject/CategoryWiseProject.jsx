import Link from "next/link";
import "./CategoryWiseProject.css";

const CategoryWiseProject = ({ cateGoryWiseProjects, category }) => {
  // console.log(cateGoryWiseProjects);
  return (
    <div className="container">
      <div>
        <div className="flex justify-center">
          <span className="py-[6px] block text-center lg:inline w-full lg:w-auto lg:px-60 project__catHeading text-white">
            {category}
          </span>
        </div>
        <div className="relative w-full lg:w-[65%] mx-auto my-6">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="search__input focus:outline-none py-[18px] pl-28 pr-5 w-[100%]"
            />
          </div>
          <div className="absolute inset-y-1/4 left-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <path
                d="M12.4018 24.8022C15.1534 24.8017 17.8257 23.8806 19.9932 22.1856L26.808 29L29 26.8081L22.1852 19.9937C23.8812 17.8261 24.8029 15.1533 24.8035 12.4011C24.8035 5.56345 19.2398 0 12.4018 0C5.56375 0 0 5.56345 0 12.4011C0 19.2388 5.56375 24.8022 12.4018 24.8022ZM12.4018 3.10028C17.5315 3.10028 21.7031 7.2717 21.7031 12.4011C21.7031 17.5305 17.5315 21.7019 12.4018 21.7019C7.27209 21.7019 3.10044 17.5305 3.10044 12.4011C3.10044 7.2717 7.27209 3.10028 12.4018 3.10028Z"
                fill="#625A5A"
              />
            </svg>
          </div>
        </div>

        <div>
          {cateGoryWiseProjects?.length === 0 ? (
            <p className="text-5xl text-center font-bold">No Data Found!!!</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 project__parent p-7">
                {cateGoryWiseProjects.map(
                  (
                    {
                      projectName = "",
                      projectPictures = [
                        {
                          projectPeriod: "",
                          urls: [
                            {
                              name: "",
                              url: "",
                            },
                          ],
                        },
                      ],
                    },
                    index
                  ) => (
                    <Link
                      href={`${category}/${projectName?.split(" ").join("-")}`}
                      key={index}
                      className="relative w-full rounded-md"
                    >
                      <img
                        src={projectPictures[0]?.urls[0]?.url}
                        alt={projectPictures[0]?.urls[0]?.name}
                        className="!h-72 rounded-md"
                      />
                      <div className="absolute bottom-3 px-3 w-full">
                        <div className="img__compnayHeading flex items-center justify-between py-4 px-2">
                          <h5 className="project__typeAnCompnayTxt">
                            {projectName}
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
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProject;
