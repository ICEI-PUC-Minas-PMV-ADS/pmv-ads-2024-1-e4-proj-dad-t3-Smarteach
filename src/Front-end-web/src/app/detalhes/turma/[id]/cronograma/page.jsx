'use client'
import { getClassProfile } from "@/services/turmas-services"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import SecondaryButton from "@/components/secondary-button";

const Cronograma = ({params}) => {
    const [ date, setDate ] = useState(new Date());
    const {classProfileData} = getClassProfile(params.id)

    return (
        <div className="container flex flex-col justify-center items-center gap-5">
            <div className="w-full bg-primaryColor p-5 rounded-xl flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white"> Turma {classProfileData?.number}</h1>
            </div>
            <div className="flex w-full gap-5">
                <SecondaryButton label={"Filtrar Aulas"} />
                <SecondaryButton label={"Adicionar Aulas"}/>
            </div>
            <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg shadow-xl"
            />
        </div>
    )
}

export default Cronograma;