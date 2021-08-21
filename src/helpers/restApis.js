import ApiClient from './apiClient';

const apiClient = ApiClient();

export function getRandomQuote() {
  return apiClient.get(`https://type.fit/api/quotes`);
}
