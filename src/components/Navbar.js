import React, { useState } from "react";
import { logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="px-[20px]">
      <div className="flex justify-between">
        <img src={logo} className="h-5" alt="logo" />
        <div className="hidden md:flex">
          <ul className="flex flex-row gap-5">
            <li className="transition-all ease-in-out cursor-pointer hover:scale-110">
              Home
            </li>
            <li className="transition-all ease-in-out cursor-pointer hover:scale-110">
              About Me
            </li>
            <li className="transition-all ease-in-out cursor-pointer hover:scale-110">
              Skills
            </li>
            <li className="transition-all ease-in-out cursor-pointer hover:scale-110">
              Portfolio
            </li>
            <li className="transition-all ease-in-out cursor-pointer hover:scale-110">
              Companies
            </li>
            <li className="transition-all ease-in-out cursor-pointer hover:scale-110">
              Contact Me
            </li>
          </ul>
        </div>
        <div className="md:hidden lg:hidden">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setToggle(true)}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => setToggle(false)}
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 cursor-pointer float-right"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
          {toggle ? (
            <ul className="flex flex-col mt-8 bg-gray-300 p-2">
              <li className="transition-all ease-in-out cursor-pointer hover:scale-110 p-3">
                Home
              </li>
              <li className="transition-all ease-in-out cursor-pointer hover:scale-110 p-3">
                About Me
              </li>
              <li className="transition-all ease-in-out cursor-pointer hover:scale-110 p-3">
                Skills
              </li>
              <li className="transition-all ease-in-out cursor-pointer hover:scale-110 p-3">
                Portfolio
              </li>
              <li className="transition-all ease-in-out cursor-pointer hover:scale-110 p-3">
                Companies
              </li>
              <li className="transition-all ease-in-out cursor-pointer hover:scale-110 p-3">
                Contact Me
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
