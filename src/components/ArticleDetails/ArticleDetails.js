import './ArticleDetails.css';
import dayjs from 'dayjs';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const ArticleDetails = ({ currentArticle }) => {

  return (
    <>

    {!currentArticle.title && <section className='article-details-container'>
      <h1 className='blink-2'>click on an article to view details</h1>
    </section>}
    

    {currentArticle.title && <section className='article-details-container'>

      <div className='detail-info'>
        <p>{dayjs(currentArticle.published_date).format('llll')}</p>
        <h2>{currentArticle.title}</h2>
        <h3>{currentArticle.abstract}</h3>
        <a href={currentArticle.short_url}>VIEW FULL ARTICLE HERE</a>
      </div>

      {currentArticle.multimedia !== undefined && <div className='detail-img'>
        <img src={currentArticle.multimedia[0].url} alt='' />
        <p>{currentArticle.multimedia[0].caption}</p>
        <p>{currentArticle.multimedia[0].copyright}</p>
      </div>}


    </section>}

    </>
  )
}


export default ArticleDetails;
