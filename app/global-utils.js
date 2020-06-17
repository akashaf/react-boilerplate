import axios from 'axios';

export const apiRequest = (path, type = 'get', body, baseUrl, headerParams) =>
  axios[type](path, body, headerParams);
