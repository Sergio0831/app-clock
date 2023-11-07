import { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchLocationInfo } from '@/lib/api';

type LocationDataType = {
  dateTime: string;
  abbreviation: string;
  timeZone: string;
  dayOfYear: number;
  dayOfWeek: number;
  weekNumber: number;
};

export const LocationDataContext = createContext<LocationDataType | undefined>(
  undefined
);

export const LocationDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useQuery({
    queryKey: ['locationInfo'],
    queryFn: fetchLocationInfo,
  });

  return (
    <LocationDataContext.Provider value={data}>
      {children}
    </LocationDataContext.Provider>
  );
};
