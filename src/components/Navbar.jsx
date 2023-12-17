import { useState } from "react";

import { navLinks } from "../constants";
import { menu } from "../assets";
import Button from "./button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar w-full flex py-6 justify-between items-center sm:px-40 px-6 xl:max-w-[1040px]">
      <p className="text-4xl">
        <span className="font-bold text-purple-600">E</span>
        <span className="font-poppins">niola</span>
      </p>

      {/* Nav Links */}
      <div className="sm:flex hidden justify-end gap-[146px]">
        <ul className="flex justify-between items-center gap-[38px]">
          {navLinks.map((nav) => (
            <li className="text-base font-poppins cursor-pointer">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <Button />
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden bg-purple-600 px-2 py-2">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain color-purple "
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-purple-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <div className="flex flex-col gap-[20px]">
          <ul className="flex flex-col justify-end items-center gap-[20px]">
            {navLinks.map((nav) => (
              <li className="text-base font-poppins cursor-pointer text-white">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <Button />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
