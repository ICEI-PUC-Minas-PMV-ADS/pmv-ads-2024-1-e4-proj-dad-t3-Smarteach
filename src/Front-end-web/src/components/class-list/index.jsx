'use client'
import { getClassList } from "@/services/turmas.services";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const ClassList = () => {
    const {data} = getClassList();

    return (
        <div className="container grid grid-cols-classgrid gap-10 max-w-[1280px]"> 
            {data?.map(data => (
                <div className="flex gap-5">
                    <Avatar className="w-[100px] h-[100px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="flex flex-col">
                        <p className="text-xl"> Turma {data.number} </p>
                        <p className="text-slate-500 pb-5"> 10 Alunos </p>
                        <Link href="/" className="underline text-primaryPurple"> Cronograma de Aulas </Link>
                        <Link href="/" className="underline text-primaryPurple"> Mural </Link>
                    </div>
                </div>
            ))}
        </div>        
    )
}

export default ClassList;