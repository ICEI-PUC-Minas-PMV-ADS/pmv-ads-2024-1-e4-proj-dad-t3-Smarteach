'use client'
import { getClassList } from "@/services/turmas-services";
import { AppWindow, CalendarCheck } from "lucide-react";
import Image from "next/image";
import TooltipComponent from "../tooltip";

const ClassList = () => {
    const {classData} = getClassList();
    
    return (
        <div className="container grid grid-cols-classgrid gap-5 max-w-[1280px]"> 
                {classData?.map(turma => (
                    <div className="flex" key={turma._id}>
                         <div className="flex flex-col">
                            <div className="flex w-full justify-between">
                                <p className="text-xl text-primaryColor font-bold"> Turma {turma.number} </p>
                                <div className="flex text-slate-400 ">
                                    <TooltipComponent href={`/detalhes/turma/${turma._id}/cronograma`} icon={<CalendarCheck className="hover:text-primaryColor"/>} label={"Cronograma"} />
                                    <TooltipComponent href={`/detalhes/turma/${turma._id}/mural`} icon={<AppWindow className="hover:text-primaryColor"/>} label={"Mural"} />
                                </div>
                             </div>
                            <Image src="https://img.freepik.com/free-photo/medium-shot-kids-cheating-school_23-2150256554.jpg" alt="imagem da turma" width={500} height={500} className="rounded-3xl mt-3 w-[350px] h-[175px] object-cover"/>
                        </div>
                    </div>
                ))}
        </div>        
    )
}

export default ClassList;