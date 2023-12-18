// App.js
import mainImg from './assets/main.png';

import './App.css';

function App() {
  return (
    <div className='app'>
      {/* Background image */}
      <img src={mainImg} alt='Trader Labs' className='background-image' />

      {/* Navbar */}
      <nav className='navbar'>
        <div className='logo'>T</div>
        <ul className='nav-links'>
          <li>
            <a href='#'>PREMIUM HUB</a>
          </li>
          <li>
            <a href='#'>MANIFESTO</a>
          </li>
          <li>
            <a href='#'>ROADMAP</a>
          </li>
          <li>
            <a href='#'>DATABASE</a>
          </li>
          <li>
            <a href='#'>DISCORD</a>
          </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className='button-container'>
        <button className='coming-soon'>COMING SOON</button>
        <button className='join-now'>JOIN NOW</button>
      </div>
    </div>
  );
}

export default App;
