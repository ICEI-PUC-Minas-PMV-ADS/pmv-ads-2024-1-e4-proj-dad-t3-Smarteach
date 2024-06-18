import API from './webapi.services';
import { BASE_URL } from './urls';

export const getClassList = async () => {
  try {
    const response = await API.get(`${BASE_URL}/class`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getClassProfile = async (id) => {
  try {
      const response = await API.get(`${BASE_URL}/class/profile/${id}`);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
};

export const createClass = async (data) => {
  try {
    const response = await API.post(`${BASE_URL}/class`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
