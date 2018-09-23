import { create } from 'axios';

export const baseURL = process.env.API_URL || 'https://swapi.co/api';

export default create({
  baseURL,
  timeout: 15000,
});
