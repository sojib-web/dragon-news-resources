import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mt-5">Find Us on</h2>

      <div className="border border-[#E7E7E7] rounded-md divide-y divide-gray-300 mt-5">
        <div className="flex items-center gap-3 p-4 w-full">
          <div className="bg-gray-100 p-2 rounded-full text-blue-600">
            <FaFacebookF />
          </div>
          <span className="text-gray-700 font-medium break-words">
            Facebook
          </span>
        </div>

        <div className="flex items-center gap-3 p-4 w-full">
          <div className="bg-gray-100 p-2 rounded-full text-sky-500">
            <FaTwitter />
          </div>
          <span className="text-gray-700 font-medium break-words">Twitter</span>
        </div>

        <div className="flex items-center gap-3 p-4 w-full">
          <div className="bg-gray-100 p-2 rounded-full text-pink-500">
            <FaInstagram />
          </div>
          <span className="text-gray-700 font-medium break-words">
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
