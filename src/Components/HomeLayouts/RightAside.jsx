import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Q_Zone from "./Q_Zone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Q_Zone></Q_Zone>
    </div>
  );
};

export default RightAside;
