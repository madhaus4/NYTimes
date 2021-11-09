import ArticleContainer from '../ArticleContainer/ArticleContainer';
import './MainContent.css';

const MainContent = ({ currentArticles }) => {
  

  return (
    <main>
      <p>I am the MAINCONTENT</p>
      <ArticleContainer currentArticles={currentArticles} />
    </main>
  )
}


export default MainContent;