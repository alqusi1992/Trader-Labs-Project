// App.js
import mainImg from './assets/main.png';
import logo from './assets/logo.png';
import membershipsImg from './assets/memberships.png';

import './App.css';

function App() {
  return (
    <div className='container-app'>
      {/* Background image */}

      {/* Navbar */}
      <nav className='navbar'>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
          <i className='fas fa-bars'></i> Check
        </label>
        <label>
          {' '}
          <img src={logo} className='logo' />
        </label>
        <ul className='nav-links'>
          <li>
            <a className='active' href='#'>
              PREMIUM HUB
            </a>
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
      <section>
        <img src={mainImg} alt='Trader Labs' />
      </section>
      {/* Membership Section */}
      {/* <div className='memberships-section'>
        <img src={membershipsImg} alt='Premium Memberships' className='memberships-image' />
        <button className='join-now'>JOIN NOW</button>
      </div> */}

      {/* Coming Soon Button */}
      {/* <div className='coming-soon-section'>
        <button className='coming-soon'>COMING SOON</button>
      </div> */}
    </div>
  );
}

export default App;
