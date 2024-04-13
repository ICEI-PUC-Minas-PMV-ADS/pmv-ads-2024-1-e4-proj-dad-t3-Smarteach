'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from './url';

export default function useStudentsList() {

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