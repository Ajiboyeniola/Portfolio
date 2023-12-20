import { useState } from "react";

import { navLinks } from "../constants";
import { closeIcon, menu } from "../assets";
import Button from "./button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between  items-center md:px-8 lg:px-40 px-6 py-6">
      <p className="text-4xl">
        <span className="font-bold text-purple-600">E</span>
        <span className="font-poppins">niola</span>
      </p>

      {/* Nav Links */}

      <ul className="list-none sm:flex hidden justify-end items-center gap-[38px] flex-1">
        {navLinks.map((nav) => (
          <li
            className={`text-base  font-poppins cursor-pointer
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div className="sm:hidden  bg-purple-600 px-2 py-2">
        <img
          src={toggle ? closeIcon : menu}
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
