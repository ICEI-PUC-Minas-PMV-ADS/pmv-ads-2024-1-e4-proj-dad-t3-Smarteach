"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '../services/url';

export function getClassList() {
    const query = useQuery({
        queryKey: ['classes-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}class`);
            return response.data;
        }
    })

    return {
        ...query,
        data: query.data,
    };
}
