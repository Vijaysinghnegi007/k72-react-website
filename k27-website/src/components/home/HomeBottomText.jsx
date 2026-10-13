import React from "react";
import { Link } from "react-router-dom";
const HomeBottomText = () => {
  return (
    <>
      <div className="font-[font2] text-white flex justify-center items-center gap-6 font-bold ">
        <Link
          to="/projects"
          className="text-[6vw]  border-2 border-white rounded-full leading-[1.1] uppercase px-7 hover:text-[#d3fd50]  hover:border-[#d3fd50]"
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="text-[6vw] border-2 border-white rounded-full leading-[1.1] uppercase px-7 hover:text-[#d3fd50]  hover:border-[#d3fd50]"
        >
          Agence
        </Link>
      </div>
    </>
  );
};

export default HomeBottomText;
