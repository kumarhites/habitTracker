import React from "react";
import { BiPlus } from "react-icons/bi";
import { GoArchive } from "react-icons/go";

const Navigation = () => {
  return (
    <div className="w-full md:w-[1280px] h-24 fixed z-10 navbar bg-base-100 flex justify-between">
      <h1 className="text-4xl font-bold text-gray-100">Habits</h1>
      <div className="flex gap-3">
        <div className="btn rounded-full bg-green-200 hover:bg-green-300">
          <BiPlus size={24} color="green" />
        </div>
        <div className="btn rounded-full bg-blue-200 hover:bg-blue-300">
          <GoArchive size={24} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
