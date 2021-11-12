import { useEffect, useState } from 'react';
import { getData } from '../../utils/apiCalls';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  const [allArticles, setAllArticles] = useState([])
  // const [errorMsg, setErrorMsg] = useState('')

  const setData = (category) => {
    getData(category)
      .then(data => setAllArticles(data.results))
      .catch(error => console.log('error: ', error))
  }

  useEffect(() => {
    setData('world')
  }, [])

  return (
    <div className="App">
      <NavBar setData={setData} />
      <div className='divider-line'></div>
      <MainContent allArticles={allArticles} />
    </div>
  );
}

export default App;
