import './ArticleCard.css';
import dayjs from 'dayjs';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const ArticleCard = ({ articleID, title, date, abstract, multimedia, getCurrentArticle }) => {

  return (
    <article id={articleID} className='article-card'>
      <img src={multimedia} alt='' />
      <div className='article-info'>
        <p>{dayjs(date).format('llll')}</p>
        <h2>{title}</h2>
        {/* <p>{dayjs(date).format('MM/DD/YYYY')}</p> */}
        <button onClick={() => getCurrentArticle(title)}>Read more</button>
      </div>
    </article>
  )
}


export default ArticleCard;