import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleContainer.css';

const ArticleContainer = ({ allArticles, getCurrentArticle }) => {
  let counter = 0
  const articleSet = allArticles.map(article => {
    if (article.multimedia) {
      return <ArticleCard 
      key={counter++}
      articleID={counter++}
      title={article.title} 
      date={article.published_date} 
      abstract={article.abstract}
      multimedia={article.multimedia[0].url}
      getCurrentArticle={getCurrentArticle}
      />
    }
  })

  return (
    <div className='article-container'>
      {articleSet}
    </div>
  )
}


export default ArticleContainer;