import axios from 'axios';
import {getAuthToken} from './auth';

const makeRequest = async (url, data, type) => {
  const authToken = await getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: authToken ? `Bearer ${authToken}` : '',
  };

  if (type === 'POST') {
    return axios.post(url, data, {headers});
  }

  return axios.get(url, {headers});
};

export default makeRequest;
