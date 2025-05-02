// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../../Components/NewsCard/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      // console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <h1 className="font-bold mb-5">
        Total <span className="text-secondary"> {categoryNews.length}</span>{" "}
        news found
      </h1>
      <div className="gird grid-cols-1 space-y-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
