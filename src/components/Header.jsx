import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ search, setSearch, favourite }) => {
  const [searchTerm, setSearchTerm] = useState("");


  const searchMeal = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  }

  return (
    <div className="w-full">
      <div className="w-[100%] lg:w-[85%] mx-auto flex justify-between py-4">
        <div id="logo" className="font-bold">
          <NavLink to={"/"}>Recipe App</NavLink>
        </div>
        <div id="search">
          <form onSubmit={searchMeal} >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              className="py-2 px-4 rounded-2xl outline-none focus:shadow-xl focus:ring-1 focus:ring-blue-300 shadow-lg "
              placeholder="Search Here..."
            />
          </form>
        </div>
        <div id="nav">
          <ul className="flex gap-2">
            <li>
              <NavLink className={"hover:text-blue-400"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="relative">
              <NavLink className={"hover:text-blue-400"} to={"favourite"}>
                Favorite
                {favourite.length > 0 && (
                  <span className=" absolute top-[-4px] right-[-12px] ml-2 bg-red-500 text-white text-xs px-1 py-0 rounded-full font-bold">
                    {favourite.length}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
