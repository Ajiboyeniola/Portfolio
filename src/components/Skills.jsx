import React from "react";
import { skills } from "../constants";
import { right } from "../assets";

const Skills = () => {
  // sm:w-[496px] text-base text-center lg:text-left font-poppins text-slate-900 "
  return (
    <div className="flex flex-col lg:flex-row gap-[64px] justify-between w-full items-center px-6 md:px-8 lg:px-40 py-[32px]">
      <div className="flex flex-col items-center lg:items-start gap-[16px]">
        <h1 className="w-[284px] text-slate-900 font-poppins text-4xl lg:text-6xl text-center lg:text-left   font-semibold">
          How do I <span className="text-purple-600 font-poppins">help</span>
        </h1>
        <p className=" sm:w-[496px] text-base text-center lg:text-left font-poppins text-slate-900">
          Lorem ipsum dolor sit amet consectetur. Lorem tristique at sed
          adipiscing. Volutpat ultricies cursus venenatis curabitur netus. Morbi
          est sem faucibus ut quis adipiscing dolor non. Volutpat sem tempor
          senectus lacus eget risus diam sed.
        </p>
      </div>
      {/* Skill acquisition */}
      <div className="flex flex-col items-start gap-[26px]">
        {skills.map((skill) => (
          <div className="flex items-center justify-between w-[440px] lg:w-[340px] xl:w-[440px] px-[24px]  sm:px-[40px] py-[16px] bg-slate-100 rounded-[8px]">
            <div className="flex flex-col items-start gap-[4px] w-[259px] sm:w-[518px] justify-between ">
              <h1 className="text-xl font-medium font-poppins text-purple-600">
                {skill.title}
              </h1>
              <p className="text-base font-poppins text-slate-900">
                {skill.total}
              </p>
            </div>
            <img
              src={right}
              alt="right-icon"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
