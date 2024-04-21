"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LogIn } from "lucide-react";
import validator from "validator";
import Link from "next/link";
import Logo from "@/components/logo";
import { SubmitButton } from "@/components/submit-button";
import { createStudent } from "@/hooks/alunos-hooks"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getClassList } from "@/hooks/turmas-hooks";

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {data} = getClassList();

  const session = useSession();

  const route = useRouter();

  if(session.status == "authenticated") {
    route.push('/')
  }

  const onSubmit = async (data) => {
    createStudent(data)
    route.push('/auth');
  };
  

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="flex flex-col items-center justify-center w-[500px]">
        <Logo />
        <h1 className="text-3xl text-blackpt-3"> Cadastro </h1>
        <div className="flex flex-col w-full">
          <label className="pt-3 pb-2 text-black font-[500]"> Nome </label>
          <Input
            className={
              errors.nome &&
              "bg-red-300 border-red-500 placeholder:text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
            }
            type="text"
            placeholder="Digite seu nome completo"
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
            placeholder="Digite seu e-mail"
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
                {data?.map(turma => (
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
            placeholder="Digite sua senha"
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

        <SubmitButton label="Cadastre-se" icon={<LogIn />} submitFunction={handleSubmit(onSubmit)}/>

        <p className="text-black pt-3 ">

          Já possui uma conta? <Link href="/auth" className="text-slate-600 hover:text-red-500 pr-3"> Fazer Login </Link>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;
