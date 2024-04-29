"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from './url';

export function getProfessorList() {
    const query = useQuery({
        queryKey: ['professor-list-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}teacher`);
            return response.data;
        }
    })

    return {
        ...query,
        professorList: query.data,
    };
}


export function getProfessorProfile(id) {
    const query = useQuery({
        queryKey: ['professor-profile-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}teacher/profile/${id}`);
            return response.data;
        }
    })

    return {
        ...query,
        professorProfileData: query.data,
    };
}

export async function updateProfessor(data) {

    try {
        await axios.patch(`${BASE_URL}teacher`, {
            id: data._id,
            name: data.nome,
            email: data.email,
            password: data.senha,
            classes: data.classes,
            period: data.period,
            subject: data.subject,
        });

        if (response.status === 200) {
            console.log("Professor alterado com sucesso!");
        } else {
            console.error(`Falha ao alterar o Professor. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar alterar o Professor:", error);
    }
}

export async function deleteProfessor(id) {
    try {
        const response = await axios.delete(`${BASE_URL}teacher`, {
            data: {
                id: id
            }
        });

        if (response.status === 200) {
            console.log("Professor deletado com sucesso!");
        } else {
            console.error(`Falha ao deletar o Professor. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar deletar o Professor:", error);
    }
}