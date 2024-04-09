"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import {LogIn} from 'lucide-react'
import validator from "validator";
import Logo from "@/components/logo";

const Login = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();


 const onSubmit = (data) => {
  console.log(data);
 };

 return (
  <div className="w-screen h-screen bg-[#111] flex justify-center items-center flex-col">
   <div className="flex flex-col items-center justify-center w-[500px]">
    <Logo />

    <div className="flex flex-col w-full">
     <label className="pt-3 pb-2 text-white font-[500]"> Email </label>
     <Input
      className={
       errors.email &&
       "bg-red-300 border-red-500 placeholder:text-red-500 placeholder:font-bold text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
      }
      type="text"
      placeholder="Digite seu e-mail"
      {...register("email", { 
        required: true,
        validate: (value) => {return validator.isEmail(value)},
      })}
     />
     {errors.email?.type === 'required' && <p className="pt-2 text-red-500 text-sm"> É obrigatório informar o email </p>}
     {errors.email?.type === 'validate' && <p className="pt-2 text-red-500 text-sm"> O email é inválido </p>}
    </div>

    <div className="flex flex-col w-full">
     <label className="pt-3 pb-2 text-white font-[500]"> Senha </label>
     <Input
      className={
       errors.senha &&
       "bg-red-300 border-red-500 placeholder:text-red-500 placeholder:font-bold text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
      }
      type="password"
      placeholder="Digite sua senha"
      {...register("senha", { 
        required: true, 
      })}
     />
     {errors.senha?.type === 'required' && <p className="pt-2 p text-red-500 text-sm"> É obrigatório informar a senha </p>}
    </div>

    <Button className="mt-5 shadow-lg w-full" onClick={handleSubmit(onSubmit)}>
     <LogIn className="mr-2"/> Entrar
    </Button>

    <p className="text-white pt-3 font-bold"> Ou então <Link href="/cadastro" className="text-slate-600 hover:text-red-500"> Cadastre-se </Link> </p>

   </div>
  </div>
 );
};

export default Login;
