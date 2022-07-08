import axios from 'axios';
import { Config } from '@/constants';

const api = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 10000,
});

export default api;
