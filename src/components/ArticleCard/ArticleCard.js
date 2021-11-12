import './ArticleCard.css';
import dayjs from 'dayjs';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const ArticleCard = ({ articleID, title, date, abstract, multimedia, getCurrentArticle }) => {

  return (
    <article id={articleID} className='article-card'>
      <img src={multimedia} alt='' />
      <div className='article-info'>
        <p>{title}</p>
        {/* <p>{dayjs(date).format('MM/DD/YYYY')}</p> */}
        <p>{dayjs(date).format('llll')}</p>
        <button onClick={() => getCurrentArticle(title)}>Read more</button>
      </div>
    </article>
  )
}


export default ArticleCard;