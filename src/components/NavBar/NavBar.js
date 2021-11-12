import logo from '../../NYT2.png';
import './NavBar.css';

const NavBar = ({ setData }) => {

  return (
    <nav className='nav-bar'>
      <img src={logo} alt='' />
      <div className='nav-container'>
        <button onClick={() => setData('arts')}>Arts</button>
        <button onClick={() => setData('automobiles')}>Automobiles</button>
        <button onClick={() => setData('books')}>Books</button>
        <button onClick={() => setData('business')}>Business</button>
        <button onClick={() => setData('fashion')}>Fashion</button>
        <button onClick={() => setData('food')}>Food</button>
        <button onClick={() => setData('health')}>Health</button>
        <button onClick={() => setData('home')}>Home</button>
        <button onClick={() => setData('insider')}>Insider</button>
        <button onClick={() => setData('magazine')}>Magazine</button>
        <button onClick={() => setData('nyregion')}>NY Region</button>
        <button onClick={() => setData('obituaries')}>Obituaries</button>
        <button onClick={() => setData('opinion')}>Opinion</button>
        <button onClick={() => setData('politics')}>Politics</button>
        <button onClick={() => setData('realestate')}>Real Estate</button>
        <button onClick={() => setData('science')}>Science</button>
        <button onClick={() => setData('sports')}>Sports</button>
        <button onClick={() => setData('sundayreview')}>Sunday Review</button>
        <button onClick={() => setData('technology')}>Technology</button>
        <button onClick={() => setData('theater')}>Theater</button>
        <button onClick={() => setData('t-magazine')}>T-Magazine</button>
        <button onClick={() => setData('travel')}>Travel</button>
        <button onClick={() => setData('upshot')}>Upshot</button>
        <button onClick={() => setData('us')}>US</button>
        <button onClick={() => setData('world')}>World</button>
      </div>  
    </nav>
  )
}


export default NavBar;