import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { SignIn } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.target);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
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
            />
          </div>

          <div className="form-control mb-4 text-right">
            <label className="label cursor-pointer">
              <span className="label-text underline text-sm text-blue-600">
                Forgot password?
              </span>
            </label>
          </div>

          <button type="submit" className="btn btn-neutral w-full mb-4">
            Login
          </button>

          <p className="text-center text-sm mt-5">
            Don’t have an account?{" "}
            <span className="text-[#F75B5F] font-semibold cursor-pointer hover:underline">
              <Link to="/auth/signup"> Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
