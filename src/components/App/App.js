import { useEffect, useState } from 'react';
import { getData } from '../../utils/apiCalls';
import logo from '../../NYT2.png';
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
    setData('us')
  }, [])

  return (
    <div className="App">
      <img src={logo} alt='' />
      <NavBar setData={setData} />
      <MainContent allArticles={allArticles} />
    </div>
  );
}

export default App;
