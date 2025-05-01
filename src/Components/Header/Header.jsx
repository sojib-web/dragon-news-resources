import React from "react";
// @ts-ignore
import logo from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center gap-3 flex-col items-center mt-5">
      <img className="w-[350px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-semibold text-accent">
        {
          // @ts-ignore
          format(new Date(), "EEEE , MMMM , MM , 	yyyy")
        }
      </p>
    </div>
  );
};

export default Header;
