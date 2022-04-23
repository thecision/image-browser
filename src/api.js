import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});
