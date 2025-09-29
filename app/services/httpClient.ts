import axios from 'axios';
import { Config } from '@/app/config/api';

export const httpClient = axios.create({
  baseURL: Config.noco.config.url,
  headers: {
    'Content-Type': 'application/json',
  },
});
