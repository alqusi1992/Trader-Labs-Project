import './LastWeek.css';
import lastWeekImage from '../../assets/last-weeks.png';

function LastWeek() {
  return (
    <div>
      {' '}
      <section className='LastWeek'>
        <img src={lastWeekImage} alt='Trader Labs' />
      </section>
    </div>
  );
}

export default LastWeek;
