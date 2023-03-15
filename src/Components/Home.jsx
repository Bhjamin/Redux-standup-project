import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/potentialArticles";
import "./Home.css";
import { useDispatch } from "react-redux";
import { setDisplayArticle } from "../redux/displayArticle";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const potentialArticles = useSelector(selectPotentials);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const selectArticleHandler = (article) => {
    dispatch(setDisplayArticle(article))
    navigate('/details')
  };

  const articleDisplay = potentialArticles.map((article) => {
    return (
      <div key={article.content} className="article-Container">
        <h1>{article.title}</h1>

        {article.urlToImage ? (
          <img src={article.urlToImage} />
        ) : (
          null
        )}

        <button onClick={() => selectArticleHandler(article)}>See more</button>
      </div>
    );
  });

  return <div>{potentialArticles.length === 0 ? 'No results from search' : articleDisplay}</div>;
};

export default Home;
