"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { CalendarIcon, UserPlus } from "lucide-react";
import { SubmitButton } from "@/components/submit-button";
import { useRouter } from "next/navigation";
import { getClassList } from "@/services/turmas-services";
import { getProfessorList } from "@/services/professor-services";
import { createTask } from "@/services/task-services";
import { useState } from "react";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {classData} = getClassList();

      const {professorList} = getProfessorList();
            
      const route = useRouter();
    
      const onSubmit = async (data) => {
        await createTask(data)
        route.push('/');
      };

    return (
        <div className=" flex justify-center items-center flex-col">
          <div className="flex flex-col items-center justify-center w-[500px]">
            <div className="flex flex-col w-full">
              <label className="pt-0 pb-2 text-black font-[500]"> Nome </label>
              <Input
                className={
                  errors.nome &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                {...register("nome", {
                  required: true,
                  minLength: 5,
                })}
              />
              {errors.nome?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
                  É obrigatório informar o nome completo
                </p>
              )}
              {errors.nome?.type === "minLength" && (
                <p className="pt-2 text-red-500 text-sm"> O nome é inválido </p>
              )}
            </div>
    
            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Matéria </label>
              <Input
                className={
                  errors.subject &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                {...register("subject", {
                  required: true,
                })}
              />
              {errors.subject?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
    
                  É obrigatório informar o materia
                </p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Horário </label>
              <Input
                className={
                  errors.time &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                {...register("time", {
                  required: true,
                })}
              />
              {errors.time?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
    
                  É obrigatório informar o horário
                </p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Data </label>
              <Input
                className={
                  errors.date &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                {...register("date", {
                  required: true,
                  // validate: (value) => {
                  //   return validator.isDate(value);
                  // },
                })}
              />
              {errors.date?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
    
                  É obrigatório informar a Data da Tarefa
                </p>
              )}
              {/* {errors.email?.type === "validate" && (
                <p className="pt-2 text-red-500 text-sm"> A data informada é inválida </p>
              )} */}
            </div>

            <div className="flex flex-col w-full">
                <label className="pt-3 pb-2 text-black font-[500]"> Número da turma </label>
                <div>
                    <select 
                        name="Turma"
                        placeholder="Selecione a turma"
                        {...register("class_number", {required: true})}
                        className={
                        errors.class_number 
                        ? "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        }
                    >
                        {classData?.map(turma => (
                            <option value={turma.number}>{turma.number}</option>
                        ))}
                        {errors.class_number?.type === "required" && (
                        <p className="pt-2 text-red-500 text-sm">
                            É obrigatório informar o número da turma
                        </p>
                        )}
                    </select>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <label className="pt-3 pb-2 text-black font-[500]"> Email do Professor </label>
                <div>
                    <select 
                        name="Turma"
                        placeholder="Selecione a turma"
                        {...register("teacher_email", {required: true})}
                        className={
                        errors.teacher_email 
                        ? "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        }
                    >
                        {professorList?.map(professor => (
                            <option value={professor.email}>{professor.email}</option>
                        ))}
                        {errors.teacher_email?.type === "required" && (
                        <p className="pt-2 text-red-500 text-sm">
                            É obrigatório informar o email do professor
                        </p>
                        )}
                    </select>
                </div>
            </div>


    
            <SubmitButton label="Criar Tarefa" icon={<UserPlus />} submitFunction={handleSubmit(onSubmit)}/>
          </div>
        </div>
      );
}

export default Page;