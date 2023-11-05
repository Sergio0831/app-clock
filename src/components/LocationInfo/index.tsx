import { useToggleReadMore } from '@/hooks/useToggleReadMore';
import styles from './styles.module.css';

// type LocationInfoProps = {}

const LocationInfo = () => {
  const { state } = useToggleReadMore();

  return (
    <>
      {state.isReadMore && (
        <section className={styles.locationInfo}>
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
            <div className={styles.divider}></div>
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
