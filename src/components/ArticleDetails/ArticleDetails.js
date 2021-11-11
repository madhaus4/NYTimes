import './ArticleDetails.css';

const ArticleDetails = ({ currentArticle }) => {

  return (
    <section className='article-details-container'>
      <p> I am the ARTICLE DETAILS</p>
      {/* <img src={} alt='' /> */}
      <p>{currentArticle.title}</p>
      <p>{currentArticle.date}</p>
    </section>
  )
}


export default ArticleDetails;