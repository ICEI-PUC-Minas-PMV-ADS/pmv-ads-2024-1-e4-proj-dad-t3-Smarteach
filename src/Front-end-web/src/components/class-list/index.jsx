'use client'
import { getClassList } from "@/hooks/turmas-hooks";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const ClassList = () => {
    const {classData} = getClassList();
    
    return (
        <div className="container grid grid-cols-classgrid gap-10 max-w-[1280px]"> 
                {classData?.map(turma => (
                    <Link 
                        key={turma._id}
                        href={`/detalhes/turma/${turma._id}`}
                    >
                        <div className="flex gap-5">
                            <Avatar className="w-[100px] h-[100px]">
                                <AvatarImage src="https://img.freepik.com/free-vector/empty-classroom-interior-with-chalkboard_1308-65378.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713225600&semt=sph" />
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="text-xl"> Turma {turma.number}</p>
                                {turma.students.length >= 1 && turma.students.length != 0 
                                    ? <p className="text-slate-500 pb-5"> 1 Aluno </p>
                                    : <p className="text-slate-500 pb-5"> {turma.students.length} Alunos </p>
                                }
                                <Link href="/" className="underline text-primaryPurple"> Cronograma de Aulas </Link>
                                <Link href="/" className="underline text-primaryPurple"> Mural </Link>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>        
    )
}

export default ClassList;