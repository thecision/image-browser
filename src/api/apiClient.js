import axios from 'axios';

const apiClient = axios.create({
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});

export default apiClient;
