import './App.css';
import MainPage from './components/MainPage/MainPage.jsx';
import Vision from './components/VisionPage/Vision.jsx';
import LastWeek from './components/LastWeek/LastWeek.jsx';
import ImagesSlide from './components/ImagesSlide/ImagesSlide.jsx';
import Risk from './components/Risk/Risk.jsx';

function App() {
  return (
    <div className='container-app'>
      <MainPage />
      <Vision />
      <LastWeek />
      <ImagesSlide />
      <Risk />
    </div>
  );
}

export default App;
