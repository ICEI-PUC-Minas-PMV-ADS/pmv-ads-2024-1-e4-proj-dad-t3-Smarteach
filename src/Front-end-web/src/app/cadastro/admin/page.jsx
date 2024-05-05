"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import validator from "validator";
import { SubmitButton } from "@/components/submit-button";
import { useRouter } from "next/navigation";
import { createAdmin } from "@/services/admin-services";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();            
      const route = useRouter();
    
      const onSubmit = async (data) => {
        await createAdmin(data)
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
    
            <SubmitButton label="Criar Admin" icon={<UserPlus />} submitFunction={handleSubmit(onSubmit)}/>
          </div>
        </div>
      );
}

export default Page;