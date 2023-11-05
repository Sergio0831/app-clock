import { ToggleReadMoreContext } from '@/context/ToggleReadMore';
import { useContext } from 'react';

export const useToggleReadMore = () => {
  const context = useContext(ToggleReadMoreContext);

  if (!context) {
    throw new Error('useToggleReadMore must be used within a ToggleProvider');
  }

  return context;
};
