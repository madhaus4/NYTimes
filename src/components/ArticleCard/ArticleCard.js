import './ArticleCard.css';

const ArticleCard = ({ title, date }) => {

  return (
    <article className='article-card'>
      {/* <p>I am the ARTICLE CARD</p> */}
      <p>{title}</p>
      <p>{date}</p>
    </article>
  )
}


export default ArticleCard;