import { useTimer } from '@/hooks/useTimer';
import styles from './styles.module.css';
import { useMemo } from 'react';

type TimerProps = {
  timeZone?: string;
};

const Timer = ({ timeZone }: TimerProps) => {
  const timer = useTimer();
  const formattedTime = useMemo(
    () =>
      timer.toLocaleTimeString('en-IE', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone,
      }),
    [timeZone, timer]
  );

  return (
    <div className={styles.timer}>
      <span className='heading-1'>{formattedTime.slice(0, 2)}</span>
      <span className={`${styles.colons} heading-1`}>:</span>{' '}
      <span className='heading-1'>{formattedTime.slice(3, 5)}</span>
    </div>
  );
};

export default Timer;
