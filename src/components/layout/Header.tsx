import React from "react";
import logo from "../../assets/taskapp.png";

const Header = () => {
  return (
    <div className="bg-[#0f1115]">
      {" "}
      <img src={logo} className="h-8  m-0" alt="TaskApp Logo" />
    </div>
  );
};

export default Header;
