import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>

      <div className="space-y-3">
        {/* Google Login Button */}
        <button className="btn w-full btn-outline btn-secondary flex items-center gap-2">
          <FcGoogle size={24} />
          <span>Login with Google</span>
        </button>

        {/* GitHub Login Button */}
        <button className="btn w-full btn-outline btn-primary flex items-center gap-2">
          <FaGithub size={24} />
          <span>Login with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
