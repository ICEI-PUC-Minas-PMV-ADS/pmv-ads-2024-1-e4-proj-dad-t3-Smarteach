"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import validator from "validator";
import { SubmitButton } from "@/components/submit-button";
import { useRouter } from "next/navigation";
import { createClass } from "@/services/turmas-services";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();            
      const route = useRouter();
    
      const onSubmit = async (data) => {
        await createClass(data);
        route.push('/');
      };

    return (
        <div className="w-screen h-full flex justify-center items-center flex-col">
          <div className="flex flex-col items-center justify-center w-[500px]">

            <div className="flex flex-col w-full">
              <label className="pt-3 pb-2 text-black font-[500]"> Número da Turma </label>
              <Input
                className={
                  errors.number &&
                  "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                }
                type="number"
                placeholder="Digite uma turma"
                {...register("number", {
                  required: true,
                  minLenght: 3,
                })}
              />
              {errors.number?.type === "required" && (
                <p className="pt-2 p text-red-500 text-sm">
    
                  É obrigatório informar a turma
                </p>
              )}
              {errors.number?.type === "minLenght" && (
                <p className="pt-2 p text-red-500 text-sm">
    
                  A senha deve ser maior de 3 dígitos
                </p>
              )}
            </div>
    
            <SubmitButton label="Criar Turma" icon={<UserPlus />} submitFunction={handleSubmit(onSubmit)}/>
          </div>
        </div>
      );
}

export default Page;