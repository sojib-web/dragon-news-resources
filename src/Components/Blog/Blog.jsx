// @ts-nocheck
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 mt-10">
      {categories.map((category) => {
        const formattedDate = new Date(
          category.author?.published_date
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        return (
          <div key={category.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={category.image_url || "https://via.placeholder.com/400"}
                alt={category.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category.title}</h2>

              <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                {/* Showing badge if available */}
                <span>{category.rating?.badge || "No badge"}</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
