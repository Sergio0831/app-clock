import { useToggleReadMore } from '@/hooks/useToggleReadMore';
import styles from './styles.module.css';
import { clsx, type ClassValue } from 'clsx';
import { isDay } from '@/lib/utils';

// type LocationInfoProps = {}

const LocationInfo = () => {
  const { state } = useToggleReadMore();
  const night = !isDay(2);

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
        <section className={locationInfoStyles}>
          <div className={`${styles.locationInfoWrapper} wrapper`}>
            <div className={styles.locationInfoItems}>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>current timezone</h3>
                <p className='heading-2'>Europe/London</p>
              </article>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>day of the year</h3>
                <p className='heading-2'>295</p>
              </article>
            </div>
            <div className={dividerStyles}></div>
            <div className={styles.locationInfoItems}>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>day of the week</h3>
                <p className='heading-2'>5</p>
              </article>
              <article className={styles.locationInfoItem}>
                <h3 className='heading-6'>week number</h3>
                <p className='heading-2'>42</p>
              </article>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LocationInfo;
