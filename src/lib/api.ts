import axios from 'axios';
import { safeParse } from 'valibot';
import {
  CountryDataType,
  LocationInfoType,
  QuoteDataType,
  QuoteSchema,
} from './definitions';

export const fetchRandomQuote = async () => {
  try {
    const response = await axios.get<QuoteDataType>(
      import.meta.env.VITE_QUOTES_API
    );

    const result = safeParse(QuoteSchema, response.data);

    if (result.success) {
      return {
        content: result.output.content,
        author: result.output.author,
      };
    } else {
      throw new Error('Failed to fetch random quote');
    }
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`Error in fetchRandomQuote: ${error.message}`);
  }
};

export const fetchCountryData = async () => {
  try {
    const response = await axios.get<CountryDataType>(
      import.meta.env.VITE_IP_GEOLOCATION_API
    );

    return response.data;
  } catch (error) {
    throw new Error('Error in fetchCountryData');
  }
};

export const fetchLocationInfo = async () => {
  try {
    const response = await axios.get<LocationInfoType>(
      import.meta.env.VITE_WORLD_TIME_API
    );

    return response.data;
  } catch (error) {
    throw new Error('Error in fetchCountryData');
  }
};
