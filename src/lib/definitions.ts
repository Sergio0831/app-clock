import { object, string, array, number, type Output } from 'valibot';

const QuoteSchema = object({
  _id: string(),
  content: string(),
  author: string(),
  tags: array(string()),
  authorSlug: string(),
  length: number(),
  dateAdded: string(),
  dateModified: string(),
});

export type QuoteDataType = Output<typeof QuoteSchema>;

export type CountryData = {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  continent: string;
  continentCode: string;
};

export type LocationInfo = {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};
