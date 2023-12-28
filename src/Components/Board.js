import React, { useEffect, useState } from "react";
import { Items } from "./Items";
import { NEWS_API_KEY } from "../api";

export default function Board({category}){

    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${NEWS_API_KEY}`;
        fetch(url).then(res => res.json()).then(data => setArticles(data.articles));
    },[category])

    return(
        <div>
            <h2 className="latestnews">India's Latest News!</h2>
            {articles.map((news, index) => {
                return <Items key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    );
}