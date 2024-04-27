"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from './url';

export function getAdminList() {
    const query = useQuery({
        queryKey: ['admin-list-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}admin`);
            return response.data;
        }
    })

    return {
        ...query,
        adminList: query.data,
    };
}