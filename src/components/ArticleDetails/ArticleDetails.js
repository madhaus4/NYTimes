import './ArticleDetails.css';

const ArticleDetails = ({ currentArticle }) => {

  return (
    <>

    {!currentArticle.title && <section className='article-details-container'>
      <h1>click on an article to view details</h1>
    </section>}

    {currentArticle.title && <section className='article-details-container'>
      <h2>{currentArticle.title}</h2>
      {currentArticle.multimedia !== undefined && <img src={currentArticle.multimedia[0].url} alt='' />}
      {currentArticle.multimedia !== undefined && <p>IMG CAPTION: {currentArticle.multimedia[0].caption}</p>}
      <p>DATE: {currentArticle.published_date}</p>
      <p>ABSTRACT: {currentArticle.abstract}</p>
      <p>BYLINE: {currentArticle.by_line}</p>
      <a href={currentArticle.short_url}>VIEW FULL ARTICLE HERE</a>
    </section>}

    </>
  )
}


export default ArticleDetails;
{/* <img src={currentArticle.multimedia[0].url} alt='' />
<p>IMG CAPTION: {currentArticle.multimedia[0].caption}</p> */}