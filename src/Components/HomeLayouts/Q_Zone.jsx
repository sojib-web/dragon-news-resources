// @ts-nocheck
import React from "react";
import Class from "../../assets/class.png";
import Playground from "../../assets/playground.png";
import Swimming from "../../assets/swimming.png";

const activities = [
  { title: "Class", img: Class },
  { title: "Playground", img: Playground },
  { title: "Swimming", img: Swimming },
];

const Q_Zone = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="font-bold text-lg mb-5">Q-Zone</h2>
      <div className="space-y-6">
        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 shadow-md rounded-md text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Q_Zone;
