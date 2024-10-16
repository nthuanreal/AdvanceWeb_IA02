// src/api/unsplash.js
import axios from 'axios';

const API_KEY = 'fNDfr_jiPavapc4EO76tKhQwDOV4BiAIR97unHc6IX0';
const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const fetchPhotos = (page = 1, perPage = 10) =>
  api.get('/photos', {
    params: { page, per_page: perPage },
  });

export const fetchPhotoDetails = (id) =>
  api.get(`/photos/${id}`);
