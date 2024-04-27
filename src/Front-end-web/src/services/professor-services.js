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

export async function deleteProfessor(id) {
    try {
        const response = await axios.delete(`${BASE_URL}teacher`, {
            data: {
                id: id
            }
        });

        if (response.status === 200) {
            console.log("Aluno deletado com sucesso!");
        } else {
            console.error(`Falha ao deletar o aluno. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar deletar o aluno:", error);
    }
}