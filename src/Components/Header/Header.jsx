import React from "react";
// @ts-ignore
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-center gap-3 flex-col items-center">
      <img className="w-[350px]" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
