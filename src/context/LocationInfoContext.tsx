import { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LocationInfo } from '@/lib/definitions';
import { fetchLocationInfo } from '@/lib/api';

export const LocationDataContext = createContext<LocationInfo | undefined>(
  undefined
);

export const LocationDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useQuery<LocationInfo, Error>({
    queryKey: ['locationInfo'],
    queryFn: () => fetchLocationInfo(),
  });

  return (
    <LocationDataContext.Provider value={data}>
      {children}
    </LocationDataContext.Provider>
  );
};
