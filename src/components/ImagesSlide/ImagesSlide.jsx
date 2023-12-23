import './ImagesSlide.css';
import DatabaseBanner from '../../assets/database-banner.png';
import DiscordBanner from '../../assets/discord-banner.png';
import ManifestoBanner from '../../assets/manifesto-Banner.png';

import PremiumHubBanner from '../../assets/Premium-hub-Banner.png';

import RoadmapBanner from '../../assets/roadmap-banner.png';

function ImagesSlide() {
  return (
    <div className='ImagesSlide'>
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
  );
}

export default ImagesSlide;
