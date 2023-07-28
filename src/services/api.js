import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-t5ie.onrender.com'
});