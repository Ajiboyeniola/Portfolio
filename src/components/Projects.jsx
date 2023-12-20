import React from "react";
import { leftRound, right, rightRound } from "../assets";

const Projects = () => {
  return (
    <div className="flex flex-col gap-[64px] justify-between w-full items-center md:px-8 lg:px-48 px-6 py-[42px]">
      <div className="flex flex-col items-center gap-[16px]">
        <h1 className=" text-slate-900 font-poppins text-4xl lg:text-5xl text-center font-semibold">
          My latest <span className="text-purple-600 font-poppins">work</span>
        </h1>
        <p className=" sm:w-[500px] text-base text-center font-poppins text-slate-900">
          Lorem ipsum dolor sit amet consectetur. Lorem tristique at sed
          adipiscing. Volutpat ultricies cursus venenatis curabitur netus.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-row">
        <img src={leftRound} alt="" className="cursor-pointer" />

        <div className="">Hello</div>

        <button>
          <img src={rightRound} alt="" className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
