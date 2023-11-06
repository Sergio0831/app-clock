import styles from './styles.module.css';

// type TimeProps = {};

import GreetingMessage from '../GreetingMessage';
import ReadMoreButton from '../ReadMoreButton';
import { fetchCountryData } from '@/lib/api';
import { CountryData } from '@/lib/definitions';
import { useQuery } from '@tanstack/react-query';
import { useLocationData } from '@/hooks/useLocationData';
import moment from 'moment';

const Time = () => {
  const { data, isLoading, isError } = useQuery<Partial<CountryData>, Error>({
    queryKey: ['countryData'],
    queryFn: () => fetchCountryData(),
    select: (data: Partial<CountryData>) => ({
      cityName: data.cityName,
      countryCode: data.countryCode,
    }),
  });

  const timeData = useLocationData();

  return (
    <section className={`${styles.wrapperOuter} wrapper`}>
      <GreetingMessage currentTime={moment(timeData?.datetime).hour()} />
      <div className={styles.wrapperInner}>
        <div>
          <div>
            <time
              dateTime={timeData?.datetime}
              className={`${styles.time} heading-1`}
            >
              {moment(timeData?.datetime).format('HH:mm')}
            </time>
            <span className={styles.timeZone}>{timeData?.abbreviation}</span>
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
