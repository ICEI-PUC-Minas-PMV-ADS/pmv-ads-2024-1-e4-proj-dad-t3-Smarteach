"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import validator from "validator";
import { SubmitButton } from "@/components/submit-button";
import { useRouter } from "next/navigation";
import { createProfessor } from "@/services/professor-services";
import { getClassList } from "@/services/turmas-services";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();            
      const route = useRouter();
    
      const onSubmit = async (data) => {
        console.log(data)
        await createProfessor(data)
        console.log(await createProfessor(data))
        // route.push('/usuarios');
      };

      const {classData} = getClassList();

      const turnos = [
        { id: 1, nome: "Manhã" },
        { id: 2, nome: "Tarde" },
        { id: 3, nome: "Noite" }
      ];    

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
                placeholder="Digite o Nome Completo"
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
                placeholder="Digite o Email"
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
              <label className="pt-3 pb-2 text-black font-[500]"> Matéria </label>
              <Input
                className={
                  errors.subject &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="text"
                placeholder="Digite a Matéria"
                {...register("subject", {
                  required: true,
                })}
              />
              {errors.subject?.type === "required" && (
                <p className="pt-2 text-red-500 text-sm">
                  É obrigatório informar uma máteria
                </p>
              )}
            </div>

            <div className="flex flex-col w-full">
                <label className="pt-3 pb-2 text-black font-[500]"> Turno </label>
                <select 
                  name="Turno"
                  placeholder="Selecione o turno"
                  {...register("period", {required: true})}
                  className={
                    errors.period
                    ? "bg-red-300 border-red-500 text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500border block w-full p-2.5"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  }
                >
                  <option value="" selected disabled> Selecione o Turno </option> 
                  {turnos?.map(turno => (
                      <option key={turno.id} value={turno.nome}>{turno.nome}</option>
                    ))}
                  {errors.turno?.type === "required" && (
                    <p className="pt-2 text-red-500 text-sm">
                      É obrigatório informar o turno
                    </p>
                  )}
                </select>
            </div>

            <div className="flex flex-col w-full">
                <label className="pt-3 pb-2 text-black font-[500]"> Número da Turma </label>
                <div>
                    <select 
                        name="Turma"
                        placeholder="Selecione a turma"
                        {...register("classes", {required: true})}
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

            {/* <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Número das Turmas </label>
              <div>
                <Input
                  className={
                    errors.classes &&
                    "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  }
                  type="text"
                  {...register("classes", {
                    required: true,
                  })}
                />
                {errors.classes?.type === "required" && (
                  <p className="pt-2 text-red-500 text-sm">
                    É obrigatório informar as Turmas
                  </p>
                )}
              </div>
            </div> */}
    
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
    
            <SubmitButton label="Criar Professor" icon={<UserPlus />} submitFunction={handleSubmit(onSubmit)}/>
          </div>
        </div>
      );
}

export default Page;