import axios from 'axios';
import { BASE_URL_API } from '../config/path';
import CUSTOM_ERRORS from '../../constants/errors';

const api = axios.create({
  baseURL: BASE_URL_API.toString(), //IP 
  // Temporary until
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  },
});

// Alter defaults after instance has been created
api.interceptors.response.use((response) => {
    // Capturo o Erro para ser trabalhado
    if (response.data.error) {
      const err = CUSTOM_ERRORS[response.data.error](response);
      return err || Promise.reject(JSON.stringify(response.data));
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;