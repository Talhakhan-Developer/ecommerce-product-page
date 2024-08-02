import React from "react";
import profile from "../../images/image-avatar.png";
import logo from "../../images/logo.svg";
import Navigation from "./Navigation";
import Cart from "./Cart";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="Navbar w-full shadow-sm">
        <div className="Navbar-content relative flex items-center justify-between  p-4 md:pl-10 md:pr-10 ">
          <div className="navbar-left flex justify-between w-1/2 sm:justify-start sm:gap-x-4">
            <Navigation />
            <div className="logo-title flex items-center gap-x-3 md:w-[30%]">
              <img src={logo} alt="" />
            </div>
            <div className="md:block sm:hidden w-[70%]">
              <ul className="flex justify-between gap-x-[20px] text-neutral-DarkGrayishBlue">
                <li className="hover:text-neutral-VeryDarkBlue cursor-pointer hover:border-b border-primary-Orange">
                  Collections
                </li>
                <li className="hover:text-neutral-VeryDarkBlue cursor-pointer hover:border-b border-primary-Orange">
                  Men
                </li>
                <li className="hover:text-neutral-VeryDarkBlue cursor-pointer hover:border-b border-primary-Orange">
                  Women
                </li>
                <li className="hover:text-neutral-VeryDarkBlue cursor-pointer hover:border-b border-primary-Orange">
                  About
                </li>
                <li className="hover:text-neutral-VeryDarkBlue cursor-pointer hover:border-b border-primary-Orange">
                  Contact
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-right flex items-center gap-x-5 md:gap-x-7">
            <Cart />
            <div className="profile h-5 w-5 md:h-9 md:w-9 cursor-pointer rounded-full hover:border-2 border-primary-Orange">
              <img
                src={profile}
                className="rounded-full overflow-hidden"
                alt="Profile Pic"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
