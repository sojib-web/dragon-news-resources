// @ts-nocheck
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const name = form.name.value.trim();
    const photoURL = form.photoRL.value;
    const email = form.email.value;
    const password = form.password.value;
    const termsChecked = form.terms?.checked;

    if (name.length < 5) {
      setNameError("Name should be at least 5 characters.");
      return;
    } else {
      setNameError("");
    }

    if (!termsChecked) {
      setError("You must accept the Terms & Conditions.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL });
            setSuccess("Registration successful!");
            form.reset();
            navigate(location.state?.from?.pathname || "/");
          })
          .catch((err) => {
            console.error(err);
            setUser(user);
            setError("Failed to update profile.");
          });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
            {nameError && (
              <p className="text-red-500 text-xs mt-1">{nameError}</p>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoRL"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="cursor-pointer flex items-center gap-2">
              <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text">
                Accept <span className="font-semibold">Terms & Conditions</span>
              </span>
            </label>
          </div>

          {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
          {success && <p className="text-green-500 text-xs mb-3">{success}</p>}

          <button type="submit" className="btn btn-neutral w-full">
            Register
          </button>

          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-[#F75B5F] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
