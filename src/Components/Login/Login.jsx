import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { SignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;

        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        // console.log(error);
        // alert(error);
        setError(error.message);
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
              required
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
              required
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
          <div>
            {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
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
