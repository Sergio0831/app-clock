import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

import { fetchCountryData } from '@/lib/api';
import { useLocationData } from '@/hooks/useLocationData';

import GreetingMessage from '../GreetingMessage';
import ReadMoreButton from '../ReadMoreButton';
import styles from './styles.module.css';
import Timer from '../Timer';

const Time = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['countryData'],
    queryFn: fetchCountryData,
  });

  const timeData = useLocationData();

  return (
    <section className={`${styles.wrapperOuter} wrapper`}>
      <GreetingMessage currentTime={moment(timeData?.dateTime).hour()} />
      <div className={styles.wrapperInner}>
        <div>
          <div className={styles.timerWrapper}>
            <Timer timeZone={timeData?.timeZone} />
            <p className={styles.timeZone}>{timeData?.abbreviation}</p>
          </div>
          {isLoading && <h2 className='heading-3'>City Name is loading...</h2>}
          {data && (
            <h2 className='heading-3'>
              in {data.cityName}, {data.countryCode}
            </h2>
          )}
          {isError && <h2 className='heading-3'>Failed to fetch city name</h2>}
        </div>
        <ReadMoreButton />
      </div>
    </section>
  );
};

export default Time;
