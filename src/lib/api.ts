import axios from 'axios';
import { QuoteData } from './definitions';

export const fetchRandomQuote = async () => {
  try {
    const response = await axios.get<QuoteData>(
      import.meta.env.VITE_QUOTES_API
    );

    return response.data;
  } catch (error) {
    throw new Error('Error in fetchRandomQuote');
  }
};
