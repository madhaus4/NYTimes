import './ArticleCard.css';

const ArticleCard = ({ articleID, title, date, abstract, multimedia, getCurrentArticle }) => {

  return (
    <article id={articleID} className='article-card'>
      <img src={multimedia} alt='' />
      <div className='article-info'>
        <p>{title}</p>
        <p>{date}</p>
        <button onClick={() => getCurrentArticle(title)}>Read more</button>
      </div>
    </article>
  )
}


export default ArticleCard;