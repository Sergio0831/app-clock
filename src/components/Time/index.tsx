import styles from './styles.module.css';

// type TimeProps = {};

import GreetingMessage from '../GreetingMessage';
import ReadMoreButton from '../ReadMoreButton';

const Time = () => {
  return (
    <section className={`${styles.wrapperOuter} wrapper`}>
      <GreetingMessage />
      <div className={styles.wrapperInner}>
        <div>
          <div>
            <time
              dateTime='2023-11-03T11:37:00+0100'
              className={`${styles.time} heading-1`}
            >
              11:37
            </time>
            <span className={styles.timeZone}>BST</span>
          </div>
          <h2 className='heading-3'>in london, uk</h2>
        </div>
        <ReadMoreButton />
      </div>
    </section>
  );
};

export default Time;
