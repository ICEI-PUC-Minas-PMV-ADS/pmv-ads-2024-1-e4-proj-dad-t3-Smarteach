'use client'
import axios from 'axios';
import { BASE_URL } from './url';

export async function createTask(data) {
    try {
        await axios.post(`${BASE_URL}class/activity`, {
            name: data.nome,
            subject: data.subject,
            time: data.time,
            date: data.date,
            teacher_email: data.teacher_email,
            class_number: Number(data.class_number),
        });

        if (response.status === 200) {
            console.log("Tarefa criada com sucesso!");
        } else {
            console.error(`Falha ao criar Tarefa. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error("Ocorreu um erro ao tentar criar a Tarefa:", error);
    }
}