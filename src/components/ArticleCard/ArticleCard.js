import './ArticleCard.css';

const ArticleCard = ({ title, date, abstract, multimedia }) => {

  return (
    <article className='article-card'>
      {/* <p>I am the ARTICLE CARD</p> */}
      <img src={multimedia} alt='' />
      <p>{title}</p>
      <p>{date}</p>
      <p>{abstract}</p>
    </article>
  )
}


export default ArticleCard;