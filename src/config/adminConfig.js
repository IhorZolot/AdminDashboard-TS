import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://backadmdashboard.onrender.com/api',
});
export const setToken = (token) => {
  // API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  API.defaults.headers.common.Authorization = '';
};
