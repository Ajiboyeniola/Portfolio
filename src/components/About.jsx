import React from "react";

import { eniola } from "../assets";

const About = () => {
  // <div className="">
  //       <div className=" absolute">
  //         <img
  //           src={eniola}
  //           alt=""
  //           className=" w-440px w-[339px] h-[415px] object-cover mix-blend-luminosity"
  //         />
  //       </div>
  //       <button className="relative w-fit bg-purple-600 px-[32px] py-[12px] text-white text-lg font-poppins rounded-[4px] top-48 sm:top-[274px] left-10 sm:left-[240px] ">
  //         Download my CV
  //       </button>
  //     </div>

  return (
    <div className="flex flex-col lg:flex-row gap-[64px] justify-between w-full items-center md:px-8 lg:px-48 px-6 py-[68px]">
      {/* <div className="">
        <img
          src={eniola}
          alt=""
          className="absolute w-[339px] h-[415px] object-cover mix-blend-luminosity"
        />

        <button className="relative top-[274px] left-[230px] bg-purple-600 px-[32px] py-[12px] text-white text-base font-poppins rounded-[4px]">
          Download CV
        </button>
      </div> */}

      <img
        src={eniola}
        alt=""
        className="w-[420px] h-[415px] object-cover mix-blend-luminosity"
      />

      <div className="flex flex-col items-center lg:items-start gap-[16px]">
        <h1 className="w-[400px] text-slate-900 font-poppins text-4xl lg:text-6xl text-center lg:text-left   font-semibold">
          More about <span className="text-purple-600 font-poppins">me</span>
        </h1>
        <p className=" sm:w-[496px] text-base text-center lg:text-left font-poppins text-slate-900">
          Lorem ipsum dolor sit amet consectetur. Lorem tristique at sed
          adipiscing. Volutpat ultricies cursus venenatis curabitur netus. Morbi
          est sem faucibus ut quis adipiscing dolor non. Volutpat sem tempor
          senectus lacus eget risus diam sed.
        </p>
        <div className="flex gap-[32px]">
          <button className="bg-purple-600 px-[32px] py-[12px] text-white text-lg font-poppins rounded-[4px]">
            Download my CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
