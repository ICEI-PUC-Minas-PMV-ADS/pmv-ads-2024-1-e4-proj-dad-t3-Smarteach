'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from './url';

export async function createStudent(data) {

    try {
        await axios.post(`${BASE_URL}student`, {
            name: data.nome,
            class_number: data.class_number,
            email: data.email,
            password: data.senha
        });

        if (response.status === 200) {
            console.log("Aluno alterado com sucesso!");
        } else {
            console.error(`Falha ao alterar o aluno. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar alterar o aluno:", error);
    }
}

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
        studentList: query.data,
    };
}

export function getStudentProfile(id) {
    const query = useQuery({
        queryKey: ['student-profile-data'],
        queryFn: async () => {
            const response = await axios.get(`${BASE_URL}student/profile/${id}`);
            return response.data;
        }
    })

    return {
        ...query,
        studentData: query.data,
    };
}

export async function deleteStudent(id) {
    try {
        const response = await axios.delete(`${BASE_URL}student`, {
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

export async function updateStudent(data) {

    try {
        await axios.patch(`${BASE_URL}student`, {
            id: data._id,
            name: data.nome,
            class_number: data.class_number,
            email: data.email,
            password: data.senha
        });

        if (response.status === 200) {
            console.log("Aluno alterado com sucesso!");
        } else {
            console.error(`Falha ao alterar o aluno. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar alterar o aluno:", error);
    }
}

