import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// @ts-ignore
import User from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        alert("Sign-out successful.");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // console.log("An error happened.", error);
      });
  };

  return (
    <div className="flex justify-between mt-5 items-center px-4">
      <div className="font-semibold text-lg">{user && user.email}</div>

      <div className="nav flex gap-4 text-accent text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Career
        </NavLink>
      </div>

      <div className="login-btn flex gap-2 items-center">
        <img
          src={user && user.photoURL ? user.photoURL : User}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-6">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
