import axios from 'axios';
import { CountryData, LocationInfo, QuoteDataType } from './definitions';

export const fetchRandomQuote = async () => {
  try {
    const response = await axios.get<QuoteDataType>(
      import.meta.env.VITE_QUOTES_API
    );

    return response.data;
  } catch (error) {
    throw new Error('Error in fetchRandomQuote');
  }
};

export const fetchCountryData = async () => {
  try {
    const response = await axios.get<CountryData>(
      import.meta.env.VITE_IP_GEOLOCATION_API
    );

    return response.data;
  } catch (error) {
    throw new Error('Error in fetchCountryData');
  }
};

export const fetchLocationInfo = async () => {
  try {
    const response = await axios.get<LocationInfo>(
      import.meta.env.VITE_WORLD_TIME_API
    );

    return response.data;
  } catch (error) {
    throw new Error('Error in fetchCountryData');
  }
};
