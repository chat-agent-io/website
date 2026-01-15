import axios from 'axios';
import { Config } from '@/app/config/api';

export const clientChatAgent = axios.create({
  baseURL: Config.chatAgent.config.url,
  headers: {
    'Content-Type': 'application/json',
  },
});
