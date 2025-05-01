import React, { Suspense } from "react";
import Category from "../Category/Category";
import Q_Zone from "./Q_Zone";
import Blog from "../Blog/Blog";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Category />
      </Suspense>

      <Blog></Blog>
    </div>
  );
};

export default LeftAside;
