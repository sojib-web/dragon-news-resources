import React, { use } from "react";
import { Link, NavLink } from "react-router";
// @ts-ignore
import User from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, LogOut } = use(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(" An error happened.", error);
      });
  };
  return (
    <div className="flex justify-between mt-5 items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-4 text-accent text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-2 ">
        <img src={User} alt="" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary px-10
"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
