'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import {LogIn} from 'lucide-react'
import validator from "validator";
import Title from "@/components/Title";
import { signIn } from "next-auth/react";

const Login = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const handleLogin = async (data) =>  {
  await signIn('credentials', {
      ...data,
      callbackUrl: '/'
  })
};

 return (
  <div className="w-screen h-screen bg-[#111] flex justify-center items-center flex-col">
    <Title />
    <form className="flex flex-col items-center justify-center w-[500px]" onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col w-full">
        <label className="pt-3 pb-2 text-white font-[500]"> Nome </label>
        <Input
          className={
            errors.name &&
            "bg-red-300 border-red-500 placeholder:text-red-500 placeholder:font-bold text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
          }
          type="text"
          name="name"
          placeholder="Digite seu nome"
          {...register("name", { 
            required: true,
          })}
        />
        {errors.name?.type === 'required' && <p className="pt-2 text-red-500 text-sm"> É obrigatório informar o nome </p>}
      </div>

      <div className="flex flex-col w-full">
        <label className="pt-3 pb-2 text-white font-[500]"> Email </label>
        <Input
          className={
            errors.email &&
            "bg-red-300 border-red-500 placeholder:text-red-500 placeholder:font-bold text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
          }
          type="email"
          name="email"
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
            errors.password &&
            "bg-red-300 border-red-500 placeholder:text-red-500 placeholder:font-bold text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
          }
          type="password"
          name="password"
          placeholder="Digite sua senha"
          {...register("password", { 
            required: true, 
            // minLength: 8,
          })}
        />
        {errors.password?.type === 'required' && <p className="pt-2 p text-red-500 text-sm"> É obrigatório informar a senha </p>}
        {/* {errors.password?.type === 'minLength' && <p className="pt-2 p text-red-500 text-sm"> A senha deve ser maior que 8 digitos </p>} */}
      </div>

      <Button className="mt-5 shadow-lg w-full" type="submit">
        <LogIn className="mr-2"/> Entrar
      </Button>

      <p className="text-white pt-3 font-bold"> Ou então <Link href="/cadastro" className="text-slate-600 hover:text-red-500"> Cadastre-se </Link> </p>
    </form>
  </div>
 );
};

export default Login;
