import { useContext } from 'react';
import { LocationDataContext } from '@/context/LocationInfoContext';

export const useLocationData = () => {
  const data = useContext(LocationDataContext);
  if (data === null) {
    throw new Error('useLocationData must be used within LocationDataProvider');
  }

  return data;
};
