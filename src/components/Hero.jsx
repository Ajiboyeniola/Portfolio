import React from "react";

import { eniola } from "../assets";
import Button from "./button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[64px] justify-between w-full items-center md:px-8 lg:px-40 px-6 py-[68px] ">
      <div className="flex flex-col items-center lg:items-start gap-[32px]">
        <h1 className="text-5xl lg:text-6xl text-center lg:text-left font-poppins font-semibold text-slate-900">
          <span>I Am </span>
          <span className="text-purple-600">Eniola</span> <br />{" "}
          <span>Product Designer</span>
        </h1>
        <p className="sm:w-[496px] text-base text-center lg:text-left font-poppins text-slate-900 ">
          Lorem ipsum dolor sit amet consectetur. Lorem tristique at sed
          adipiscing. Volutpat ultricies cursus venenatis curabitur netus. Morbi
          est sem faucibus ut quis adipiscing dolor non. Volutpat sem tempor
          senectus lacus eget risus diam sed.
        </p>
        <div className="flex gap-[32px]">
          <button className="bg-purple-600 px-[32px] py-[12px] text-white text-lg font-poppins rounded-[4px]">
            Hire Me
          </button>
          <button className="bg-white border border-solid border-purple-600 px-[32px] py-[12px] text-purple-600 text-lg font-poppins rounded-[4px]">
            How i Work
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="">
        <img
          src={eniola}
          alt=""
          className="w-[420px] h-[508px] object-cover mix-blend-luminosity"
        />
      </div>
    </div>
  );
};

export default Hero;
