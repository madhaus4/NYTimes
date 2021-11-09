import { useEffect, useState } from 'react';
import { getData } from '../../utils/apiCalls';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  const [currentArticles, setCurrentArticles] = useState([])
  // const [errorMsg, setErrorMsg] = useState('')

  const setData = () => {
    getData('arts')
      .then(data => setCurrentArticles(data.results))
      .catch(error => console.log('error: ', error))
  }

  useEffect(() => {
    setData()
  }, [])

  return (
    <div className="App">
      <p>New York Times News Reader</p>
      <NavBar />
      <MainContent currentArticles={currentArticles} />
    </div>
  );
}

export default App;
