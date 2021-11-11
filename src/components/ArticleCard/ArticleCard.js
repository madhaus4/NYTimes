import './ArticleCard.css';

const ArticleCard = ({ title, date, abstract, multimedia }) => {

  return (
    <article className='article-card'>
      {/* <p>I am the ARTICLE CARD</p> */}
      <img src={multimedia} alt='' />
      <div className='article-info'>
        <p>{title}</p>
        <p>{date}</p>
        <button>Read more</button>
      </div>
      {/* <p>{abstract}</p> */}
    </article>
  )
}


export default ArticleCard;