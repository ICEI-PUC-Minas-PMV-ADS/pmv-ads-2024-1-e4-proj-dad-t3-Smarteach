'use client'
import { getClassList } from "@/services/turmas-services";
import Link from "next/link";
import { AppWindow, CalendarCheck } from "lucide-react";
import Image from "next/image";

const ClassList = () => {
    const {classData} = getClassList();
    
    return (
        <div className="container grid grid-cols-classgrid gap-5 max-w-[1280px] h-screen"> 
                {classData?.map(turma => (
                    <Link 
                        key={turma._id}
                        href={`/detalhes/turma/${turma._id}`}
                    >
                        <div className="flex">
                            <div className="flex flex-col">
                                <div className="flex w-full justify-between">
                                    <p className="text-xl text-primaryColor font-bold"> Turma {turma.number} </p>
                                    <div className="flex text-slate-400 ">
                                        <Link href={`/detalhes/turma/${turma._id}/cronograma`}> <CalendarCheck className="hover:text-primaryColor"/> </Link>
                                        <Link href={`/detalhes/turma/${turma._id}/mural`}> <AppWindow className="hover:text-primaryColor"/> </Link>
                                    </div>
                                </div>
                                <Image src="https://img.freepik.com/free-photo/medium-shot-kids-cheating-school_23-2150256554.jpg" width={500} height={500} className="rounded-3xl mt-3 w-[350px] h-[175px] object-cover"/>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>        
    )
}

export default ClassList;