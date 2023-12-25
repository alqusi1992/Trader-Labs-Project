import './ImagesSlide.css';
import DatabaseBanner from '../../assets/database-banner.png';
import DiscordBanner from '../../assets/discord-banner.png';
import ManifestoBanner from '../../assets/manifesto-Banner.png';
import PremiumHubBanner from '../../assets/Premium-hub-Banner.png';
import RoadmapBanner from '../../assets/roadmap-banner.png';
import { useState, useRef } from 'react';

function ImagesSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  const updateActiveIndex = () => {
    const currentIndex = Math.floor(sliderRef.current.scrollLeft / window.innerWidth);
    setActiveIndex(currentIndex);
  };
  return (
    <div>
      <div className='ImagesSlide' onScroll={updateActiveIndex} ref={sliderRef}>
        {/* Image containers */}
        <div className='image-container'>
          <img src={PremiumHubBanner} alt='Trader Labs' className='image' />
          <div className='overlay-text'>Premium Hub</div>
        </div>
        <div className='image-container'>
          <img src={ManifestoBanner} alt='Trader Labs' className='image' />
          <div className='overlay-text'>Manifesto</div>
        </div>
        <div className='image-container'>
          <img src={RoadmapBanner} alt='Trader Labs' className='image' />
          <div className='overlay-text'>Roadmap</div>
        </div>
        <div className='image-container'>
          <img src={DatabaseBanner} alt='Trader Labs' className='image' />
          <div className='overlay-text'>Database</div>
        </div>
        <div className='image-container'>
          <img src={DiscordBanner} alt='Trader Labs' className='image' />
          <div className='overlay-text'>Discord</div>
        </div>
      </div>
      <div className='slider-indicators'>
        {[...Array(5)].map((_, index) => (
          <div key={index} className={`indicator ${index === activeIndex ? 'active' : ''}`}></div>
        ))}
      </div>
    </div>
  );
}

export default ImagesSlide;
