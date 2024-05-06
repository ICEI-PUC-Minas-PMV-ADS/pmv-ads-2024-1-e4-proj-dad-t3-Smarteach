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

export async function createClass(data) {

    try {
        await axios.post(`${BASE_URL}class`, {
            number: data.number,
        });

        if (response.status === 200) {
            console.log("Turma criada com sucesso!");
        } else {
            console.error(`Falha ao criar o Turma. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar criar a Turma:", error);
    }
}

export function filterClasses(user, classesData){

    try {
        const userRole = user.role;
    
        if (userRole == 'aluno' && classesData){
            const userClass = [user.userClass]
            classesData = classesData.filter((elt) => userClass.includes(elt.number) == true)
    
        } else if (userRole == 'professor' && classesData) {
            const userClasses = user.userClass
            classesData = classesData.filter((elt) => userClasses.includes(elt.number))

        }

        return classesData

    } catch (error){
        console.error("Ocorreu um erro ao tentar criar a Turma:", error);
    }
}