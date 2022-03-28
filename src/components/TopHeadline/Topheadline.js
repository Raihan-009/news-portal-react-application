import React, { useEffect } from "react";
import { useState } from "react";
import News from "../News/News";
import "bootstrap/dist/css/bootstrap.min.css";

const Topheadline = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=35e6279ee3de4b2ea1edf17ec0c8f8e7";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div className="row">
      {articles.map((article) => (
        <div className="col-sm-4 col-12 mb-3">
          <News article={article}></News>
        </div>
      ))}
    </div>
  );
};

export default Topheadline;
