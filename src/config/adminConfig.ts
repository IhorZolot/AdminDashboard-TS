import axios from 'axios';

export const API = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'http://localhost:3000/api/'
      : 'https://backadmdashboard.onrender.com/api',
});

export const setToken = (token: string) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  API.defaults.headers.common.Authorization = '';
};
