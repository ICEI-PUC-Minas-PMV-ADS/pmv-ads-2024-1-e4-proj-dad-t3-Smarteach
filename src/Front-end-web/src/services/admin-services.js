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

export function getAdminProfile(id) {
    const query = useQuery({
        queryKey: ['admin-profile-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}admin/profile/${id}`);
            return response.data;
        }
    })

    return {
        ...query,
        adminProfileData: query.data,
    };
}


export async function updateAdmin(data) {

    try {
        await axios.patch(`${BASE_URL}admin`, {
            id: data._id,
            name: data.nome,
            email: data.email,
            password: data.senha
        });

        if (response.status === 200) {
            console.log("Admin alterado com sucesso!");
        } else {
            console.error(`Falha ao alterar o Admin. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar alterar o Admin:", error);
    }
}

export async function deleteAdmin(id) {
    try {
        const response = await axios.delete(`${BASE_URL}admin`, {
            data: {
                id: id
            }
        });

        if (response.status === 200) {
            console.log("Admin deletado com sucesso!");
        } else {
            console.error(`Falha ao deletar Admin. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar deletar o Admin:", error);
    }
}