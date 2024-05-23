import "./CategoryWiseProject.css";

const CategoryWiseProject = ({ cateGoryWiseProjects, category }) => {
  return (
    <div className="container">
      <div>
        <div className="flex justify-center">
          <span className="py-[6px] block text-center lg:inline w-full lg:w-auto lg:px-60 project__catHeading text-white">
            {category}
          </span>
        </div>
        <div className="relative w-full lg:w-[65%] mx-auto">
          <div className="mt-6 flex justify-center">
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
      </div>
    </div>
  );
};

export default CategoryWiseProject;
