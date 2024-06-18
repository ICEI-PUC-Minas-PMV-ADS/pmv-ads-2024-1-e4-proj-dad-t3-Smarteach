import API from './webapi.services';
import { BASE_URL } from './urls';

export const getTeacher = async () => {
  try {
    const response = await API.get(`${BASE_URL}/teacher`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTeacherProfile = async (id) => {
  try {
      const response = await API.get(`${BASE_URL}/teacher/profile/${id}`);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
};

export const createTeacher = async (data) => {
  try {
    const response = await API.post(`${BASE_URL}/teacher`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateTeacher = async (data) => {
  try {
    const response = await API.patch(`${BASE_URL}/teacher`, {
        id: data.id,
        name: data.name,
        class_number: data.class_number,
        email: data.email,
        password: data.senha
    });;
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const deleteTeacher = async (id) => {
  try {
    const response = await API.delete(`${BASE_URL}/teacher/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};