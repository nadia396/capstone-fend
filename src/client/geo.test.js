import fetch from 'node-fetch';
import { getGeonames } from "./js/app";

jest.mock('node-fetch');

global.fetch = fetch;

test('getGeonames returns the correct data', async () => {
  const mockResponse = {
    geonames: [{ lat: '40.7128', lng: '-74.0060', countryName: 'United States' }]
  };
  fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(mockResponse) });

  const geoBaseURL = 'http://api.geonames.org/searchJSON';
  const geoapiKey = 'nadiasheikh396';
  const geonamesData = await getGeonames(geoBaseURL, 'New York', geoapiKey);

  expect(geonamesData.latitude).toBe('40.7128');
  expect(geonamesData.longitude).toBe('-74.0060');
  expect(geonamesData.country).toBe('United States');
});