import { useState } from 'react';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import './MainContent.css';

const MainContent = ({ allArticles }) => {
  const [currentArticle, setCurrentArticle] = useState({})

  const getCurrentArticle = (title) => {
    const findArticle = allArticles.find(article => article.title === title)
    setCurrentArticle(findArticle)
  }

  return (
    <main>
      {/* <p>I am the MAINCONTENT</p> */}
      <ArticleContainer allArticles={allArticles} getCurrentArticle={getCurrentArticle} />
      <ArticleDetails currentArticle={currentArticle} />
    </main>
  )
}


export default MainContent;