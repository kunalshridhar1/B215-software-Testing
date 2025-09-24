import axios from 'axios';

export const API_URL = 'http://localhost:5000/api';

export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
