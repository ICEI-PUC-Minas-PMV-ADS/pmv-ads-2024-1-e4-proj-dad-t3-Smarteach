import API from './webapi.services';
import { BASE_URL } from './urls';

export const getStudent = async () => {
  try {
    const response = await API.get(`${BASE_URL}/student`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getStudentProfile = async (id) => {
  try {
      const response = await API.get(`${BASE_URL}/student/profile/${id}`);
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
};

export const createStudent = async (data) => {
  try {
    const response = await API.post(`${BASE_URL}/student`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateStudent = async (data) => {
  try {
    const response = await API.patch(`${BASE_URL}/student`, {
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


export const deleteStudent = async (id) => {
  try {
    const response = await API.delete(`${BASE_URL}/student/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};