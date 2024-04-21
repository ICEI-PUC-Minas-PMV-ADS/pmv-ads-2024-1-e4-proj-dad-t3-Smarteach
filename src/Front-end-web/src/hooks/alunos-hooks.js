'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '../services/url';

export function getStudentsList() {
    const query = useQuery({
        queryKey: ['student-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}student`);
            return response.data;
        }
    })

    return {
        ...query,
        data: query.data,
    };
}

export async function createStudent(data) {

    await axios.post(`${BASE_URL}student`, {
        name: data.nome,
        class_number: data.class_number,
        email: data.email,
        password: data.senha
    });
}

