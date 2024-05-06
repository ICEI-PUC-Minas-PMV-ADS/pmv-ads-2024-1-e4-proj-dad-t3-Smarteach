'use client'
import { getClassProfile } from "@/services/turmas-services"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import SecondaryButton from "@/components/secondary-button";
import { obterTarefasDoDia } from "@/utils/obterTarefasDoDia";
import Link from "next/link";

const Cronograma = ({params}) => {
    const [ date, setDate ] = useState(new Date());
    const {classProfileData} = getClassProfile(params.id)

    const tarefas = obterTarefasDoDia(classProfileData, date);

    return (
        <div className="container flex flex-col justify-center items-center gap-5">
            <div className="w-full bg-primaryColor p-5 rounded-xl flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white"> Turma {classProfileData?.number}</h1>
            </div>
            <div className="flex w-full gap-5">
                <SecondaryButton label={"Filtrar Aulas"} />
                <Link href="/cadastro/tarefas"> <SecondaryButton label={"Adicionar Aulas"}/> </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <Calendar 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg shadow-xl"
                />
                {tarefas.length > 0 && (
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="text-2xl font-bold text-primaryColor">Tarefas:</h2>
                        {tarefas.map((tarefa, index) => (
                            <div key={index}>
                                <p>Data: {tarefa.dia}/{tarefa.mes}/{tarefa.ano} - Horário: {tarefa.hora} </p>
                                <p>Nome: {tarefa.name}</p>
                                <p>Matéria: {tarefa.subject}</p>
                                <p>Email do Professor: {tarefa.teacher_email}</p>
                            </div>
                        ))}
                    </div>
                )}
                {tarefas.length <= 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-primaryColor">Não há tarefas para o dia selecionado</h2>
                    </div>
                )}
            </div>        
        </div>
    )
}

export default Cronograma;