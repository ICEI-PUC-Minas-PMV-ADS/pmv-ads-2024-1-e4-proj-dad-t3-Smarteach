'use client'
import { getClassProfile } from "@/services/turmas-services"

const Detalhes = ({params}) => {
    const {classProfileData} = getClassProfile(params.id)

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-10">
            <h1> Número da turma: {classProfileData?.number } </h1>
            <h1> Alunos: {classProfileData?.students.map(aluno => (
                <p> Aluno: {aluno} </p>
            ))} </h1>
            <h1> Professores: {classProfileData?.teachers} </h1>
        </div> 
    )
}

export default Detalhes;