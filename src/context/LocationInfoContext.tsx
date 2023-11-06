import { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LocationInfoType } from '@/lib/definitions';
import { fetchLocationInfo } from '@/lib/api';

export const LocationDataContext = createContext<LocationInfoType | undefined>(
  undefined
);

export const LocationDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useQuery<LocationInfoType, Error>({
    queryKey: ['locationInfo'],
    queryFn: () => fetchLocationInfo(),
  });

  return (
    <LocationDataContext.Provider value={data}>
      {children}
    </LocationDataContext.Provider>
  );
};
