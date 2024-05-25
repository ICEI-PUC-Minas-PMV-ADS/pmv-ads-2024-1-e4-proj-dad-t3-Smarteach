'use client'
import { getClassProfile } from "@/services/turmas-services"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import SecondaryButton from "@/components/secondary-button";
import { obterTarefasDoDia } from "@/utils/obterTarefasDoDia";
import Link from "next/link";

const Cronograma = ({ params }) => {
    const [date, setDate] = useState(new Date());
    const { classProfileData } = getClassProfile(params.id)

    const tarefas = obterTarefasDoDia(classProfileData, date);
    const leiaMais = (id) => {
        const pontos = document.getElementById(`pontos-${id}`);
        const maisTexto = document.getElementById(`mais-${id}`);
        const btnLeiaMais = document.getElementById(`btnLeiaMais-${id}`);

        if (pontos.style.display === "none") {
            pontos.style.display = "inline";
            maisTexto.style.display = "none";
            btnLeiaMais.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7"/></svg>';
        } else {
            pontos.style.display = "none";
            maisTexto.style.display = "inline";
            btnLeiaMais.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 15l7-7 7 7"/></svg>';
        }
    }

    return (
        <div className="container flex flex-col justify-center items-center gap-5">
            <div className="w-full bg-primaryColor p-5 rounded-xl flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white"> Turma {classProfileData?.number}</h1>
            </div>
            <div className="flex w-full gap-5">
                <SecondaryButton label={"Filtrar Aulas"} />
                <Link href="/cadastro/tarefas"> <SecondaryButton label={"Adicionar Aulas"} /> </Link>
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
                            <div className="bg-gray-200 rounded-xl" key={index}>
                                <div className="flex bg-primaryColor rounded-xl justify-between px-8">
                                    <p className="text-2xl font-bold text-white mt-3 ml-7">{tarefa.name}</p>
                                    <p className="flex text-m text-white mt-2 mr-7">{tarefa.dia}/{tarefa.mes} <br /> {tarefa.hora}</p>
                                </div>
                                <div>
                                    <p className="flex text-2xl font-light text justify-center mt-3 text-gray-500">{tarefa.subject}</p>
                                </div>
                                <div className="flex justify-center">
                                    <img className="flex rounded-xl justify-center items-center mt-5 mb-3 h-[280px]"
                                        src="https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png" alt="Imagem de exemplo"></img>
                                </div>
                                <div className="container">
                                    <p className=" text-x leading-5 text-gray-500 mt-3 mb-3 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                        Nam semper efficitur orci ac pellentesque. Nullam luctus euismod eros.<br />
                                        Duis mollis, ante in mollis elementum, sapien elit congue felis, nec commodo<br />
                                        velit risus sit amet quam. Quisque elementum orci non sagittis commodo.<br />
                                        In egestas ligula turpis, id scelerisque arcu pharetra et.<br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></p>
                                    <p className="text-x leading-5 text-gray-500 mt-3 mb-3 px-10"><strong>Email:</strong> {tarefa.teacher_email}</p>
                                </div>


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
    );

}

export default Cronograma;