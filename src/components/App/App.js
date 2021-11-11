import { useEffect, useState } from 'react';
import { getData } from '../../utils/apiCalls';
import logo from '../../NYT2.png';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  const [allArticles, setAllArticles] = useState([])
  // const [errorMsg, setErrorMsg] = useState('')

  const setData = () => {
    getData('arts')
      .then(data => setAllArticles(data.results))
      .catch(error => console.log('error: ', error))
  }

  useEffect(() => {
    setData()
  }, [])

  return (
    <div className="App">
      {/* <p>New York Times News Reader</p> */}
      <img src={logo} alt='' />
      <NavBar />
      <MainContent allArticles={allArticles} />
    </div>
  );
}

export default App;
