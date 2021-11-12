import './ArticleDetails.css';

const ArticleDetails = ({ currentArticle }) => {
  return (
    <section className='article-details-container'>
      {currentArticle.multimedia !== undefined && <img src={currentArticle.multimedia[0].url} alt='' />}
      {currentArticle.multimedia !== undefined && <p>IMG CAPTION: {currentArticle.multimedia[0].caption}</p>}
      <p>TITLE: {currentArticle.title}</p>
      <p>DATE: {currentArticle.published_date}</p>
      <p>ABSTRACT: {currentArticle.abstract}</p>
      <p>BYLINE: {currentArticle.by_line}</p>
      <a href={currentArticle.short_url}>VIEW FULL ARTICLE HERE</a>
    </section>
  )
}


export default ArticleDetails;