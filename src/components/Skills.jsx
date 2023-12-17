import React from "react";
import { skills } from "../constants";
import { right } from "../assets";

const Skills = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-[64px] justify-between w-full items-center sm:px-40 px-6 py-[68px] xl:max-w-[1040px]">
      <div className="flex flex-col items-center sm:items-start gap-[16px]">
        <h1 className="w-[284px] text-slate-900 font-poppins text-4xl sm:text-6xl sm:text-left text-center  font-bold">
          How do I <span className="text-purple-600 font-poppins">help</span>
        </h1>
        <p className=" sm:w-[496px] text-sm sm:text-base sm:text-left text-center font-poppins text-slate-900">
          Lorem ipsum dolor sit amet consectetur. Lorem tristique at sed
          adipiscing. Volutpat ultricies cursus venenatis curabitur netus. Morbi
          est sem faucibus ut quis adipiscing dolor non. Volutpat sem tempor
          senectus lacus eget risus diam sed.
        </p>
      </div>

      {/* Skill acquisition */}
      <div className="flex flex-col items-start gap-[26px]">
        {skills.map((skill) => (
          <div className="flex items-center px-[24px]  sm:px-[40px] py-[16px] bg-slate-100 rounded-[8px]">
            <div className="flex flex-col items-start gap-[4px] w-[259px] sm:w-[518px] justify-between ">
              <h1 className="text-xl font-medium font-poppins text-purple-600">
                {skill.title}
              </h1>
              <p className="text-base font-poppins text-slate-900">
                {skill.total}
              </p>
            </div>
            <div className="">
              <img src={right} alt="right-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
