// type GreetingMessageProps = {}

import { getGreetingMessage, isDay } from '@/lib/utils';
import { MoonIcon, SunIcon } from '../Icons';
import styles from './styles.module.css';

const GreetingMessage = () => {
  return (
    <div className={styles.greetingMessage}>
      {isDay(2) ? <SunIcon /> : <MoonIcon />}
      <h1 className='heading-4'>
        {getGreetingMessage(2)}
        <span>, it's currently</span>
      </h1>
    </div>
  );
};

export default GreetingMessage;
