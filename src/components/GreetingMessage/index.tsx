// type GreetingMessageProps = {}

import { SunIcon } from '../Icons';
import styles from './styles.module.css';

const GreetingMessage = () => {
  return (
    <div className={styles.greetingMessage}>
      <SunIcon />
      <h1 className='heading-4'>
        good morning, <span>it's currently</span>
      </h1>
    </div>
  );
};

export default GreetingMessage;
