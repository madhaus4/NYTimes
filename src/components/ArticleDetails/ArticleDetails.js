import './ArticleDetails.css';

const ArticleDetails = ({ currentArticle }) => {

  console.log('currentArticle: ', currentArticle)

  return (
    <section className='article-details-container'>
      <p> I am the ARTICLE DETAILS</p>
      <img src={currentArticle.multimedia[0].url} alt='' />
      <p>IMG CAPTION: {currentArticle.multimedia[0].caption}</p>
      <p>TITLE: {currentArticle.title}</p>
      <p>DATE: {currentArticle.published_date}</p>
      <p>ABSTRACT: {currentArticle.abstract}</p>
      <p>BYLINE: {currentArticle.by_line}</p>
      <a href={currentArticle.short_url}>VIEW FULL ARTICLE HERE</a>
    </section>
  )
}


export default ArticleDetails;