import './ArticleCard.css';
import dayjs from 'dayjs';
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const ArticleCard = ({ articleID, title, date, section, subsection, multimedia, getCurrentArticle }) => {

  return (
    <article id={articleID} className='article-card'>
      <img src={multimedia} alt='' />
      <div className='article-info'>
        <div>
          <h3>{section}{subsection && <span>{` : ${subsection}`}</span>}</h3>
          <p>{dayjs(date).format('llll')}</p>
          <h2>{title}</h2>
        </div>
        <button onClick={() => getCurrentArticle(title)}>Read more</button>
      </div>
    </article>
  )
}


export default ArticleCard;