import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleContainer.css';

const ArticleContainer = ({ currentArticles }) => {
  console.log('currentArticles: ', currentArticles)
  const articleSet = currentArticles.map(article => {
    return <ArticleCard title={article.title} date={article.published_date} />
  })

  return (
    <div className='article-container'>
      {/* <p>I am the ARTICLE CONTAINER</p> */}
      {articleSet}
    </div>
  )
}


export default ArticleContainer;