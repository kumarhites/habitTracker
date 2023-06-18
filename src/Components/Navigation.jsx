import React from "react";
import { GoArchive } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full md:w-[1280px] h-24 fixed z-10 navbar bg-base-100 flex justify-between">
      <NavLink to="/" className="text-4xl font-bold text-gray-100">
        Habits
      </NavLink>
      <div className="flex gap-3">
        <div className="btn rounded-full bg-blue-200 hover:bg-blue-300">
          <NavLink to="/archived">
            <GoArchive size={24} color="blue" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
