import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleContainer.css';

const ArticleContainer = ({ allArticles, getCurrentArticle }) => {
  
  console.log('allArticles: ', allArticles)

  let counter = 0

  const articleSet = allArticles.map(article => {
    return <ArticleCard 
      key={counter++}
      articleID={counter++}
      title={article.title} 
      date={article.published_date} 
      abstract={article.abstract}
      multimedia={article.multimedia[0].url}
      getCurrentArticle={getCurrentArticle}
    />
  })

  return (
    <div className='article-container'>
      {/* <p>I am the ARTICLE CONTAINER</p> */}
      {articleSet}
    </div>
  )
}


export default ArticleContainer;