"use client";

import { IoIosArrowForward } from "react-icons/io";
import "./ProjectMenus.css";
import { usePathname } from "next/navigation";

import { FaHome } from "react-icons/fa";

const ProjectMenus = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="container mt-9 mb-20">
      <div className="flex items-center gap-1">
        <FaHome className="w-[30px] h-[30px]" />

        <div className="flex items-center menu__txt">
          <IoIosArrowForward />
          <span className="menu__txt">Project</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectMenus;
