import API from './webapi.services';
import { BASE_URL } from './urls';

export const createTask = async (data) => {
    try {
      const response = await API.post(`${BASE_URL}class/activity`, {
        name: data.nome,
        subject: data.subject,
        time: data.time,
        date: data.date,
        teacher_email: data.teacher_email,
        class_number: Number(data.class_number),
    });

    return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };