import axios from 'axios';

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const get = async ({ url, headers = {} }: any) => {
  const response = await axios.get(url, {
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  });
  return response.data;
};

export const post = async ({ data, url, headers = {} }: any) => {
  const response = await axios.post(url, data, {
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  });
  return response.data;
};