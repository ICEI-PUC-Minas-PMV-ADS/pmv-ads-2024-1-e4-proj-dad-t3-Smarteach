import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // ou qualquer outro endereço onde seu backend esteja rodando

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signIn = async (email, password) => {
  try {
    const response = await api.post('/signin', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
