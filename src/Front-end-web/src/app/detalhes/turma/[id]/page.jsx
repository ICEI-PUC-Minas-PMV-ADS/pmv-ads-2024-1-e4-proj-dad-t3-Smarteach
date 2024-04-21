'use client'

import { getClassProfile } from "@/hooks/turmas-hooks"

const Detalhes = ({params}) => {
    const {data} = getClassProfile(params.id)

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-10">
            <h1> Número da turma: {data?.number } </h1>
            <h1> Alunos: {data?.students} </h1>
        </div> 
    )
}

export default Detalhes;