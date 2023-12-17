import React from "react";
import { button } from "../constants";

const Button = () => {
  return (
    <div>
      {button.map((action) => (
        <button className="bg-purple-600 px-[32px] py-[12px] text-white text-lg font-poppins rounded-[4px]">
          {action.name}
        </button>
      ))}
    </div>
  );
};

export default Button;
