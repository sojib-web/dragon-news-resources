// @ts-nocheck
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import RightAside from "../HomeLayouts/RightAside";
import NewsCard from "./NewsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  // const {title, image_url ,details}= data
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10  ">
        <section className="col-span-9">
          <NewsCard news={news}></NewsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
