import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-[100%] lg:w-[85%] mx-auto flex justify-between py-4">
        <div id="logo" className="font-bold">
          <NavLink to={"/"}>Recipe App</NavLink>
        </div>
        <div id="search">
          <input
            type="search"
            className="py-2 px-4 rounded-2xl outline-none focus:shadow-xl focus:ring-1 focus:ring-blue-300 shadow-lg "
            placeholder="Search Here..."
          />
        </div>
        <div id="nav">
          <ul className="flex gap-2">
            <li>
              <NavLink className={"hover:text-blue-400"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={"hover:text-blue-400"} to={"favourite"}>
                Favorite
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
