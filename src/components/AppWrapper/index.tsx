import { clsx, type ClassValue } from 'clsx';
import styles from './styles.module.css';
import { useToggleReadMore } from '@/hooks/useToggleReadMore';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { state } = useToggleReadMore();

  const appWrapperStyles: ClassValue = clsx({
    [styles.appWrapper]: true,
    [styles.isReadMore]: state.isReadMore,
  });

  return <main className={appWrapperStyles}>{children}</main>;
};
