import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Dragon News</h2>
      <div className="card bg-base-100 shadow-md p-10 w-full">
        <figure>
          <img
            src={news.image_url}
            alt="News"
            className="w-full h-auto object-cover"
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-2xl font-bold leading-snug">
            {news.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">{news.tags}</p>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            {news.details}
            {news.details}
          </p>
          <div className="card-actions mt-5">
            <Link
              to={`/category/${news.category_id}`}
              className="btn btn-error text-white"
            >
              ← All news in this category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
