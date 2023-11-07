import { useToggleReadMore } from '@/hooks/useToggleReadMore';
import { ArrowDown, ArrowUp } from '../Icons';
import styles from './styles.module.css';

const ReadMoreButton = () => {
  const { state, dispatch } = useToggleReadMore();

  const toggleReadMore = () => dispatch({ type: 'READMORE' });

  return (
    <button className={styles.readMoreBtn} onClick={toggleReadMore}>
      {state.isReadMore ? 'Less' : 'More'}
      <span className={styles.readMoreBtnIcon}>
        {state.isReadMore ? <ArrowUp /> : <ArrowDown />}
      </span>
    </button>
  );
};

export default ReadMoreButton;
