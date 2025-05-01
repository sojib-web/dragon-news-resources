import React from "react";
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 mt-5">
      <h1 className="text-base-100 bg-secondary px-3 py-2">Latest</h1>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          natus expedita et facilis quam mollitia ducimus commodi dolores vitae
          tenetur?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          natus expedita et facilis quam mollitia ducimus commodi dolores vitae
          tenetur?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          natus expedita et facilis quam mollitia ducimus commodi dolores vitae
          tenetur?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
