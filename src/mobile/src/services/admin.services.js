import API from './webapi.services';
import { BASE_URL } from './urls';

export const getAdmin = async () => {
  try {
    const response = await API.get(`${BASE_URL}/admin`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAdminProfile = async (id) => {
  try {
      const response = await API.get(`${BASE_URL}/admin/profile/${id}`);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
};

export const createAdmin = async (data) => {
  try {
    const response = await API.post(`${BASE_URL}/admin`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateAdmin = async (data) => {
  try {
    const response = await API.patch(`${BASE_URL}/admin`, {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.senha
    });;
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const deleteAdmin = async (id) => {
  try {
    const response = await API.delete(`${BASE_URL}/admin/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};