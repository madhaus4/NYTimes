import { useEffect, useState } from 'react';
import { getData } from '../../utils/apiCalls';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState()

  useEffect(() => {
    getData('arts')
  }, [])

  return (
    <div className="App">
      <p>New York Times News Reader</p>
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
