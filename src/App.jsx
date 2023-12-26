import { useState, useEffect, useRef } from 'react';

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

  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  const scrollToSection = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSectionIndex = sectionsRef.current.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });
      if (currentSectionIndex !== -1 && currentSectionIndex !== activeSection) {
        setActiveSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className='container-app'>
      {showScrollButton && (
        <button id='scrollToTopBtn' onClick={scrollToTop}>
          ↑
        </button>
      )}
      <section>
        <section ref={(el) => (sectionsRef.current[0] = el)}>
          <MainPage />
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)}>
          <Vision />
        </section>
        <section ref={(el) => (sectionsRef.current[2] = el)}>
          <LastWeek />
        </section>
        <section ref={(el) => (sectionsRef.current[3] = el)}>
          <ImagesSlide />
        </section>
        <section ref={(el) => (sectionsRef.current[4] = el)}>
          <Risk />
        </section>
        {/* Indicators */}
        <div className='scroll-indicators-main-page'>
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={`indicator-main-page ${index === activeSection ? 'active' : ''}`}
                onClick={() => scrollToSection(index)}
              ></div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
