import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleContainer.css';

const ArticleContainer = ({ currentArticles }) => {
  console.log('currentArticles: ', currentArticles)
  let counter = 0
  const articleSet = currentArticles.map(article => {
    return <ArticleCard 
      key={counter++}
      title={article.title} 
      date={article.published_date} 
      abstract={article.abstract}
      multimedia={article.multimedia[0].url}
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