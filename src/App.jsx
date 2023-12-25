import { useState, useEffect } from 'react';

import './App.css';
import MainPage from './components/MainPage/MainPage.jsx';
import Vision from './components/VisionPage/Vision.jsx';
import LastWeek from './components/LastWeek/LastWeek.jsx';
import ImagesSlide from './components/ImagesSlide/ImagesSlide.jsx';
import Risk from './components/Risk/Risk.jsx';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScroll = () => {
    if (!showScrollButton && window.pageYOffset > 150) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.pageYOffset <= 100) {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [showScrollButton]);

  return (
    <div className='container-app'>
      {showScrollButton && (
        <button id='scrollToTopBtn' onClick={scrollToTop}>
          ↑
        </button>
      )}
      <MainPage />
      <Vision />
      <LastWeek />
      <ImagesSlide />
      <Risk />
    </div>
  );
}

export default App;
