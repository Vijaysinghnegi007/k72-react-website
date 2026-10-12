import React from "react";
import { Link } from "react-router-dom";
const HomeBottomText = () => {
  return (
    <>
      <div className="font-[font2] text-white flex justify-center items-center  gap-4 ">
        <Link
          to="/about"
          className="text-[6vw] border-4 border-white rounded-full uppercase px-10"
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="text-[6vw] border-4 border-white rounded-full uppercase px-10"
        >
          Agence
        </Link>
      </div>
    </>
  );
};

export default HomeBottomText;
