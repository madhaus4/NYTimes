import ArticleContainer from '../ArticleContainer/ArticleContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import './MainContent.css';

const MainContent = ({ currentArticles }) => {
  

  return (
    <main>
      {/* <p>I am the MAINCONTENT</p> */}
      <ArticleContainer currentArticles={currentArticles} />
      <ArticleDetails />
    </main>
  )
}


export default MainContent;