import axios from 'axios';
import { safeParse } from 'valibot';
import {
  CountryDataType,
  CountrySchema,
  LocationInfoType,
  LocationSchema,
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

    const result = safeParse(CountrySchema, response.data);

    if (result.success) {
      return {
        cityName: result.output.cityName,
        countryCode: result.output.countryCode,
      };
    } else {
      throw new Error('Failed to fetch country data');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error in fetchCountryData: ${error.message}`);
    }
  }
};

export const fetchLocationInfo = async () => {
  try {
    const response = await axios.get<LocationInfoType>(
      import.meta.env.VITE_WORLD_TIME_API
    );

    const result = safeParse(LocationSchema, response.data);

    if (result.success) {
      return {
        dateTime: result.output.datetime,
        abbreviation: result.output.abbreviation,
        timeZone: result.output.timezone,
        dayOfYear: result.output.day_of_year,
        dayOfWeek: result.output.day_of_week,
        weekNumber: result.output.week_number,
      };
    } else {
      throw new Error('Failed to fetch location info');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error in fetchLocationData: ${error.message}`);
    }
  }
};
