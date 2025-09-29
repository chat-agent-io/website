import axios from 'axios';
import { API_BASE_URL, API_TOKEN } from '@/app/config/api';

export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(API_TOKEN ? { 'xc-token': API_TOKEN } : {}),
  },
});
