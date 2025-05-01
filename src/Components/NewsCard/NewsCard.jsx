import React from "react";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { MdOutlineShare } from "react-icons/md";

const NewsCard = ({ news }) => {
  const { title, details, image_url, author, total_view, rating } = news;

  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="card bg-base-100 shadow-md ">
      <div className="card-body space-y-5  ">
        {/* Author section */}
        <div className="flex justify-between p-4 items-center bg-[#F3F3F3] rounded">
          <div className="flex items-center gap-3 ">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{author.name}</p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex gap-2 text-gray-400 text-xl cursor-pointer">
            <span>
              <FaRegBookmark />
            </span>
            <span>
              <MdOutlineShare />
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>

        {/* News image */}
        <figure>
          <img
            src={image_url}
            alt={title}
            className="rounded-md w-full object-cover max-h-64"
          />
        </figure>

        {/* Details */}
        <p className="text-sm text-gray-700">
          {details.length > 250 ? `${details.slice(0, 250)}...` : details}
          <span className="text-orange-500 font-medium ml-1 cursor-pointer">
            Read More
          </span>
        </p>

        {/* Rating and Views */}
        <div className="flex justify-between items-center border-t border-t-gray-400 pt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-400 font-semibold">
            {Array.from({ length: Math.floor(rating.number) }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-[#706F6F] ml-1">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaEye /> <span className="text-[#706F6F]">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
