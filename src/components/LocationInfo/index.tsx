import { clsx, type ClassValue } from 'clsx';
import { useToggleReadMore } from '@/hooks/useToggleReadMore';
import styles from './styles.module.css';
import { isDay } from '@/lib/utils';
import { useLocationData } from '@/hooks/useLocationData';
import moment from 'moment';

const LocationInfo = () => {
  const { state } = useToggleReadMore();
  const data = useLocationData();
  const currentHour = moment(data?.datetime).hour();
  const night = !isDay(currentHour);

  const locationInfoStyles: ClassValue = clsx({
    [styles.locationInfo]: true,
    [styles.isNight]: night,
  });

  const dividerStyles: ClassValue = clsx({
    [styles.divider]: true,
    [styles.isNight]: night,
  });

  return (
    <>
      {state.isReadMore && (
        <div className={locationInfoStyles}>
          <div className={`${styles.locationInfoWrapper} wrapper`}>
            <div className={styles.locationInfoItems}>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>current timezone</h3>
                <p className='heading-2'>{data?.timezone}</p>
              </article>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>day of the year</h3>
                <p className='heading-2'>{data?.day_of_year}</p>
              </article>
            </div>
            <div className={dividerStyles}></div>
            <div className={styles.locationInfoItems}>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>day of the week</h3>
                <p className='heading-2'>{data?.day_of_week}</p>
              </article>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>week number</h3>
                <p className='heading-2'>{data?.week_number}</p>
              </article>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationInfo;
