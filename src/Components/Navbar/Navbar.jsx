import React from "react";
import { NavLink } from "react-router";
// @ts-ignore
import User from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between mt-5 items-center">
      <div className=""></div>
      <div className="nav flex gap-4 text-accent text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-2 ">
        <img src={User} alt="" />
        <button
          className="btn btn-primary px-10
        "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
