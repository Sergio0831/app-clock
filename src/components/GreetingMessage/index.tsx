import { getGreetingMessage, isDay } from '@/lib/utils';
import { MoonIcon, SunIcon } from '../Icons';
import styles from './styles.module.css';

const GreetingMessage = ({ currentTime }: { currentTime: number }) => {
  return (
    <div className={styles.greetingMessage}>
      {isDay(currentTime) ? <SunIcon /> : <MoonIcon />}
      <h1 className='heading-4'>
        {getGreetingMessage(currentTime)}
        <span>, it's currently</span>
      </h1>
    </div>
  );
};

export default GreetingMessage;
