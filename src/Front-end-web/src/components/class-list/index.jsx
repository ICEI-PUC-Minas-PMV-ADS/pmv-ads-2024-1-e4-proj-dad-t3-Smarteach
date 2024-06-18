'use client'
import { getClassList, filterClasses } from "@/services/turmas-services";
import Link from "next/link";
import { AppWindow, CalendarCheck } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import TooltipComponent from "../tooltip";

const ClassList = () => {

    const session = useSession();
    const { classData } = getClassList();

    const user = session?.data?.user
    const classList = filterClasses(user, classData)

    return (
        <div className="container grid grid-cols-classgrid gap-5 max-w-[1280px] h-full">
            {classList?.map(turma => (
                <div className="flex" key={turma._id}>
                    <div className="flex flex-col">
                        <div className="flex w-full justify-between">
                            <div className="flex gap-20 text-slate-400 ">
                                <TooltipComponent href={`/detalhes/turma/${turma._id}/cronograma`} icon={<CalendarCheck className="hover:text-primaryColor" />} label={"Cronograma"} />
                                <p className="text-2xl text-primaryColor font-bold"> Turma {turma.number} </p>
                                <TooltipComponent href={`/detalhes/turma/${turma._id}/mural`} icon={<AppWindow className="hover:text-primaryColor" />} label={"Mural"} />
                            </div>
                        </div>
                        <Image src="https://img.freepik.com/free-photo/medium-shot-kids-cheating-school_23-2150256554.jpg" alt="imagem da turma" width={500} height={500} className="rounded-3xl mt-3 w-[350px] h-[175px] object-cover" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ClassList;