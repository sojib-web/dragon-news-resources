import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photoRL = form.photoRL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoRL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
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
              <input type="checkbox" className="checkbox" />
              <span className="label-text">
                Accept <span className="font-semibold">Term & Conditions</span>
              </span>
            </label>
          </div>

          <button type="submit" className="btn btn-neutral w-full">
            Register
          </button>

          <p className="text-center text-sm mt-5">
            All ready have an account?{" "}
            <span className="text-[#F75B5F] font-semibold cursor-pointer hover:underline">
              <Link to="/auth/login"> Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
