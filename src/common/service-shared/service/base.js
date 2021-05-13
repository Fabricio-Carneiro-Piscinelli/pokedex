import axios from 'axios';

import { BASE_URL_API } from '../config/path';

class Http {
  constructor() {
    this.PATHNAME = '';
    this.BASE_URL_API = BASE_URL_API;

    this.axios = axios.create({
      baseURL: this.BASE_URL_API.toString(),
      timeout: 100000,
    });
  }

  // Axios Instance Configuration
  setAxiosInstance() {
    // I set the Endpoint address
    this.axios.defaults.baseURL = `${this.axios.defaults.baseURL}${this.PATHNAME}`;
    // I configure the authorization token that will be used
    this.axios.defaults.headers = {
      ...this.axios.defaults.headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    // I set up the Response interceptors
    this.axios.interceptors.response.use(
      function (response) {
        // I catch the error to be worked
        // 1 = NOT FOUND, 2 = PERMISSION, 3 = FIELD EMPTY, 4 = FIELD VALUE INVALID
        if (response.data.error) {
          if (response.data.error === 1) {
            response.data.error = '\nNão encontrado';
            return Promise.resolve(response.data);
          }
          if (response.data.error === 2) {
            response.data.error = `\nAcesso não autorizado`;
            return Promise.reject(response.data);
          }
          if (response.data.error === 3) {
            response.data.error = `\nCampo Vazio`;
            return Promise.reject(response.data);
          }
          if (response.data.error === 4) {
            response.data.error = '\nValor em campo invalido';
            return Promise.reject(response.data);
          }
          if (response.data.error === 5) {
            response.data.error = '\nAção inválida';
            return Promise.reject(response.data);
          }

          return Promise.reject(JSON.stringify(response.data.error));
        }

        return response.data;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  // Method Copy configuration
  copy(url, data, configs) {
    return new Promise((resolve, reject) =>
      this.axios
        .request({ url, method: 'COPY' })
        .then(resolve)
        .catch((err) => {
          reject(`Erro - Tente novamente mais tarde,\n ${err}`);
        })
    );
  }
}

export default Http;