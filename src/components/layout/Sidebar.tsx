import Search from "../layout/sidebar/Search";
import React from "react";
import Category from "./sidebar/Category";

const Sidebar = () => {
  return (
    <div className=" items-center rounded-lg gap-2 w-64 h-130  bg-[#24262d] text-[#d7d3d3] placeholder:text-[#d7d3d3] ">
      <div className="flex flex-col items-center gap-2">
        <Search />
      </div>

      <div className="m-2">
        <Category />
      </div>
    </div>
  );
};

export default Sidebar;
