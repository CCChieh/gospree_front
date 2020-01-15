import axios from 'axios';
import config from './config';

function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, Object.assign(config, {
      params,
    }))
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, Object.assign(config, {
      params,
    }))
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default {
  get,
  post,
};
