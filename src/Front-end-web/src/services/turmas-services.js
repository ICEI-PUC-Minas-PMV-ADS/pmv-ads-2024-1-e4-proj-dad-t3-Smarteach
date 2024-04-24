"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from './url';

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
        classData: query.data,
    };
}

export function getClassProfile(id) {
    const query = useQuery({
        queryKey: ['class-profile-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}class/profile/${id}`);
            return response.data;
        }
    })

    return {
        ...query,
        classProfileData: query.data,
    };
}
