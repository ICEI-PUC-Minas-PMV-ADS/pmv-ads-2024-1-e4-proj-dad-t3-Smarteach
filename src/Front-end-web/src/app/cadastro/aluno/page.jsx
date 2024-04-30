"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import validator from "validator";
import { SubmitButton } from "@/components/submit-button";
import { useRouter } from "next/navigation";
import { createStudent } from "@/services/alunos-services";
import { getClassList } from "@/services/turmas-services";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {classData} = getClassList();
            
      const route = useRouter();
    
      const onSubmit = async (data) => {
        await createStudent(data)
        route.push('/usuarios');
      };

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
          <div className="flex flex-col items-center justify-center w-[500px]">
            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Nome </label>
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
              <label className="pt-3 pb-2 text-black font-[500]"> Email </label>
              <Input
                className={
                  errors.email &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    return validator.isEmail(value);
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
    
                  É obrigatório informar o email
                </p>
              )}
              {errors.email?.type === "validate" && (
                <p className="pt-2 text-red-500 text-sm"> O email é inválido </p>
              )}
            </div>

            <div className="flex flex-col w-full">
                <label className="pt-3 pb-2 text-black font-[500]"> Número da Turma </label>
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
              <label className="pt-3 pb-2 text-black font-[500]"> Senha </label>
              <Input
                className={
                  errors.senha &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="password"
                placeholder="Digite uma senha"
                {...register("senha", {
                  required: true,
                })}
              />
              {errors.senha?.type === "required" && (
                <p className="pt-2 p text-red-500 text-sm">
    
                  É obrigatório informar a senha
                </p>
              )}
            </div>
    
            <SubmitButton label="Criar Aluno" icon={<UserPlus />} submitFunction={handleSubmit(onSubmit)}/>
          </div>
        </div>
      );
}

export default Page;